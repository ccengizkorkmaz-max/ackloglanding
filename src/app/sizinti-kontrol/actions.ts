'use server'

interface LeakCheckResponse {
    success: boolean;
    found?: number;
    sources?: Array<{
        name: string;
        date: string;
    }>;
    error?: string;
}

export async function checkEmailLeak(email: string) {
    const API_KEY = process.env.LEAKCHECK_API_KEY?.trim()

    if (!API_KEY) {
        return { success: false, error: 'API Anahtarı bulunamadı (LEAKCHECK_API_KEY).' }
    }

    try {
        // LeakCheck.io Public API Endpoint pattern
        // Note: The actual endpoint might vary based on the subscription (Public vs Enterprise).
        // Using the standard public query format: https://leakcheck.io/api?key=...&check=...&type=email
        const response = await fetch(`https://leakcheck.io/api?key=${API_KEY}&check=${encodeURIComponent(email)}&type=email`)
        const data = await response.json()

        if (!data.success) {
            // API usually returns success: false if no leaks or error
            // If data.success is false but error is "Not found", it means safe.
            if (data.error === 'Not found') {
                return { success: true, found: 0, sources: [] }
            }
            return { success: false, error: data.error || 'API Hatası' }
        }

        // Map the sources
        // LeakCheck returns an array of sources usually in 'sources' or similar field depending on tier.
        // Assuming standard response structure: { success: true, result: [ { line: "...", sources: ["LinkedIn"] } ] }
        // OR simply { success: true, sources: [...] }

        // Let's optimize for the standard known structure handling "result" array
        const sources: any[] = []

        if (Array.isArray(data.result)) {
            data.result.forEach((item: any) => {
                if (item.sources && Array.isArray(item.sources)) {
                    item.sources.forEach((s: string) => {
                        if (!sources.find(x => x.name === s)) {
                            sources.push({ name: s, date: 'Bilinmiyor' })
                        }
                    })
                }
            })
        }

        return {
            success: true,
            found: sources.length,
            sources: sources
        }

    } catch (error) {
        console.error('LeakCheck API Error:', error)
        return { success: false, error: 'Sunucu hatası oluştu.' }
    }
}
