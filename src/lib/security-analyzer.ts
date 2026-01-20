import axios from 'axios';

export interface SecurityAnalysisResults {
    target: string;
    riskScore: number;
    metadata?: {
        shodanActive: boolean;
        criminalActive: boolean;
        pulsediveActive: boolean;
        isDemo: boolean;
    };
    shodan: {
        ports: number[];
        hostnames: string[];
        os?: string;
        vulns: string[];
        isp?: string;
    } | null;
    criminalIp: {
        score: number;
        deviceType?: string;
        isMalicious: boolean;
        threatLevel: string;
    } | null;
    pulsedive: {
        risk: string;
        score: number;
        threats: string[];
        isBlacklisted: boolean;
    } | null;
}

export class SecurityAnalyzer {
    private getKeys() {
        return {
            shodan: process.env.SHODAN_API_KEY?.trim(),
            criminal: process.env.CRIMINALIP_API_KEY?.trim(),
            pulsedive: process.env.PULSEDIVE_API_KEY?.trim()
        };
    }

    private cleanTarget(target: string): string {
        try {
            if (target.includes('://')) {
                const url = new URL(target);
                return url.hostname;
            }
            return target.split('/')[0].trim();
        } catch (e) {
            return target.trim();
        }
    }

    async analyze(input: string): Promise<SecurityAnalysisResults> {
        const target = this.cleanTarget(input);
        const keys = this.getKeys();

        console.log("Analysis start for:", target);

        const isDemoTarget = target.toLowerCase() === 'demo' || target.toLowerCase() === 'test';
        const noKeysAvailable = !keys.shodan && !keys.criminal && !keys.pulsedive;

        if (isDemoTarget || noKeysAvailable) {
            console.log("Triggering Demo Mode (Simulated Data)");
            const demoRes = this.getDemoResults(target);
            demoRes.metadata = {
                shodanActive: !!keys.shodan,
                criminalActive: !!keys.criminal,
                pulsediveActive: !!keys.pulsedive,
                isDemo: true
            };
            return demoRes;
        }

        const results: SecurityAnalysisResults = {
            target,
            riskScore: 0,
            metadata: {
                shodanActive: !!keys.shodan,
                criminalActive: !!keys.criminal,
                pulsediveActive: !!keys.pulsedive,
                isDemo: false
            },
            shodan: null,
            criminalIp: null,
            pulsedive: null
        };

        const [shodanData, criminalData, pulsediveData] = await Promise.allSettled([
            this.fetchShodan(target, keys.shodan),
            this.fetchCriminalIp(target, keys.criminal),
            this.fetchPulsedive(target, keys.pulsedive)
        ]);

        if (shodanData.status === 'fulfilled') results.shodan = shodanData.value;
        if (criminalData.status === 'fulfilled') results.criminalIp = criminalData.value;
        if (pulsediveData.status === 'fulfilled') results.pulsedive = pulsediveData.value;

        results.riskScore = this.calculateAggregatedRisk(results);
        return results;
    }

    private async fetchShodan(target: string, key?: string) {
        if (!key) return null;
        try {
            const url = `https://api.shodan.io/shodan/host/${target}?key=${key}`;
            const res = await axios.get(url);
            return {
                ports: res.data.ports || [],
                hostnames: res.data.hostnames || [],
                os: res.data.os,
                vulns: res.data.vulns || [],
                isp: res.data.isp
            };
        } catch (e: any) {
            console.error("Shodan Error:", e.response?.status || e.message);
            return null;
        }
    }

    private async fetchCriminalIp(target: string, key?: string) {
        if (!key) return null;
        try {
            const url = `https://api.criminalip.io/v1/asset/ip/report?ip=${target}`;
            const res = await axios.get(url, { headers: { 'x-api-key': key } });
            const scoreInbound = res.data.score?.inbound;
            const scoreValue = typeof scoreInbound === 'number' ? scoreInbound : (parseInt(scoreInbound) || 0);
            return {
                score: scoreValue * 20,
                deviceType: res.data.is_vpn ? "VPN" : (res.data.is_proxy ? "Proxy" : "Direct"),
                isMalicious: scoreValue > 3,
                threatLevel: scoreValue > 4 ? "Critical" : (scoreValue > 2 ? "Medium" : "Low")
            };
        } catch (e: any) {
            console.error("Criminal IP Error:", e.response?.status || e.message);
            return null;
        }
    }

    private async fetchPulsedive(target: string, key?: string) {
        if (!key) return null;
        try {
            const url = `https://pulsedive.com/api/info.php?indicator=${target}&key=${key}`;
            const res = await axios.get(url);
            return {
                risk: res.data.risk || "unknown",
                score: this.mapPulsediveRisk(res.data.risk),
                threats: res.data.threats?.map((t: any) => t.name) || [],
                isBlacklisted: res.data.retired === 0 && res.data.risk !== "none"
            };
        } catch (e: any) {
            console.error("Pulsedive Error:", e.response?.status || e.message);
            return null;
        }
    }

    private getDemoResults(target: string): SecurityAnalysisResults {
        const isActuallyDemo = target.toLowerCase() === 'demo' || target.toLowerCase() === 'test';
        return {
            target: isActuallyDemo ? target : `${target} (Simülasyon Modu)`,
            riskScore: 72,
            shodan: {
                ports: [80, 443, 8080, 21, 22, 3306],
                hostnames: [`server-${target}.net`],
                os: 'Ubuntu Linux 22.04',
                vulns: ['CVE-2021-34527 (PrintNightmare)', 'CVE-2023-4863 (WebP)'],
                isp: 'Cloudflare / DigitalOcean'
            },
            criminalIp: {
                score: 60,
                deviceType: 'Server',
                isMalicious: false,
                threatLevel: 'Medium'
            },
            pulsedive: {
                risk: 'high',
                score: 80,
                threats: ['Potential Scanner', 'Known Hosting'],
                isBlacklisted: false
            }
        };
    }

    private mapPulsediveRisk(risk: string): number {
        const mapping: Record<string, number> = {
            'critical': 100, 'high': 75, 'medium': 50, 'low': 25, 'none': 0, 'unknown': 0
        };
        return mapping[risk.toLowerCase()] || 0;
    }

    private calculateAggregatedRisk(res: SecurityAnalysisResults): number {
        let scores = [];
        if (res.criminalIp) scores.push(res.criminalIp.score);
        if (res.pulsedive) scores.push(res.pulsedive.score);
        if (res.shodan?.vulns && res.shodan.vulns.length > 0) scores.push(90);
        if (scores.length === 0) return 0;
        return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    }
}
