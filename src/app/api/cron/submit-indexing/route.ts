import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import sitemap from '@/app/sitemap';
import path from 'path';
import fs from 'fs';

export const maxDuration = 60; // Max execution duration in seconds for Vercel Pro; Hobby defaults to max possible (10s)

export async function GET(request: Request) {
    try {
        // Auth check for Vercel Cron security (skip check if CRON_SECRET is not configured)
        const authHeader = request.headers.get('authorization');
        const cronSecret = process.env.CRON_SECRET;
        if (process.env.NODE_ENV === 'production' && cronSecret && authHeader !== `Bearer ${cronSecret}`) {
            return new Response('Unauthorized', { status: 401 });
        }

        const keyFilePath = path.join(process.cwd(), 'google-indexer-key.json');
        
        if (!fs.existsSync(keyFilePath)) {
            return NextResponse.json({ error: "Google Service Account anahtarı (google-indexer-key.json) bulunamadı." }, { status: 500 });
        }

        const auth = new google.auth.GoogleAuth({
            keyFile: keyFilePath,
            scopes: ['https://www.googleapis.com/auth/indexing'],
        });

        const indexing = google.indexing({
            version: 'v3',
            auth: auth,
        });

        // 1. Get all sitemap URLs
        const sitemapData = await sitemap();
        const allUrls = sitemapData.map(route => route.url);

        if (allUrls.length === 0) {
            return NextResponse.json({ success: true, message: "No URLs found in sitemap." });
        }

        // 2. Compute rotating batch offsets using day number since epoch
        const BATCH_SIZE = 200;
        const totalBatches = Math.ceil(allUrls.length / BATCH_SIZE);
        const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
        const batchIndex = dayIndex % totalBatches;
        const offset = batchIndex * BATCH_SIZE;

        const urlsToSubmit = allUrls.slice(offset, offset + BATCH_SIZE);

        const results: { url: string; success: boolean; error?: string }[] = [];
        const concurrency = 15; // Submit 15 in parallel chunks to prevent Vercel Serverless Function timeouts

        // 3. Submit parallel requests with controlled chunk size
        for (let i = 0; i < urlsToSubmit.length; i += concurrency) {
            const chunk = urlsToSubmit.slice(i, i + concurrency);
            await Promise.all(chunk.map(async (url) => {
                try {
                    await indexing.urlNotifications.publish({
                        requestBody: {
                            url: url,
                            type: 'URL_UPDATED',
                        },
                    });
                    results.push({ url, success: true });
                } catch (err: any) {
                    console.error(`Error indexing ${url}:`, err);
                    results.push({ url, success: false, error: err.message || String(err) });
                }
            }));
        }

        const successCount = results.filter(r => r.success).length;
        const errorCount = results.filter(r => !r.success).length;

        return NextResponse.json({
            success: true,
            message: `Rotating batch ${batchIndex + 1}/${totalBatches} submitted successfully.`,
            offset,
            totalSubmitted: urlsToSubmit.length,
            successCount,
            errorCount,
            results
        }, { status: 200 });

    } catch (error: any) {
        console.error("Cron Indexing API error:", error);
        return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
    }
}
