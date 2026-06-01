import { NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';

export async function POST(request: Request) {
    try {
        const key = process.env.INDEXNOW_KEY;
        const host = "logsiem.com";

        if (!key) {
            return NextResponse.json({ error: "No IndexNow key configured" }, { status: 500 });
        }

        // Sitemap.ts'ten tüm URL'leri dinamik olarak çekiyoruz
        const sitemapData = await sitemap();
        const urls = sitemapData.map(route => route.url);

        // IndexNow API'ye gönderiyoruz (Bing, Yandex, vs. tüm katılımcı arama motorlarına iletilir)
        const response = await fetch("https://api.indexnow.org/indexnow", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                host: host,
                key: key,
                keyLocation: `https://${host}/${key}.txt`,
                urlList: urls
            })
        });

        let result;
        try {
            result = await response.json();
        } catch {
            result = await response.text();
        }

        return NextResponse.json({
            success: true,
            status: response.status,
            message: "URLs submitted to IndexNow successfully.",
            urlsSubmitted: urls.length,
            result
        }, { status: 200 });

    } catch (error) {
        console.error("IndexNow submission error:", error);
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
