import axios from 'axios';

export interface SecurityAnalysisResults {
    target: string;
    riskScore: number;
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
    private shodanKey = process.env.SHODAN_API_KEY;
    private criminalIpKey = process.env.CRIMINALIP_API_KEY;
    private pulsediveKey = process.env.PULSEDIVE_API_KEY;

    async analyze(target: string): Promise<SecurityAnalysisResults> {
        const results: SecurityAnalysisResults = {
            target,
            riskScore: 0,
            shodan: null,
            criminalIp: null,
            pulsedive: null
        };

        console.log("SecurityAnalyzer keys check:", {
            shodan: !!this.shodanKey,
            criminal: !!this.criminalIpKey,
            pulsedive: !!this.pulsediveKey
        });

        // Parallel fetching
        const [shodanData, criminalData, pulsediveData] = await Promise.allSettled([
            this.fetchShodan(target),
            this.fetchCriminalIp(target),
            this.fetchPulsedive(target)
        ]);

        if (shodanData.status === 'fulfilled') {
            results.shodan = shodanData.value;
        } else {
            console.error("Shodan Task Failed:", shodanData.reason);
        }

        if (criminalData.status === 'fulfilled') {
            results.criminalIp = criminalData.value;
        } else {
            console.error("Criminal IP Task Failed:", criminalData.reason);
        }

        if (pulsediveData.status === 'fulfilled') {
            results.pulsedive = pulsediveData.value;
        } else {
            console.error("Pulsedive Task Failed:", pulsediveData.reason);
        }

        // Calculate aggregated risk score (simple weighted average)
        results.riskScore = this.calculateAggregatedRisk(results);

        return results;
    }

    private async fetchShodan(target: string) {
        if (!this.shodanKey) {
            console.warn("Shodan API key missing");
            return null;
        }
        try {
            const url = `https://api.shodan.io/shodan/host/${target}?key=${this.shodanKey}`;
            const res = await axios.get(url);
            console.log("Shodan success for:", target);
            return {
                ports: res.data.ports || [],
                hostnames: res.data.hostnames || [],
                os: res.data.os,
                vulns: res.data.vulns || [],
                isp: res.data.isp
            };
        } catch (e: any) {
            console.error("Shodan Fetch Error:", e.response?.status || e.message);
            return null;
        }
    }

    private async fetchCriminalIp(target: string) {
        if (!this.criminalIpKey) {
            console.warn("Criminal IP API key missing");
            return null;
        }
        try {
            const url = `https://api.criminalip.io/v1/asset/ip/report?ip=${target}`;
            const res = await axios.get(url, {
                headers: { 'x-api-key': this.criminalIpKey }
            });
            console.log("Criminal IP success for:", target);

            // Handle different score formats and missing data
            const scoreInbound = res.data.score?.inbound;
            const scoreValue = typeof scoreInbound === 'number' ? scoreInbound : (parseInt(scoreInbound) || 0);

            return {
                score: scoreValue * 20,
                deviceType: res.data.is_vpn ? "VPN" : (res.data.is_proxy ? "Proxy" : "Direct"),
                isMalicious: scoreValue > 3,
                threatLevel: scoreValue > 4 ? "Critical" : (scoreValue > 2 ? "Medium" : "Low")
            };
        } catch (e: any) {
            console.error("Criminal IP Fetch Error:", e.response?.status || e.message);
            return null;
        }
    }

    private async fetchPulsedive(target: string) {
        if (!this.pulsediveKey) {
            console.warn("Pulsedive API key missing");
            return null;
        }
        try {
            const url = `https://pulsedive.com/api/info.php?indicator=${target}&key=${this.pulsediveKey}`;
            const res = await axios.get(url);
            console.log("Pulsedive success for:", target);
            return {
                risk: res.data.risk || "unknown",
                score: this.mapPulsediveRisk(res.data.risk),
                threats: res.data.threats?.map((t: any) => t.name) || [],
                isBlacklisted: res.data.retired === 0 && res.data.risk !== "none"
            };
        } catch (e: any) {
            console.error("Pulsedive Fetch Error:", e.response?.status || e.message);
            return null;
        }
    }

    private mapPulsediveRisk(risk: string): number {
        const mapping: Record<string, number> = {
            'critical': 100,
            'high': 75,
            'medium': 50,
            'low': 25,
            'none': 0,
            'unknown': 0
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
