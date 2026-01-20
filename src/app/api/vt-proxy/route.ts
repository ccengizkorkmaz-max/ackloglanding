import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const target = searchParams.get('target');
    const apiKey = process.env.VIRUSTOTAL_API_KEY;

    if (!target) {
        return NextResponse.json({ error: 'Target is required' }, { status: 400 });
    }

    if (!apiKey) {
        return NextResponse.json({ error: 'Server configuration error: API Key missing' }, { status: 500 });
    }

    try {
        const response = await fetch(`https://www.virustotal.com/api/v3/ip_addresses/${target}`, {
            headers: {
                'x-apikey': apiKey,
                'vocab': 'last_analysis_stats,reputation' // Optimization? VT v3 might not support this header, but we'll stick to standard headers.
            }
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            return NextResponse.json(
                { error: 'VirusTotal API Error', details: errorData },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error: any) {
        return NextResponse.json({ error: 'Internal Server Error', message: error.message }, { status: 500 });
    }
}
