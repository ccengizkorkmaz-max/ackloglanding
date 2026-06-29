"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShieldCheck, 
  Coins, 
  Award, 
  Cpu, 
  Users, 
  MapPin, 
  Building2, 
  Globe, 
  Loader2, 
  CheckCircle2, 
  Send,
  Lock,
  ArrowRight
} from "lucide-react";
import { savePartnerLead } from "../araclar/actions";

export default function IsOrtakligiPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    city: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    try {
      const res = await savePartnerLead(formData);

      if (res.success) {
        setStatus("success");
        setResponseMessage(res.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          city: "",
          message: ""
        });
      } else {
        setStatus("error");
        setResponseMessage(res.message || "Bir hata oluştu.");
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage("Bağlantı hatası oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col justify-between">
      <Navbar />

      <div className="relative overflow-hidden pt-32 pb-24">
        {/* Background Lights */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-900/10 to-transparent blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/5 blur-[120px] -z-10" />

        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left side: Value proposition */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400 uppercase tracking-wider mb-6">
                  <Award className="w-3.5 h-3.5" /> ACKLOG İş Ortaklığı Programı
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                  ACKLOG SIEM ile <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
                    Büyümeye Ortak Olun
                  </span>
                </h1>
                <p className="text-slate-400 text-lg mt-4 leading-relaxed max-w-xl">
                  Sistem entegratörleri, BT danışmanlık firmaları ve MSSP'ler için özel olarak tasarlanan partner programımız ile yüksek kazanç marjları elde edin, müşterilerinize yerli siber güvenlik gücü sunun.
                </p>
              </div>

              {/* Perks Grid */}
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Coins className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold text-base">En Yüksek Kar Marjları</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Sektör standartlarının üzerinde, %25'ten başlayıp %40'a varan bayi (reseller) marjı oranları ile kârlılığınızı artırın.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-white font-bold text-base">Yerli Malı Belgesi & DMO</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Kamu ihalelerinde %15 fiyat avantajı sağlayan Yerli Malı Belgesi ve Devlet Malzeme Ofisi (DMO) katalog kaydı ile ihaleleri kolayca kazanın.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-base">Üretici Desteği (Tier-3)</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Müşteri POC ve kurulum süreçlerinde doğrudan yerli siber güvenlik mühendislerimizden ücretsiz tier-3 üretici desteği alın.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-white font-bold text-base">Eğitim ve Sertifikasyon</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Satış ve teknik ekipleriniz için ücretsiz sertifikalı ACKLOG eğitim programları ile ekibinizin yetkinliğini geliştirin.
                  </p>
                </div>
              </div>

              {/* Call to margins calculator */}
              <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="text-white font-bold text-sm">Partner Kârlılığınızı Simüle Edin</h4>
                  <p className="text-xs text-slate-400 mt-1">ACKLOG satarak elde edebileceğiniz yıllık geliri hesaplayın.</p>
                </div>
                <Link href="/araclar/partner-kazanc-hesaplayici">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 whitespace-nowrap cursor-pointer">
                    Kazanç Hesaplayıcıya Git <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right side: Partner registration form */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[5px] bg-gradient-to-r from-blue-500 to-indigo-500" />
                
                {status === "success" ? (
                  <div className="flex flex-col items-center text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-2">
                      <CheckCircle2 className="w-10 h-10 animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-black text-white">Başvuru Alındı!</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {responseMessage}
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setStatus("idle")} 
                      className="mt-6"
                    >
                      Yeni Başvuru Gönder
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Ortaklık Başvurusu</h3>
                      <p className="text-xs text-slate-500">
                        Bilişim firması yetkilisi olarak formu doldurun, 24 saat içinde iş ortaklığı şartlarını görüşelim.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Yetkili Ad Soyad</label>
                        <Input
                          className="bg-slate-950 border-slate-800 text-white focus:ring-blue-500"
                          placeholder="Ahmet Yılmaz"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Kurumsal E-posta</label>
                          <Input
                            type="email"
                            className="bg-slate-950 border-slate-800 text-white focus:ring-blue-500"
                            placeholder="ahmet@sirket.com"
                            required
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Telefon Numarası</label>
                          <Input
                            type="tel"
                            className="bg-slate-950 border-slate-800 text-white focus:ring-blue-500"
                            placeholder="0532 XXXXXXX"
                            required
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Firma Adı</label>
                        <Input
                          className="bg-slate-950 border-slate-800 text-white focus:ring-blue-500"
                          placeholder="Teknoloji Bilişim Ltd."
                          required
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Firma Web Sitesi (Opsiyonel)</label>
                          <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                            <Input
                              className="bg-slate-950 border-slate-800 text-white pl-10 focus:ring-blue-500"
                              placeholder="www.sirket.com"
                              value={formData.website}
                              onChange={e => setFormData({ ...formData, website: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Şehir</label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                            <Input
                              className="bg-slate-950 border-slate-800 text-white pl-10 focus:ring-blue-500"
                              placeholder="İstanbul"
                              required
                              value={formData.city}
                              onChange={e => setFormData({ ...formData, city: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Mesajınız (Opsiyonel)</label>
                        <textarea
                          rows={3}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl py-2.5 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-600 text-sm"
                          placeholder="Mevcut siber güvenlik portföyünüzden veya hedeflerinizden kısaca bahsedebilirsiniz..."
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="text-xs text-red-500 text-center font-medium bg-red-500/10 border border-red-500/20 py-2 rounded-lg">
                        {responseMessage}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl mt-2 cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="animate-spin mr-2 h-4 w-4" />
                          Başvuru Gönderiliyor...
                        </>
                      ) : (
                        <>
                          BAŞVURUYU TAMAMLA <Send className="w-4 h-4 ml-1.5" />
                        </>
                      )}
                    </Button>
                    <p className="text-[10px] text-slate-600 text-center flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" /> Form verileri KVKK kapsamında korunmaktadır.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
