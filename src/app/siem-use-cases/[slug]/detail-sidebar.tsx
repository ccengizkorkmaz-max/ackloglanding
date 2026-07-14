"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/demo-modal";

export function DetailSidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-900 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 via-transparent to-transparent opacity-50 pointer-events-none" />
        <h3 className="text-lg font-bold text-white mb-2">ACKLOG Modern SIEM</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">
          Korelasyon kuralları, log toplama ve olay analiz şablonlarını içeren ACKLOG ürün ailesini kendi altyapınızda canlı test edin.
        </p>
        <div className="space-y-3">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-2 text-xs"
          >
            Ücretsiz Deneyin <ArrowRight className="w-4 h-4" />
          </Button>
          <Link href="/ozellikler" className="block w-full">
            <Button variant="outline" className="w-full border-slate-900 bg-white/5 hover:bg-white/10 text-slate-300 py-5 rounded-xl font-bold text-xs">
              Tüm Özellikleri Gör
            </Button>
          </Link>
        </div>
      </div>
      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
