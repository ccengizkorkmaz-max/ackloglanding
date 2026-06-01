import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import sitemap from '@/app/sitemap';
import path from 'path';
import fs from 'fs';

export async function POST(request: Request) {
    try {
        // Body'den belirli URL'ler gelirse sadece onları indexle, gelmezse tüm sitemap'i indexle
        let body;
        try {
            body = await request.json();
        } catch (e) {
            body = {};
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

        let urlsToSubmit: string[] = [];

        if (body.url) {
            urlsToSubmit.push(body.url);
        } else if (body.urls && Array.isArray(body.urls)) {
            urlsToSubmit = body.urls;
        } else {
            // Sitemap'ten tüm URL'leri çek
            const sitemapData = await sitemap();
            urlsToSubmit = sitemapData.map(route => route.url);
        }

        const results = [];

        // Her URL için Google Indexing API'ye istek at
        for (const url of urlsToSubmit) {
            try {
                const res = await indexing.urlNotifications.publish({
                    requestBody: {
                        url: url,
                        type: 'URL_UPDATED',
                    },
                });
                results.push({ url, status: res.status, data: res.data });
            } catch (err: any) {
                console.error(`Error indexing ${url}:`, err);
                results.push({ url, error: err.message || String(err) });
            }
        }

        return NextResponse.json({
            success: true,
            message: "URLs submitted to Google Indexing API",
            totalSubmitted: urlsToSubmit.length,
            results
        }, { status: 200 });

    } catch (error: any) {
        console.error("Google Indexing API error:", error);
        return NextResponse.json({ error: error.message || String(error) }, { status: 500 });
    }
}
