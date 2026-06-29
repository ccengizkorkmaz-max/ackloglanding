'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || "re_123")

interface RoiLeadData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    competitor: string;
    currentCost: number;
    acklogCost: number;
    savings: number;
    currency: string;
}

export async function saveRoiLead(data: RoiLeadData) {
    console.log('Saving ROI Lead Data:', data)

    const dbData = {
        full_name: data.name,
        company: data.company || '',
        title: 'SIEM ROI Hesaplayıcı',
        email: data.email,
        score: Math.round(data.savings),
        answers: {
            phone: data.phone || '',
            competitor: data.competitor,
            currentCost: data.currentCost,
            acklogCost: data.acklogCost,
            savings: data.savings,
            currency: data.currency,
            calculator: 'siem-roi'
        }
    }

    const currencySymbol = data.currency === 'USD' ? '$' : '₺'
    const formattedSavings = `${currencySymbol}${data.savings.toLocaleString('tr-TR')}`
    const formattedCurrent = `${currencySymbol}${data.currentCost.toLocaleString('tr-TR')}`
    const formattedAcklog = `${currencySymbol}${data.acklogCost.toLocaleString('tr-TR')}`

    try {
        if (process.env.RESEND_API_KEY) {
            // 1. Send Email to User
            try {
                await resend.emails.send({
                    from: "ACKLOG <info@logsiem.com>",
                    to: data.email,
                    subject: "SIEM Tasarruf Raporunuz Hazır",
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 10px;">
                            <div style="background-color: #0f172a; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                                <h2 style="color: #60a5fa; margin: 0;">ACKLOG</h2>
                            </div>
                            <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
                                <h3 style="color: #1e293b; margin-top: 0;">Sayın ${data.name},</h3>
                                <p style="color: #475569; line-height: 1.6;">ACKLOG SIEM ROI Hesaplayıcısı ile yaptığınız maliyet analizi sonuçları aşağıdadır:</p>
                                
                                <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                                    <span style="font-size: 14px; font-weight: bold; color: #065f46; display: block; text-transform: uppercase; tracking-wider;">Yıllık Net Tasarruf Potansiyeli</span>
                                    <span style="font-size: 36px; font-weight: 900; color: #047857; display: block; margin-top: 5px;">${formattedSavings}</span>
                                </div>

                                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px;">
                                    <thead>
                                        <tr style="border-bottom: 2px solid #e2e8f0; text-align: left;">
                                            <th style="padding: 10px 0; color: #64748b;">Maliyet Kalemi</th>
                                            <th style="padding: 10px 0; color: #64748b;">Mevcut SIEM</th>
                                            <th style="padding: 10px 0; color: #22c55e;">ACKLOG SIEM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="border-bottom: 1px solid #f1f5f9;">
                                            <td style="padding: 12px 0; font-weight: bold; color: #334155;">Yıllık Toplam Maliyet</td>
                                            <td style="padding: 12px 0; color: #ef4444; font-weight: bold; text-decoration: line-through;">${formattedCurrent}</td>
                                            <td style="padding: 12px 0; color: #22c55e; font-weight: bold;">${formattedAcklog}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                                    <strong style="color: #334155;">ACKLOG Neden Daha Ekonomik?</strong>
                                    <ul style="color: #475569; margin: 5px 0 0 0; padding-left: 20px; line-height: 1.6;">
                                        <li><strong>%80 Sıkıştırma Oranı:</strong> ClickHouse tabanlı kolon veritabanı mimarimiz ile donanım ve disk maliyetlerinizi 5 kata kadar azaltırız.</li>
                                        <li><strong>Sabit Lisanslama:</strong> Sürpriz limit aşımları ve EPS/GB tabanlı cezalandırıcı faturalarla karşılaşmazsınız.</li>
                                        <li><strong>Yerli ve Türkçe Destek:</strong> Dolar kuru dalgalanmalarından etkilenmez, doğrudan yerel mühendislik desteği alırsınız.</li>
                                    </ul>
                                </div>

                                <div style="text-align: center; margin-top: 30px;">
                                    <a href="https://logsiem.com/demo-talep" style="background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">Ücretsiz POC / Test Süreci Başlatın</a>
                                </div>
                            </div>
                            <div style="text-align: center; padding-top: 20px; color: #94a3b8; font-size: 12px;">
                                &copy; ${new Date().getFullYear()} ACKLOG SIEM. Tüm hakları saklıdır.
                            </div>
                        </div>
                    `
                })
                console.log("Result email sent to user.")
            } catch (emailError) {
                console.error("Failed to send ROI result email to user:", emailError)
            }

            // 2. Notify Admin
            try {
                await resend.emails.send({
                    from: "ACKLOG System <info@logsiem.com>",
                    to: "ccengizkorkmaz@gmail.com",
                    subject: `Yeni ROI Lead: ${data.name} (Tasarruf: ${formattedSavings})`,
                    html: `
                        <h3>Yeni SIEM ROI Lead'i</h3>
                        <p><strong>Ad Soyad:</strong> ${data.name}</p>
                        <p><strong>Firma:</strong> ${data.company || 'Belirtilmedi'}</p>
                        <p><strong>Telefon:</strong> ${data.phone || 'Belirtilmedi'}</p>
                        <p><strong>E-posta:</strong> ${data.email}</p>
                        <p><strong>Karşılaştırılan Rakip:</strong> ${data.competitor.toUpperCase()}</p>
                        <p><strong>Mevcut SIEM Maliyeti:</strong> ${formattedCurrent}</p>
                        <p><strong>ACKLOG SIEM Maliyeti:</strong> ${formattedAcklog}</p>
                        <p><strong>Yıllık Tasarruf:</strong> ${formattedSavings}</p>
                    `
                })
            } catch (adminError) {
                console.error("Failed to notify admin about ROI lead:", adminError)
            }
        }

        // 3. Save to Supabase
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (supabaseUrl && supabaseKey) {
            try {
                const { createClient } = await import('@supabase/supabase-js')
                const supabase = createClient(supabaseUrl, supabaseKey)

                const { error } = await supabase
                    .from('leads')
                    .insert(dbData)

                if (error) {
                    console.error('Supabase error saving ROI lead:', error)
                }
            } catch (importError) {
                console.warn('Supabase JS not installed or failed to import.', importError)
            }
        }

        return { success: true, message: "Tasarruf raporunuz başarıyla e-posta adresinize gönderildi." }
    } catch (e: any) {
        console.error('saveRoiLead error:', e)
        return { success: false, message: 'İşlem sırasında bir hata oluştu: ' + e.message }
    }
}

interface SocLeadData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    analystCount: number;
    avgSalary: number;
    licensingCost: number;
    inHouseTotal: number;
    acklogMsspTotal: number;
    savings: number;
    currency: string;
}

export async function saveSocLead(data: SocLeadData) {
    console.log('Saving SOC Cost Lead Data:', data)

    const dbData = {
        full_name: data.name,
        company: data.company || '',
        title: 'SOC Maliyet Hesaplayıcı',
        email: data.email,
        score: Math.round(data.savings),
        answers: {
            phone: data.phone || '',
            analystCount: data.analystCount,
            avgSalary: data.avgSalary,
            licensingCost: data.licensingCost,
            inHouseTotal: data.inHouseTotal,
            acklogMsspTotal: data.acklogMsspTotal,
            savings: data.savings,
            currency: data.currency,
            calculator: 'soc-cost'
        }
    }

    const formattedSavings = `${data.savings.toLocaleString('tr-TR')} TL`
    const formattedInHouse = `${data.inHouseTotal.toLocaleString('tr-TR')} TL`
    const formattedAcklogMssp = `${data.acklogMsspTotal.toLocaleString('tr-TR')} TL`

    try {
        if (process.env.RESEND_API_KEY) {
            // 1. Send Email to User
            try {
                await resend.emails.send({
                    from: "ACKLOG <info@logsiem.com>",
                    to: data.email,
                    subject: "SOC Maliyet Analiz Raporunuz Hazır",
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; padding: 20px; border-radius: 10px;">
                            <div style="background-color: #0f172a; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                                <h2 style="color: #a855f7; margin: 0;">ACKLOG</h2>
                            </div>
                            <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
                                <h3 style="color: #1e293b; margin-top: 0;">Sayın ${data.name},</h3>
                                <p style="color: #475569; line-height: 1.6;">ACKLOG & MSSP Hibrit SOC Maliyeti analizi sonuçlarınız aşağıdadır:</p>
                                
                                <div style="background-color: #faf5ff; border: 1px solid #e9d5ff; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                                    <span style="font-size: 14px; font-weight: bold; color: #6b21a8; display: block; text-transform: uppercase; tracking-wider;">Hibrit Model Yıllık Toplam Tasarruf</span>
                                    <span style="font-size: 36px; font-weight: 900; color: #7e22ce; display: block; margin-top: 5px;">${formattedSavings}</span>
                                </div>

                                <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px;">
                                    <thead>
                                        <tr style="border-bottom: 2px solid #e2e8f0; text-align: left;">
                                            <th style="padding: 10px 0; color: #64748b;">Model</th>
                                            <th style="padding: 10px 0; color: #64748b;">Yıllık Bütçe</th>
                                            <th style="padding: 10px 0; color: #a855f7;">Durum</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="border-bottom: 1px solid #f1f5f9;">
                                            <td style="padding: 12px 0; font-weight: bold; color: #334155;">Kurum İçi SOC (In-House)</td>
                                            <td style="padding: 12px 0; color: #ef4444; font-weight: bold; text-decoration: line-through;">${formattedInHouse}</td>
                                            <td style="padding: 12px 0; color: #ef4444; font-size: 12px;">Personel devir riski yüksek</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid #f1f5f9;">
                                            <td style="padding: 12px 0; font-weight: bold; color: #334155;">ACKLOG & MSSP Ortaklığı</td>
                                            <td style="padding: 12px 0; color: #22c55e; font-weight: bold;">${formattedAcklogMssp}</td>
                                            <td style="padding: 12px 0; color: #22c55e; font-weight: bold; font-size: 12px;">7/24 Profesyonel İzleme</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                                    <strong style="color: #334155;">Neden ACKLOG + MSSP Hibrit SOC Modeli?</strong>
                                    <ul style="color: #475569; margin: 5px 0 0 0; padding-left: 20px; line-height: 1.6;">
                                        <li><strong>Maliyet Optimizasyonu:</strong> 7/24 vardiyalı ekiplerin getirdiği yüksek maaş, eğitim, lisans ve operasyon bütçelerini %75'e kadar düşürürsünüz.</li>
                                        <li><strong>Uzman İş Gücü:</strong> Sürekli siber güvenlik uzmanı yetiştirme, işten ayrılma durumunda siber zafiyet yaşama riskini sıfıra indirirsiniz.</li>
                                        <li><strong>Gelişmiş Teknolojik Altyapı:</strong> ACKLOG SIEM'in in-memory korelasyon gücünü, MSSP partnerlerimizin uzman analistleriyle 7/24 birleştirirsiniz.</li>
                                    </ul>
                                </div>

                                <div style="text-align: center; margin-top: 30px;">
                                    <a href="https://logsiem.com/demo-talep" style="background-color: #7e22ce; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold;">Finansal SOC Danışmanlığı Alın</a>
                                </div>
                            </div>
                            <div style="text-align: center; padding-top: 20px; color: #94a3b8; font-size: 12px;">
                                &copy; ${new Date().getFullYear()} ACKLOG SIEM. Tüm hakları saklıdır.
                            </div>
                        </div>
                    `
                })
                console.log("Result email sent to user.")
            } catch (emailError) {
                console.error("Failed to send SOC result email to user:", emailError)
            }

            // 2. Notify Admin
            try {
                await resend.emails.send({
                    from: "ACKLOG System <info@logsiem.com>",
                    to: "ccengizkorkmaz@gmail.com",
                    subject: `Yeni SOC Lead: ${data.name} (Tasarruf: ${formattedSavings})`,
                    html: `
                        <h3>Yeni SOC Maliyet Lead'i</h3>
                        <p><strong>Ad Soyad:</strong> ${data.name}</p>
                        <p><strong>Firma:</strong> ${data.company || 'Belirtilmedi'}</p>
                        <p><strong>Telefon:</strong> ${data.phone || 'Belirtilmedi'}</p>
                        <p><strong>E-posta:</strong> ${data.email}</p>
                        <p><strong>Analist Sayısı:</strong> ${data.analystCount}</p>
                        <p><strong>Ortalama Brüt Maaş (Aylık):</strong> ${data.avgSalary.toLocaleString('tr-TR')} TL</p>
                        <p><strong>SIEM Yıllık Lisans:</strong> ${data.licensingCost.toLocaleString('tr-TR')} TL</p>
                        <p><strong>Kurum İçi SOC Maliyeti:</strong> ${formattedInHouse}</p>
                        <p><strong>ACKLOG + MSSP Maliyeti:</strong> ${formattedAcklogMssp}</p>
                        <p><strong>Yıllık Tasarruf:</strong> ${formattedSavings}</p>
                    `
                })
            } catch (adminError) {
                console.error("Failed to notify admin about SOC lead:", adminError)
            }
        }

        // 3. Save to Supabase
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (supabaseUrl && supabaseKey) {
            try {
                const { createClient } = await import('@supabase/supabase-js')
                const supabase = createClient(supabaseUrl, supabaseKey)

                const { error } = await supabase
                    .from('leads')
                    .insert(dbData)

                if (error) {
                    console.error('Supabase error saving SOC lead:', error)
                }
            } catch (importError) {
                console.warn('Supabase JS not installed or failed to import.', importError)
            }
        }

        return { success: true, message: "Maliyet analiz raporunuz başarıyla e-posta adresinize gönderildi." }
    } catch (e: any) {
        console.error('saveSocLead error:', e)
        return { success: false, message: 'İşlem sırasında bir hata oluştu: ' + e.message }
    }
}
