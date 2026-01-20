import tls from 'tls';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';

export interface GvmConfig {
    host: string;
    port: number;
    username: string;
    password: string;
}

export class GvmBridge {
    private config: GvmConfig;
    private parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_"
    });
    private builder = new XMLBuilder();

    constructor(config: GvmConfig) {
        this.config = config;
    }

    private async sendCommand(xml: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const socket = tls.connect(this.config.port, this.config.host, {
                rejectUnauthorized: false, // Often GVM uses self-signed certs
            }, () => {
                socket.write(xml);
            });

            socket.on('data', (data) => {
                const response = data.toString();
                socket.end();
                try {
                    resolve(this.parser.parse(response));
                } catch (e) {
                    reject(e);
                }
            });

            socket.on('error', (err) => {
                reject(err);
            });

            socket.setTimeout(30000, () => {
                socket.destroy();
                reject(new Error("GVM request timeout"));
            });
        });
    }

    async authenticate() {
        const xml = `<authenticate><credentials><username>${this.config.username}</username><password>${this.config.password}</password></credentials></authenticate>`;
        const result = await this.sendCommand(xml);
        const status = result?.authenticate_response?.["@_status"];
        if (status !== '200') {
            throw new Error(`GVM Authentication failed with status: ${status}`);
        }
        return true;
    }

    async createTarget(name: string, hosts: string) {
        const xml = `<create_target><name>${name}</name><hosts>${hosts}</hosts></create_target>`;
        const result = await this.sendCommand(xml);
        return result?.create_target_response?.["@_id"];
    }

    async createTask(name: string, targetId: string, configId: string) {
        const xml = `<create_task><name>${name}</name><target_id>${targetId}</target_id><config_id>${configId}</config_id></create_task>`;
        const result = await this.sendCommand(xml);
        return result?.create_task_response?.["@_id"];
    }

    async startTask(taskId: string) {
        const xml = `<start_task task_id="${taskId}"/>`;
        const result = await this.sendCommand(xml);
        return result?.start_task_response?.report_id;
    }

    async getTaskStatus(taskId: string) {
        const xml = `<get_tasks task_id="${taskId}"/>`;
        const result = await this.sendCommand(xml);
        const task = result?.get_tasks_response?.task;
        return {
            status: task?.status,
            progress: task?.progress,
            reportId: task?.last_report?.["@_id"]
        };
    }

    async getReportResults(reportId: string) {
        const xml = `<get_reports report_id="${reportId}"/>`;
        const result = await this.sendCommand(xml);
        const report = result?.get_reports_response?.report;
        const counts = report?.report?.severity_counts?.count || [];

        // Map GVM severities to our dashboard categories
        const results = {
            critical: 0,
            high: 0,
            medium: 0,
            low: 0
        };

        counts.forEach((c: any) => {
            const name = c?.["@_name"]?.toLowerCase();
            const value = parseInt(c?.["#text"] || "0");
            if (name === 'high') results.high = value;
            if (name === 'medium') results.medium = value;
            if (name === 'low') results.low = value;
            if (name === 'log' || name === 'fp') results.low += value; // Logs as low
        });

        return results;
    }
}
