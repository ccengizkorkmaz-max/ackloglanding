// Generated dynamically from siemusecases.com data
export interface SiemUseCasePage {
  slug: string;
  category: string;
  categoryTr: string;
  title: string;
  description: string;
  originalPath: string;
  htmlContent: string;
}

export const siemUseCasesData: Record<string, SiemUseCasePage> = {
  "index": {
    slug: "index",
    category: "home",
    categoryTr: "Genel",
    title: "Bir dizi kullanım senaryosu oluşturmaya yardımcı olan kaynakların çoğu düşük kalitededir ve SIEM satıcıları tarafından yayınlanmaktadır. Bu, tespitin iyileştirilmesine yardımcı olacak kaynakları bir araya getirme çabasıdır. Uygun olduğu yerde MITRE ATT&CK ile eşlenir.",
    description: "TL;DR: Bir SIEM'i yeni miras aldıysanız veya edindiyseniz ve 'Tüm bu günlüklerle aslında ne yapacağım?' diye düşünüyorsanız o zaman muhtemelen başlamak için ...",
    originalPath: "/home",
    htmlContent: `<p class="mb-4"><a href="/detection-use-cases/use-case-sets" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">kullanım senaryoları seti &rarr;</a></p>
<p class="mb-4"><a href="https://www.gartner.com/reviews/market/security-information-event-management" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">SIEM satıcıları &rarr;</a></p>
<p class="mb-4"><a href="/detection-use-cases/siem-specific-detections" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">tespit &rarr;</a></p>
<p class="mb-4"><a href="/detection-use-cases/mitre-attck-tactics-and-techniques" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Haritalandı &rarr;</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">GÖNYE ATT&CK &rarr;</a></p>
<p class="mb-4"><a href="/soc/soc-papers-thinking" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">SOC &rarr;</a></p>
<p class="mb-4"><a href="/incident-response" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Olay Müdahalesi &rarr;</a></p>
<p class="mb-4"><a href="/soc/hunting" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Tehdit Avcılığı &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Odak noktası, yüksek kaliteli uyarılar üreten kullanım senaryolarının oluşturulmasına yardımcı olacak bilgilerdir ancak SOC, Olay Müdahalesi ve Tehdit Avcılığına da geçiş vardır.</h3>
<p class="mb-4"><a href="/other-stuff/bored-on-shift" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">TL;DR &rarr;</a></p>
<p class="mb-4"><a href="https://www.siemusecases.com/detection-use-cases/use-case-sets#sigma" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Sigma &rarr;</a></p>
<p class="mb-4"><a href="/detection-use-cases/use-case-thinking" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">düşünme &rarr;</a></p>
<p class="mb-4"><a href="/detection-use-cases/detection-engineering" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">algılama mühendisliği &rarr;</a></p>
<p class="mb-4"><a href="/soc/soc-maturity" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">olgunluk &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">TL;DR: Bir SIEM'i yeni miras aldıysanız veya edindiyseniz ve 'Tüm bu günlüklerle aslında ne yapacağım?' diye düşünüyorsanız o zaman muhtemelen başlamak için en iyi yer Sigma kural setidir. Bazıları algılama mühendisliği ve olgunluk hakkında düşünürken muhtemelen iyi bir fikir de olabilir....</p>
`
  },
  "soc-soc-analyst-tools-other": {
    slug: "soc-soc-analyst-tools-other",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "Diyagramlar",
    description: "Visio kadar güçlü değil ama aynı zamanda ücretsiz.",
    originalPath: "/soc/soc-analyst-tools/other",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Visio kadar güçlü değil ama aynı zamanda ücretsiz.</p>
<p class="mb-4"><a href="https://app.diagrams.net/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://app.diagrams.net/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://app.diagrams.net/" target="_blank" class="text-blue-400 hover:underline">https://app.diagrams.net/</a></p>
`
  },
  "other-stuff-ransomware": {
    slug: "other-stuff-ransomware",
    category: "other-stuff",
    categoryTr: "Sıkılaştırma & Diğer",
    title: "Fidye yazılımı",
    description: "Mandiant'ın faydalı güçlendirme stratejileriyle Fidye Yazılımlarına karşı koruma rehberi",
    originalPath: "/other-stuff/ransomware",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Mandiant'ın faydalı güçlendirme stratejileriyle Fidye Yazılımlarına karşı koruma rehberi</p>
<p class="mb-4"><a href="https://www.mandiant.com/resources/ransomware-protection-and-containment-strategies" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.mandiant.com/resources/ransomware-protection-and-containment-strategies &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.mandiant.com/resources/ransomware-protection-and-containment-strategies" target="_blank" class="text-blue-400 hover:underline">https://www.mandiant.com/resources/ransomware-protection-and-containment-strategies</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Fidye yazılımı grubu 'sızıntı' siteleri. Dikkatli yürüyün</p>
<p class="mb-4"><a href="https://darkfeed.io/ransomwiki/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://darkfeed.io/ransomwiki/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://darkfeed.io/ransomwiki/" target="_blank" class="text-blue-400 hover:underline">https://darkfeed.io/ransomwiki/</a></p>
<p class="mb-4"><a href="https://ransomwr3tsydeii4q43vazm7wofla5ujdajquitomtd47cxjtfgwyyd.onion.ws/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://ransomwr3tsydeii4q43vazm7wofla5ujdajquitomtd47cxjtfgwyyd.onion.ws/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://ransomwr3tsydeii4q43vazm7wofla5ujdajquitomtd47cxjtfgwyyd.onion.ws/" target="_blank" class="text-blue-400 hover:underline">https://ransomwr3tsydeii4q43vazm7wofla5ujdajquitomtd47cxjtfgwyyd.onion.ws/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">İhlal sitelerinden 'canlı' güncellemeler ve ilginç istatistikler</p>
<p class="mb-4"><a href="https://www.ransom-db.com/real-time-updates" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ransom-db.com/real-time-updates &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ransom-db.com/real-time-updates" target="_blank" class="text-blue-400 hover:underline">https://www.ransom-db.com/real-time-updates</a></p>
<p class="mb-4"><a href="https://www.ransom-db.com/ransomware-statistics" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ransom-db.com/ransomware-statistics &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ransom-db.com/ransomware-statistics" target="_blank" class="text-blue-400 hover:underline">https://www.ransom-db.com/ransomware-statistics</a></p>
`
  },
  "other-stuff-threat-intel": {
    slug: "other-stuff-threat-intel",
    category: "other-stuff",
    categoryTr: "Sıkılaştırma & Diğer",
    title: "Tehdit İstihbaratı",
    description: "İlk Erişim Aracılarının ilginç görünümü",
    originalPath: "/other-stuff/threat-intel",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">İlk Erişim Aracılarının ilginç görünümü</p>
<p class="mb-4"><a href="https://github.com/curated-intel/Initial-Access-Broker-Landscape/blob/main/InitialAccessBrokers.png" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/curated-intel/Initial-Access-Broker-Landscape/blob/main/InitialAccessBrokers.png &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/curated-intel/Initial-Access-Broker-Landscape/blob/main/InitialAccessBrokers.png" target="_blank" class="text-blue-400 hover:underline">https://github.com/curated-intel/Initial-Access-Broker-Landscape/blob/main/InitialAccessBrokers.png</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">APT grupları hakkında raporlama kütüphanesi</p>
<p class="mb-4"><a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections" target="_blank" class="text-blue-400 hover:underline">https://github.com/CyberMonitor/APT_CyberCriminal_Campagin_Collections</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Her zaman gecikmeli olsa da kamuya açıklanan saldırıların hacmini ve çeşitliliğini görmek yine de ilginç</p>
<p class="mb-4"><a href="https://www.hackmageddon.com/category/security/cyber-attacks-timeline/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.hackmageddon.com/category/security/cyber-attacks-timeline/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.hackmageddon.com/category/security/cyber-attacks-timeline/" target="_blank" class="text-blue-400 hover:underline">https://www.hackmageddon.com/category/security/cyber-attacks-timeline/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">DFIR raporu belirli olaylara (tipik olarak fidye yazılımı) ilişkin inanılmaz ayrıntılar verir. Bu eylemleri nasıl tespit edebileceğinizi okumaya ve düşünmeye değer.</p>
<p class="mb-4"><a href="https://thedfirreport.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://thedfirreport.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://thedfirreport.com/" target="_blank" class="text-blue-400 hover:underline">https://thedfirreport.com/</a></p>
`
  },
  "work-in-a-soc-finding-a-job-interviews-questions": {
    slug: "work-in-a-soc-finding-a-job-interviews-questions",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Mülakat Soruları",
    description: "Eliza-May Austin'in kitle kaynaklı mükemmel soruları",
    originalPath: "/work-in-a-soc/finding-a-job/interviews/questions",
    htmlContent: `<p class="mb-4"><a href="https://twitter.com/Eliza_MayAustin" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Eliza-May Austin &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Eliza-May Austin'in kitle kaynaklı mükemmel soruları</p>
<p class="mb-4"><a href="https://twitter.com/Eliza_MayAustin/status/1468603113246498822" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/Eliza_MayAustin/status/1468603113246498822 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/Eliza_MayAustin/status/1468603113246498822" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/Eliza_MayAustin/status/1468603113246498822</a></p>
<p class="mb-4"><a href="https://twitter.com/hela_luc" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Hela Lucas &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Hela Lucas'ın Olay Müdahale Soru Bankası</p>
<p class="mb-4"><a href="https://hela-lucas.com/2022/01/22/incident-response-question-bank/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://hela-lucas.com/2022/01/22/incident-response-question-bank/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://hela-lucas.com/2022/01/22/incident-response-question-bank/" target="_blank" class="text-blue-400 hover:underline">https://hela-lucas.com/2022/01/22/incident-response-question-bank/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sızma Testi Mülakat Soruları Hile Sayfası</p>
<p class="mb-4"><a href="https://steflan-security.com/penetration-testing-interview-questions-cheat-sheet/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://steflan-security.com/penetration-testing-interview-questions-cheat-sheet/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://steflan-security.com/penetration-testing-interview-questions-cheat-sheet/" target="_blank" class="text-blue-400 hover:underline">https://steflan-security.com/penetration-testing-interview-questions-cheat-sheet/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Klasik röportaj sorusunu yanıtlama girişimi: "Tarayıcınızın adres kutusuna google.com yazıp enter tuşuna bastığınızda ne olur?"</p>
<p class="mb-4"><a href="https://github.com/alex/what-happens-when" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/alex/what-happens-when &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/alex/what-happens-when" target="_blank" class="text-blue-400 hover:underline">https://github.com/alex/what-happens-when</a></p>
<p class="mb-4"><a href="https://twitter.com/danielmiessler" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Daniel Miessler &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Daniel Miessler'in röportaj soruları</p>
<p class="mb-4"><a href="https://danielmiessler.com/study/infosec_interview_questions/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://danielmiessler.com/study/infosec_interview_questions/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://danielmiessler.com/study/infosec_interview_questions/" target="_blank" class="text-blue-400 hover:underline">https://danielmiessler.com/study/infosec_interview_questions/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bunlardan bazılarını sormayacağım ama kullanıldığını görüyorum</p>
<p class="mb-4"><a href="https://resources.infosecinstitute.com/topic/top-50-information-security-interview-questions/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://resources.infosecinstitute.com/topic/top-50-information-security-interview-questions/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://resources.infosecinstitute.com/topic/top-50-information-security-interview-questions/" target="_blank" class="text-blue-400 hover:underline">https://resources.infosecinstitute.com/topic/top-50-information-security-interview-questions/</a></p>
<p class="mb-4"><a href="https://twitter.com/yo_yo_yo_jbo" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Jonathan Bar Veya &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Jonathan Bar'dan güzel bir konu Veya işe alım yöneticilerinin teknik sorulardan ne aradığına dair</p>
<p class="mb-4"><a href="https://twitter.com/yo_yo_yo_jbo/status/1474423943880531969" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/yo_yo_yo_jbo/status/1474423943880531969 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/yo_yo_yo_jbo/status/1474423943880531969" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/yo_yo_yo_jbo/status/1474423943880531969</a></p>
<p class="mb-4"><a href="https://twitter.com/SahilBloom" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Sahil Bloom &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sahil Bloom'tan güzel bir konu daha</p>
<p class="mb-4"><a href="https://twitter.com/SahilBloom/status/1423971814443819009?s=20&t=BOv4p6VElC6KGYWxfFJ12A" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/SahilBloom/status/1423971814443819009?s=20&t=BOv4p6VElC6KGYWxfFJ12A &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/SahilBloom/status/1423971814443819009?s=20&t=BOv4p6VElC6KGYWxfFJ12A" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/SahilBloom/status/1423971814443819009?s=20&t=BOv4p6VElC6KGYWxfFJ12A</a></p>
`
  },
  "detection-use-cases-detection-engineering": {
    slug: "detection-use-cases-detection-engineering",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Tespit Mühendisliği",
    description: "SpectorOps Tespit Spektrumu",
    originalPath: "/detection-use-cases/detection-engineering",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">SpectorOps Tespit Spektrumu</p>
<p class="mb-4"><a href="https://posts.specterops.io/detection-spectrum-198a0bfb9302" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://posts.specterops.io/detection-spectrum-198a0bfb9302 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://posts.specterops.io/detection-spectrum-198a0bfb9302" target="_blank" class="text-blue-400 hover:underline">https://posts.specterops.io/detection-spectrum-198a0bfb9302</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve tespit üzerine düşünceler</p>
<p class="mb-4"><a href="https://posts.specterops.io/thoughts-on-detection-3c5cab66f511" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://posts.specterops.io/thoughts-on-detection-3c5cab66f511 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://posts.specterops.io/thoughts-on-detection-3c5cab66f511" target="_blank" class="text-blue-400 hover:underline">https://posts.specterops.io/thoughts-on-detection-3c5cab66f511</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"SOC Evreninde Tespit Mühendisliği Boyutlarına Başlangıç"</p>
<p class="mb-4"><a href="https://www.unh4ck.com/detection-engineering-dimensions" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.unh4ck.com/detection-engineering-dimensions &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.unh4ck.com/detection-engineering-dimensions" target="_blank" class="text-blue-400 hover:underline">https://www.unh4ck.com/detection-engineering-dimensions</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Tespit Olgunluk Düzeyi Modeli</p>
<p class="mb-4"><a href="https://ryanstillions.blogspot.com/2014/04/the-dml-model_21.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://ryanstillions.blogspot.com/2014/04/the-dml-model_21.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://ryanstillions.blogspot.com/2014/04/the-dml-model_21.html" target="_blank" class="text-blue-400 hover:underline">https://ryanstillions.blogspot.com/2014/04/the-dml-model_21.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Tehdit Tespiti Olgunluk Çerçevesi</p>
<p class="mb-4"><a href="https://medium.com/snowflake/threat-detection-maturity-framework-23bbb74db2bc" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/snowflake/threat-detection-maturity-framework-23bbb74db2bc &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/snowflake/threat-detection-maturity-framework-23bbb74db2bc" target="_blank" class="text-blue-400 hover:underline">https://medium.com/snowflake/threat-detection-maturity-framework-23bbb74db2bc</a></p>
`
  },
  "work-in-a-soc-learning-resources-cyber-threat-intelligence": {
    slug: "work-in-a-soc-learning-resources-cyber-threat-intelligence",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Siber Tehdit İstihbaratı",
    description: "Katie Nickels bir efsane ve CTI analisti olma rehberi çok faydalı",
    originalPath: "/work-in-a-soc/learning-resources/cyber-threat-intelligence",
    htmlContent: `<p class="mb-4"><a href="https://twitter.com/likethecoins" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Katie Nickels &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Katie Nickels bir efsane ve CTI analisti olma rehberi çok faydalı</p>
<p class="mb-4"><a href="https://medium.com/katies-five-cents/a-cyber-threat-intelligence-self-study-plan-part-1-968b5a8daf9a" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/katies-five-cents/a-cyber-threat-intelligence-self-study-plan-part-1-968b5a8daf9a &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/katies-five-cents/a-cyber-threat-intelligence-self-study-plan-part-1-968b5a8daf9a" target="_blank" class="text-blue-400 hover:underline">https://medium.com/katies-five-cents/a-cyber-threat-intelligence-self-study-plan-part-1-968b5a8daf9a</a></p>
`
  },
  "detection-use-cases-network": {
    slug: "detection-use-cases-network",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Ağ",
    description: "Ağ cihazlarının da uç noktalar olduğunu asla unutmayın.",
    originalPath: "/detection-use-cases/network",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Ağ cihazlarının da uç noktalar olduğunu asla unutmayın.</p>
<p class="mb-4"><a href="https://c2defense.medium.com/man-in-the-network-network-devices-are-endpoints-too-d5bd4a279e37" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://c2defense.medium.com/man-in-the-network-network-devices-are-endpoints-too-d5bd4a279e37 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://c2defense.medium.com/man-in-the-network-network-devices-are-endpoints-too-d5bd4a279e37" target="_blank" class="text-blue-400 hover:underline">https://c2defense.medium.com/man-in-the-network-network-devices-are-endpoints-too-d5bd4a279e37</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Web Proxy / DNS Günlükleri</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Proxy günlüklerindeki kötü niyetliliği tespit etmek için inanılmaz derecede faydalı kısa bilgiler</p>
<p class="mb-4"><a href="https://www.nextron-systems.com/2020/07/24/web-proxy-event-analysis-cheat-sheet/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.nextron-systems.com/2020/07/24/web-proxy-event-analysis-cheat-sheet/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.nextron-systems.com/2020/07/24/web-proxy-event-analysis-cheat-sheet/" target="_blank" class="text-blue-400 hover:underline">https://www.nextron-systems.com/2020/07/24/web-proxy-event-analysis-cheat-sheet/</a></p>
<p class="mb-4"><a href="https://twitter.com/Cyb3rMonk" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Mehmet Ergene &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Web Proxy Logları ile Tehdit Avcılığı ve Tespiti - Mehmet Ergene</p>
<p class="mb-4"><a href="https://posts.bluraven.io/threat-hunting-and-detection-with-web-proxy-logs-58094cae3537" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://posts.bluraven.io/threat-hunting-and-detection-with-web-proxy-logs-58094cae3537 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://posts.bluraven.io/threat-hunting-and-detection-with-web-proxy-logs-58094cae3537" target="_blank" class="text-blue-400 hover:underline">https://posts.bluraven.io/threat-hunting-and-detection-with-web-proxy-logs-58094cae3537</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Proxy/DNS günlüklerinizi yaygın arama listeleriyle karşılaştırmak, alışılmadık ve potansiyel olarak kötü niyetli olanları ortaya çıkarabilir. Bunlar birkaçı:</p>
<p class="mb-4"><a href="https://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://s3-us-west-1.amazonaws.com/umbrella-static/index.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://s3-us-west-1.amazonaws.com/umbrella-static/index.html" target="_blank" class="text-blue-400 hover:underline">https://s3-us-west-1.amazonaws.com/umbrella-static/index.html</a></p>
<p class="mb-4"><a href="https://tranco-list.eu/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://tranco-list.eu/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://tranco-list.eu/" target="_blank" class="text-blue-400 hover:underline">https://tranco-list.eu/</a></p>
<p class="mb-4"><a href="https://majestic.com/reports/majestic-million" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://majestic.com/reports/majestic-million &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://majestic.com/reports/majestic-million" target="_blank" class="text-blue-400 hover:underline">https://majestic.com/reports/majestic-million</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Tüm üst seviye alan adları. Proxy günlüklerinizde bunlardan kaç tane görüyorsunuz? Yasal trafik kaç tane?</p>
<p class="mb-4"><a href="https://www.iana.org/domains/root/db" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.iana.org/domains/root/db &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.iana.org/domains/root/db" target="_blank" class="text-blue-400 hover:underline">https://www.iana.org/domains/root/db</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Üretici-Tüketici Oranını Kullanarak Veri Hazırlama ve Çıkışı Tespit Etme</p>
<p class="mb-4"><a href="http://detect-respond.blogspot.com/2016/09/detecting-data-staging-exfil-using-PCR-shift.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">http://detect-respond.blogspot.com/2016/09/detecting-data-staging-exfil-using-PCR-shift.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="http://detect-respond.blogspot.com/2016/09/detecting-data-staging-exfil-using-PCR-shift.html" target="_blank" class="text-blue-400 hover:underline">http://detect-respond.blogspot.com/2016/09/detecting-data-staging-exfil-using-PCR-shift.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Şüpheli DNS arayışı</p>
<p class="mb-4"><a href="https://c99.sh/hunting-for-suspicious-dns-communications/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://c99.sh/hunting-for-suspicious-dns-communications/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://c99.sh/hunting-for-suspicious-dns-communications/" target="_blank" class="text-blue-400 hover:underline">https://c99.sh/hunting-for-suspicious-dns-communications/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">C2</h3>
<p class="text-slate-400 mb-5 leading-relaxed">C2'yi bulma</p>
<p class="mb-4"><a href="http://findingbad.blogspot.com/2018/03/c2-hunting.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">http://findingbad.blogspot.com/2018/03/c2-hunting.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="http://findingbad.blogspot.com/2018/03/c2-hunting.html" target="_blank" class="text-blue-400 hover:underline">http://findingbad.blogspot.com/2018/03/c2-hunting.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Saldırganlar tarafından c2'yi kolaylaştırmak ve kötü amaçlı içerik barındırmak için kullanılan meşru alanlar</p>
<p class="mb-4"><a href="https://lots-project.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://lots-project.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://lots-project.com/" target="_blank" class="text-blue-400 hover:underline">https://lots-project.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">C2 trafik modelleri</p>
<p class="mb-4"><a href="https://marcoramilli.com/2021/01/09/c2-traffic-patterns-personal-notes/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://marcoramilli.com/2021/01/09/c2-traffic-patterns-personal-notes/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://marcoramilli.com/2021/01/09/c2-traffic-patterns-personal-notes/" target="_blank" class="text-blue-400 hover:underline">https://marcoramilli.com/2021/01/09/c2-traffic-patterns-personal-notes/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">BGP</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Öneklerinizin ele geçirilmesini izleyin</p>
<p class="mb-4"><a href="https://github.com/nttgin/BGPalerter" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/nttgin/BGPalerter &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/nttgin/BGPalerter" target="_blank" class="text-blue-400 hover:underline">https://github.com/nttgin/BGPalerter</a></p>
<p class="mb-4"><a href="https://bgpartemis.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://bgpartemis.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://bgpartemis.org/" target="_blank" class="text-blue-400 hover:underline">https://bgpartemis.org/</a></p>
`
  },
  "detection-use-cases-mitre-attck-tactics-and-techniques": {
    slug: "detection-use-cases-mitre-attck-tactics-and-techniques",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Taktikler ve Teknikler",
    description: "Mimikatz",
    originalPath: "/detection-use-cases/mitre-attck-tactics-and-techniques",
    htmlContent: `<p class="mb-4"><a href="#h.7i1pghv9d7lp" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">İşletim Sistemi Kimlik Bilgilerinin Boşaltılması T1003 &rarr;</a></p>
<p class="mb-4"><a href="#h.to1ez3p3kt3e" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">İşletim Sistemi Kimlik Bilgilerinin Boşaltılması: DCSync T1003.006 &rarr;</a></p>
<p class="mb-4"><a href="#h.srzl6lgwbnib" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Powershell T1059.001 &rarr;</a></p>
<p class="mb-4"><a href="#h.qj3zxv5vj8oi" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Şifre Püskürtme T1110.003 &rarr;</a></p>
<p class="mb-4"><a href="#h.mjevmkrcau5y" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Erişim Jetonu Manipülasyonu T1134 &rarr;</a></p>
<p class="mb-4"><a href="#h.8oqh47ezi6tf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Kerberoasting T1158.003 &rarr;</a></p>
<p class="mb-4"><a href="#h.ta62my7gj4cs" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Hash T1550.002'yi iletin &rarr;</a></p>
<p class="mb-4"><a href="#h.4w7rs7rya7gm" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Altın Bilet T1558.001 ve Gümüş Bilet T1558.002 &rarr;</a></p>
<p class="mb-4"><a href="#h.cgn6b2osc3ih" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Ortadaki Düşman T1557 &rarr;</a></p>
<p class="mb-4"><a href="#h.3cfr9p2a5539" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Ele Geçirme Yürütme Akışı: DLL Arama Siparişinin Ele Geçirilmesi T1574.001 &rarr;</a></p>
<p class="mb-4"><a href="#h.apmwy37cpdi1" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Yanal Hareket TA0008 &rarr;</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1003/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1003 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">İşletim Sistemi Kimlik Bilgilerinin Boşaltılması T1003</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Mimikatz</p>
<p class="mb-4"><a href="https://redcanary.com/threat-detection-report/threats/mimikatz/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://redcanary.com/threat-detection-report/threats/mimikatz/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://redcanary.com/threat-detection-report/threats/mimikatz/" target="_blank" class="text-blue-400 hover:underline">https://redcanary.com/threat-detection-report/threats/mimikatz/</a></p>
<p class="mb-4"><a href="https://neil-fox.github.io/Mimikatz-usage-&-detection/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://neil-fox.github.io/Mimikatz-usage-&-detection/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://neil-fox.github.io/Mimikatz-usage-&-detection/" target="_blank" class="text-blue-400 hover:underline">https://neil-fox.github.io/Mimikatz-usage-&-detection/</a></p>
<p class="mb-4"><a href="https://medium.com/@levurge/detecting-mimikatz-with-sysmon-f6a96669747e" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/@levurge/detecting-mimikatz-with-sysmon-f6a96669747e &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/@levurge/detecting-mimikatz-with-sysmon-f6a96669747e" target="_blank" class="text-blue-400 hover:underline">https://medium.com/@levurge/detecting-mimikatz-with-sysmon-f6a96669747e</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1003/006/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1003.006 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">İşletim Sistemi Kimlik Bilgilerinin Boşaltılması: DCSync T1003.006</h3>
<p class="mb-4"><a href="https://www.alteredsecurity.com/post/a-primer-on-dcsync-attack-and-detection" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.alteredsecurity.com/post/a-primer-on-dcsync-attack-and-detection &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.alteredsecurity.com/post/a-primer-on-dcsync-attack-and-detection" target="_blank" class="text-blue-400 hover:underline">https://www.alteredsecurity.com/post/a-primer-on-dcsync-attack-and-detection</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1059/001/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1059.001 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Powershell T1059.001</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Potansiyel olarak şüpheli komutlar</p>
<p class="mb-4"><a href="https://gist.github.com/gfoss/2b39d680badd2cad9d82" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://gist.github.com/gfoss/2b39d680badd2cad9d82 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://gist.github.com/gfoss/2b39d680badd2cad9d82" target="_blank" class="text-blue-400 hover:underline">https://gist.github.com/gfoss/2b39d680badd2cad9d82</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Mandiant'ın Powershell günlüğe kaydetme kılavuzu</p>
<p class="mb-4"><a href="https://www.mandiant.com/resources/greater-visibilityt" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.mandiant.com/resources/greater-visibilityt &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.mandiant.com/resources/greater-visibilityt" target="_blank" class="text-blue-400 hover:underline">https://www.mandiant.com/resources/greater-visibilityt</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1110/003/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1110.003 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Şifre Püskürtme T1110.003</h3>
<p class="mb-4"><a href="https://www.trimarcsecurity.com/single-post/2018/05/06/Trimarc-Research-Detecting-Password-Spraying-with-Security-Event-Auditing" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.trimarcsecurity.com/single-post/2018/05/06/Trimarc-Research-Detecting-Password-Spraying-with-Security-Event-Auditing &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.trimarcsecurity.com/single-post/2018/05/06/Trimarc-Research-Detecting-Password-Spraying-with-Security-Event-Auditing" target="_blank" class="text-blue-400 hover:underline">https://www.trimarcsecurity.com/single-post/2018/05/06/Trimarc-Research-Detecting-Password-Spraying-with-Security-Event-Auditing</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1134/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1134 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Erişim Jetonu Manipülasyonu T1134</h3>
<p class="mb-4"><a href="https://www.elastic.co/blog/how-attackers-abuse-access-token-manipulation" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.elastic.co/blog/how-attackers-abuse-access-token-manipulation &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.elastic.co/blog/how-attackers-abuse-access-token-manipulation" target="_blank" class="text-blue-400 hover:underline">https://www.elastic.co/blog/how-attackers-abuse-access-token-manipulation</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1558/003/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1158.003 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Kerberoasting T1158.003</h3>
<p class="mb-4"><a href="https://www.hub.trimarcsecurity.com/post/trimarc-research-detecting-kerberoasting-activity" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.hub.trimarcsecurity.com/post/trimarc-research-detecting-kerberoasting-activity &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.hub.trimarcsecurity.com/post/trimarc-research-detecting-kerberoasting-activity" target="_blank" class="text-blue-400 hover:underline">https://www.hub.trimarcsecurity.com/post/trimarc-research-detecting-kerberoasting-activity</a></p>
<p class="mb-4"><a href="https://adsecurity.org/?p=3458" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://adsecurity.org/?p=3458 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://adsecurity.org/?p=3458" target="_blank" class="text-blue-400 hover:underline">https://adsecurity.org/?p=3458</a></p>
<p class="mb-4"><a href="https://www.redsiege.com/blog/2020/10/detecting-kerberoasting/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.redsiege.com/blog/2020/10/detecting-kerberoasting/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.redsiege.com/blog/2020/10/detecting-kerberoasting/" target="_blank" class="text-blue-400 hover:underline">https://www.redsiege.com/blog/2020/10/detecting-kerberoasting/</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1550/002/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1550.002 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Hash T1550.002'yi iletin</h3>
<p class="mb-4"><a href="https://threathuntingreadings.com/passthehashwhatisandhowcanwedetectit/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://threathuntingreadings.com/passthehashwhatisandhowcanwedetectit/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://threathuntingreadings.com/passthehashwhatisandhowcanwedetectit/" target="_blank" class="text-blue-400 hover:underline">https://threathuntingreadings.com/passthehashwhatisandhowcanwedetectit/</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1558/001/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1558.001 &rarr;</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1558/002/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1558.002 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Altın Bilet T1558.001 ve Gümüş Bilet T1558.002</h3>
<p class="mb-4"><a href="https://adsecurity.org/?p=1515" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://adsecurity.org/?p=1515 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://adsecurity.org/?p=1515" target="_blank" class="text-blue-400 hover:underline">https://adsecurity.org/?p=1515</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1557/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1557 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Ortadaki Düşman  T1557</h3>
<p class="text-slate-400 mb-5 leading-relaxed">NTLM geçişi</p>
<p class="mb-4"><a href="https://posts.bluraven.io/detecting-ntlm-relay-attacks-d92e99e68fb9" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://posts.bluraven.io/detecting-ntlm-relay-attacks-d92e99e68fb9 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://posts.bluraven.io/detecting-ntlm-relay-attacks-d92e99e68fb9" target="_blank" class="text-blue-400 hover:underline">https://posts.bluraven.io/detecting-ntlm-relay-attacks-d92e99e68fb9</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kerberos Aktarma saldırılarını algılama</p>
<p class="mb-4"><a href="https://posts.bluraven.io/detecting-kerberos-relaying-e6be66fa647c" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://posts.bluraven.io/detecting-kerberos-relaying-e6be66fa647c &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://posts.bluraven.io/detecting-kerberos-relaying-e6be66fa647c" target="_blank" class="text-blue-400 hover:underline">https://posts.bluraven.io/detecting-kerberos-relaying-e6be66fa647c</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/techniques/T1574/001/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">T1574.001 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Ele Geçirme Yürütme Akışı: DLL Arama Siparişinin Ele Geçirilmesi T1574.001</h3>
<p class="mb-4"><a href="https://marcusedmondson.com/2021/02/28/windows-persistence-mechanics-dll-search-order-hijacking/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://marcusedmondson.com/2021/02/28/windows-persistence-mechanics-dll-search-order-hijacking/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://marcusedmondson.com/2021/02/28/windows-persistence-mechanics-dll-search-order-hijacking/" target="_blank" class="text-blue-400 hover:underline">https://marcusedmondson.com/2021/02/28/windows-persistence-mechanics-dll-search-order-hijacking/</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/tactics/TA0008/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">TA0008 &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Yanal Hareket TA0008</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Japonya CERT kılavuzu</p>
<p class="mb-4"><a href="https://www.jpcert.or.jp/english/pub/sr/20170612ac-ir_research_en.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.jpcert.or.jp/english/pub/sr/20170612ac-ir_research_en.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.jpcert.or.jp/english/pub/sr/20170612ac-ir_research_en.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.jpcert.or.jp/english/pub/sr/20170612ac-ir_research_en.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CERT-AB kılavuzu</p>
<p class="mb-4"><a href="https://media.cert.europa.eu/static/WhitePapers/CERT-EU_SWP_17-002_Lateral_Movements.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://media.cert.europa.eu/static/WhitePapers/CERT-EU_SWP_17-002_Lateral_Movements.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://media.cert.europa.eu/static/WhitePapers/CERT-EU_SWP_17-002_Lateral_Movements.pdf" target="_blank" class="text-blue-400 hover:underline">https://media.cert.europa.eu/static/WhitePapers/CERT-EU_SWP_17-002_Lateral_Movements.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Compass Security'nin GPO ayarlarına ilişkin kılavuzu</p>
<p class="mb-4"><a href="https://www.compass-security.com/fileadmin/Datein/Research/White_Papers/lateral_movement_detection_basic_gpo_settings_v1.0.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.compass-security.com/fileadmin/Datein/Research/White_Papers/lateral_movement_detection_basic_gpo_settings_v1.0.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.compass-security.com/fileadmin/Datein/Research/White_Papers/lateral_movement_detection_basic_gpo_settings_v1.0.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.compass-security.com/fileadmin/Datein/Research/White_Papers/lateral_movement_detection_basic_gpo_settings_v1.0.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">İleri Savunma Analisti kılavuzu</p>
<p class="mb-4"><a href="https://www.forwarddefense.com/media/attachments/2021/05/15/lateral-movement-analyst-reference.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.forwarddefense.com/media/attachments/2021/05/15/lateral-movement-analyst-reference.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.forwarddefense.com/media/attachments/2021/05/15/lateral-movement-analyst-reference.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.forwarddefense.com/media/attachments/2021/05/15/lateral-movement-analyst-reference.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Lares'ten Yanal Hareketin Düşüşü</p>
<p class="mb-4"><a href="https://www.lares.com/blog/the-lowdown-on-lateral-movement/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.lares.com/blog/the-lowdown-on-lateral-movement/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.lares.com/blog/the-lowdown-on-lateral-movement/" target="_blank" class="text-blue-400 hover:underline">https://www.lares.com/blog/the-lowdown-on-lateral-movement/</a></p>
`
  },
  "detection-use-cases-insider-threat": {
    slug: "detection-use-cases-insider-threat",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "İçeriden Tehdit",
    description: "İlginç yaklaşım",
    originalPath: "/detection-use-cases/insider-threat",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">İlginç yaklaşım</p>
<p class="mb-4"><a href="http://findingbad.blogspot.com/2021/02/more-behavioral-hunting-and-insider.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">http://findingbad.blogspot.com/2021/02/more-behavioral-hunting-and-insider.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="http://findingbad.blogspot.com/2021/02/more-behavioral-hunting-and-insider.html" target="_blank" class="text-blue-400 hover:underline">http://findingbad.blogspot.com/2021/02/more-behavioral-hunting-and-insider.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">MITRE'nin ustalıklı içeriden öğrenilen tehdit bilgi tabanı</p>
<p class="mb-4"><a href="https://ctid.mitre-engenuity.org/our-work/insider-ttp-kb/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://ctid.mitre-engenuity.org/our-work/insider-ttp-kb/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://ctid.mitre-engenuity.org/our-work/insider-ttp-kb/" target="_blank" class="text-blue-400 hover:underline">https://ctid.mitre-engenuity.org/our-work/insider-ttp-kb/</a></p>
`
  },
  "soc-exercising-testing": {
    slug: "soc-exercising-testing",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "Egzersizler",
    description: "Düzenli egzersizler, tespit boşluklarını tespit etmenin ve olgunluk oluşturmanın yararlı bir yoludur.",
    originalPath: "/soc/exercising-testing",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Düzenli egzersizler, tespit boşluklarını tespit etmenin ve olgunluk oluşturmanın yararlı bir yoludur.</p>
<p class="text-slate-400 mb-5 leading-relaxed">CIS'in örnek masa üstü egzersizleri</p>
<p class="mb-4"><a href="https://www.cisecurity.org/wp-content/uploads/2018/10/Six-tabletop-exercises-FINAL.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cisecurity.org/wp-content/uploads/2018/10/Six-tabletop-exercises-FINAL.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cisecurity.org/wp-content/uploads/2018/10/Six-tabletop-exercises-FINAL.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.cisecurity.org/wp-content/uploads/2018/10/Six-tabletop-exercises-FINAL.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NCSC'nin 'kutudaki egzersizi'. Kayıt gerektirir</p>
<p class="mb-4"><a href="https://exerciseinabox.service.ncsc.gov.uk/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://exerciseinabox.service.ncsc.gov.uk/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://exerciseinabox.service.ncsc.gov.uk/" target="_blank" class="text-blue-400 hover:underline">https://exerciseinabox.service.ncsc.gov.uk/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Mitre'nin egzersiz kitabı.</p>
<p class="mb-4"><a href="https://www.mitre.org/sites/default/files/publications/pr_14-3929-cyber-exercise-playbook.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.mitre.org/sites/default/files/publications/pr_14-3929-cyber-exercise-playbook.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.mitre.org/sites/default/files/publications/pr_14-3929-cyber-exercise-playbook.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.mitre.org/sites/default/files/publications/pr_14-3929-cyber-exercise-playbook.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bu hesap, kurgusal veya manşetten ilham alan ihlal senaryolarını tweetliyor. Yanıtlar genellikle bunların nasıl tespit edilebileceği veya hafifletilebileceği konusunda yararlı düşünceler sunar.</p>
<p class="mb-4"><a href="https://twitter.com/badthingsdaily" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/badthingsdaily &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/badthingsdaily" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/badthingsdaily</a></p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Test</h2>
<p class="text-slate-400 mb-5 leading-relaxed">Atomik kırmızı ekip, bireysel Gönye ATT&CK teknikleri için birim testleri sağlar. Bunlar, kullanım senaryosu uyarılarının tetiklenmesini tetiklemek için duman testleri olarak kullanılabilir.</p>
<p class="mb-4"><a href="https://github.com/redcanaryco/atomic-red-team" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/redcanaryco/atomic-red-team &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/redcanaryco/atomic-red-team" target="_blank" class="text-blue-400 hover:underline">https://github.com/redcanaryco/atomic-red-team</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Test için simüle edilmiş bir AD ortamı oluşturun.</p>
<p class="mb-4"><a href="https://github.com/davidprowe/BadBlood" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/davidprowe/BadBlood &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/davidprowe/BadBlood" target="_blank" class="text-blue-400 hover:underline">https://github.com/davidprowe/BadBlood</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sysmon Simulator, EDR algılamalarını test etmek amacıyla olaylar oluşturmak için kullanılabilir</p>
<p class="mb-4"><a href="https://github.com/ScarredMonk/SysmonSimulator" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/ScarredMonk/SysmonSimulator &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/ScarredMonk/SysmonSimulator" target="_blank" class="text-blue-400 hover:underline">https://github.com/ScarredMonk/SysmonSimulator</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Herkese açık kalem testi raporları</p>
<p class="mb-4"><a href="https://github.com/juliocesarfort/public-pentesting-reports" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/juliocesarfort/public-pentesting-reports &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/juliocesarfort/public-pentesting-reports" target="_blank" class="text-blue-400 hover:underline">https://github.com/juliocesarfort/public-pentesting-reports</a></p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Mor Takım Oluşturma</h2>
<p class="mb-4"><a href="https://github.com/ch33r10/EnterprisePurpleTeaming/blob/main/README.md" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/ch33r10/EnterprisePurpleTeaming/blob/main/README.md &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/ch33r10/EnterprisePurpleTeaming/blob/main/README.md" target="_blank" class="text-blue-400 hover:underline">https://github.com/ch33r10/EnterprisePurpleTeaming/blob/main/README.md</a></p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Kırmızı Takım</h2>
<p class="mb-4"><a href="https://www.bankofengland.co.uk/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">İngiltere Bankası &rarr;</a></p>
<p class="mb-4"><a href="https://www.ecb.europa.eu/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">ECB &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CBEST ve TIBER AB çerçeveleri, İngiltere Merkez Bankası ve ECB'nin Birleşik Krallık ve AB finansal hizmetlerinin siber dayanıklılığını değerlendirmek için çekişmeli testleri nasıl kullandığını ortaya koyuyor. Tespit ve yanıtınızın kapasitesini ve olgunluğunu değerlendirmek istiyorsanız bu altın standarttır.</p>
<p class="mb-4"><a href="https://www.bankofengland.co.uk/-/media/boe/files/financial-stability/financial-sector-continuity/cbest-implementation-guide.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.bankofengland.co.uk/-/media/boe/files/financial-stability/financial-sector-continuity/cbest-implementation-guide.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.bankofengland.co.uk/-/media/boe/files/financial-stability/financial-sector-continuity/cbest-implementation-guide.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.bankofengland.co.uk/-/media/boe/files/financial-stability/financial-sector-continuity/cbest-implementation-guide.pdf</a></p>
<p class="mb-4"><a href="https://www.ecb.europa.eu/pub/pdf/other/ecb.tiber_eu_framework.en.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">ttps://www.ecb.europa.eu/pub/pdf/other/ecb.tiber_eu_framework.en.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ecb.europa.eu/pub/pdf/other/ecb.tiber_eu_framework.en.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.ecb.europa.eu/pub/pdf/other/ecb.tiber_eu_framework.en.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kırmızı takım takımları. Genellikle gerçek tehditlerle yeniden kullanılır.</p>
<p class="mb-4"><a href="https://github.com/infosecn1nja/Red-Teaming-Toolkit" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/infosecn1nja/Red-Teaming-Toolkit &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/infosecn1nja/Red-Teaming-Toolkit" target="_blank" class="text-blue-400 hover:underline">https://github.com/infosecn1nja/Red-Teaming-Toolkit</a></p>
<p class="mb-4"><a href="https://twitter.com/benpturner" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Ben Turner &rarr;</a></p>
<p class="mb-4"><a href="https://twitter.com/b4ggio_su" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Doug McLeod &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ben Turner ve Doug McLeod'un blogu</p>
<p class="mb-4"><a href="https://redteaming.co.uk/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://redteaming.co.uk/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://redteaming.co.uk/" target="_blank" class="text-blue-400 hover:underline">https://redteaming.co.uk/</a></p>
<p class="mb-4"><a href="https://twitter.com/dmcxblue" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Davut &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">David'in Kırmızı Takım notları</p>
<p class="mb-4"><a href="https://dmcxblue.gitbook.io/red-team-notes-2-0/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://dmcxblue.gitbook.io/red-team-notes-2-0/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://dmcxblue.gitbook.io/red-team-notes-2-0/" target="_blank" class="text-blue-400 hover:underline">https://dmcxblue.gitbook.io/red-team-notes-2-0/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kendi maceranı seç</p>
<p class="mb-4"><a href="https://scythe-io.github.io/cyoa-red-team/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://scythe-io.github.io/cyoa-red-team/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://scythe-io.github.io/cyoa-red-team/" target="_blank" class="text-blue-400 hover:underline">https://scythe-io.github.io/cyoa-red-team/</a></p>
<p class="mb-4"><a href="https://www.gov.uk/government/organisations/ministry-of-defence" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">MOD &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Birleşik Krallık MOD'un Kırmızı Takım Oluşturma Kılavuzu</p>
<p class="mb-4"><a href="https://www.gov.uk/government/publications/a-guide-to-red-teaming" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.gov.uk/government/publications/a-guide-to-red-teaming &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.gov.uk/government/publications/a-guide-to-red-teaming" target="_blank" class="text-blue-400 hover:underline">https://www.gov.uk/government/publications/a-guide-to-red-teaming</a></p>
`
  },
  "detection-use-cases-active-directory": {
    slug: "detection-use-cases-active-directory",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Aktif Dizin",
    description: "Spesifik tespitler büyük ölçüde MITRE ATT&CK Taktikleri ve Teknikleri'nde bulunabilir.",
    originalPath: "/detection-use-cases/active-directory",
    htmlContent: `<p class="mb-4"><a href="/detection-use-cases/mitre-attck-tactics-and-techniques" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">GÖNYE ATT&CK Taktikleri ve Teknikleri &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Spesifik tespitler büyük ölçüde MITRE ATT&CK Taktikleri ve Teknikleri'nde bulunabilir.</p>
<p class="text-slate-400 mb-5 leading-relaxed">adsecurity.org çok yararlı bir başlangıç ​​noktasıdır.</p>
<p class="mb-4"><a href="https://adsecurity.org/?page_id=4031" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://adsecurity.org/?page_id=4031 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://adsecurity.org/?page_id=4031" target="_blank" class="text-blue-400 hover:underline">https://adsecurity.org/?page_id=4031</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">bluteamblog.com</p>
<p class="mb-4"><a href="https://blueteamblog.com/18-ways-to-detect-malcious-actions-in-your-active-directory-logs-using-siem" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://blueteamblog.com/18-ways-to-detect-malcious-actions-in-your-active-directory-logs-using-siem &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://blueteamblog.com/18-ways-to-detect-malcious-actions-in-your-active-directory-logs-using-siem" target="_blank" class="text-blue-400 hover:underline">https://blueteamblog.com/18-ways-to-detect-malcious-actions-in-your-active-directory-logs-using-siem</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Windows/AD ortamlarına karşı kullanılacak, saldırgan güvenlik araçlarının ve ilgili komutlarının seçilmiş bir listesi"</p>
<p class="mb-4"><a href="https://wadcoms.github.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://wadcoms.github.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://wadcoms.github.io/" target="_blank" class="text-blue-400 hover:underline">https://wadcoms.github.io/</a></p>
`
  },
  "other-stuff-vulnerabilities": {
    slug: "other-stuff-vulnerabilities",
    category: "other-stuff",
    categoryTr: "Sıkılaştırma & Diğer",
    title: "Güvenlik açıkları",
    description: "Cvedetails'e alternatifler şunlardır:",
    originalPath: "/other-stuff/vulnerabilities",
    htmlContent: `<p class="mb-4"><a href="https://www.cvedetails.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">cvedetayları &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Cvedetails'e alternatifler şunlardır:</p>
<p class="mb-4"><a href="https://www.opencve.io/cve" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.opencve.io/cve &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.opencve.io/cve" target="_blank" class="text-blue-400 hover:underline">https://www.opencve.io/cve</a></p>
<p class="mb-4"><a href="https://free.vulniq.com/home" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://free.vulniq.com/home &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://free.vulniq.com/home" target="_blank" class="text-blue-400 hover:underline">https://free.vulniq.com/home</a></p>
<p class="mb-4"><a href="https://vuldb.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://vuldb.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://vuldb.com/" target="_blank" class="text-blue-400 hover:underline">https://vuldb.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Project Zero'nun yararlanılan sıfır günlerin listesi.</p>
<p class="mb-4"><a href="https://docs.google.com/spreadsheets/d/1lkNJ0uQwbeC1ZTRrxdtuPLCIl7mlUreoKfSIgajnSyY" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.google.com/spreadsheets/d/1lkNJ0uQwbeC1ZTRrxdtuPLCIl7mlUreoKfSIgajnSyY &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.google.com/spreadsheets/d/1lkNJ0uQwbeC1ZTRrxdtuPLCIl7mlUreoKfSIgajnSyY" target="_blank" class="text-blue-400 hover:underline">https://docs.google.com/spreadsheets/d/1lkNJ0uQwbeC1ZTRrxdtuPLCIl7mlUreoKfSIgajnSyY</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CVE Twitter'da tartışılıyor. Neyin istismar edildiğini/yeni ve yüksek önem derecesine sahip olduğunu veya POC düşüşü yaşadığını görmek faydalıdır.</p>
<p class="mb-4"><a href="https://cvetrends.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://cvetrends.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://cvetrends.com/" target="_blank" class="text-blue-400 hover:underline">https://cvetrends.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CISA'nın bilinen istismar edilen güvenlik açıkları kataloğu</p>
<p class="mb-4"><a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cisa.gov/known-exploited-vulnerabilities-catalog &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" class="text-blue-400 hover:underline">https://www.cisa.gov/known-exploited-vulnerabilities-catalog</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Rapid7'nin istismar edilen güvenlik açıklarına bakışı</p>
<p class="mb-4"><a href="https://attackerkb.com/activity-feed" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://attackerkb.com/activity-feed &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://attackerkb.com/activity-feed" target="_blank" class="text-blue-400 hover:underline">https://attackerkb.com/activity-feed</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Yığınınızdaki güvenlik açıklarına ilişkin haftalık e-postalara abone olun.</p>
<p class="mb-4"><a href="https://stack.watch/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://stack.watch/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://stack.watch/" target="_blank" class="text-blue-400 hover:underline">https://stack.watch/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Şifreler</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Varsayılan Şifreler.</p>
<p class="mb-4"><a href="https://default-password.info/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://default-password.info/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://default-password.info/" target="_blank" class="text-blue-400 hover:underline">https://default-password.info/</a></p>
<p class="mb-4"><a href="https://cirt.net/passwords" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://cirt.net/passwords &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://cirt.net/passwords" target="_blank" class="text-blue-400 hover:underline">https://cirt.net/passwords</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Zayıf Şifreler</p>
<p class="mb-4"><a href="https://github.com/danielmiessler/SecLists/tree/master/Passwords" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/danielmiessler/SecLists/tree/master/Passwords &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/danielmiessler/SecLists/tree/master/Passwords" target="_blank" class="text-blue-400 hover:underline">https://github.com/danielmiessler/SecLists/tree/master/Passwords</a></p>
<p class="mb-4"><a href="https://github.com/ignis-sec/Pwdb-Public" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/ignis-sec/Pwdb-Public &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/ignis-sec/Pwdb-Public" target="_blank" class="text-blue-400 hover:underline">https://github.com/ignis-sec/Pwdb-Public</a></p>
<p class="mb-4"><a href="https://github.com/tarahmarie/nerdlist/tree/ee07c92cb8a4" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/tarahmarie/nerdlist/tree/ee07c92cb8a4 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/tarahmarie/nerdlist/tree/ee07c92cb8a4" target="_blank" class="text-blue-400 hover:underline">https://github.com/tarahmarie/nerdlist/tree/ee07c92cb8a4</a></p>
`
  },
  "soc-soc-analyst-tools-analysis-tools": {
    slug: "soc-soc-analyst-tools-analysis-tools",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "Siber şef",
    description: "GCHQ'nun mükemmel Cyberchef'i Tanıtıma gerek yok. Ayrıca, şeyleri (hiçbir şekilde kötü niyetli olmayan) bir istihbarat teşkilatı tarafından çalıştırılan bir ...",
    originalPath: "/soc/soc-analyst-tools/analysis-tools",
    htmlContent: `<p class="mb-4"><a href="https://www.gchq.gov.uk/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">GCHQ &rarr;</a></p>
<p class="mb-4"><a href="https://github.com/gchq/CyberChef" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">github &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">GCHQ'nun mükemmel Cyberchef'i Tanıtıma gerek yok. Ayrıca, şeyleri (hiçbir şekilde kötü niyetli olmayan) bir istihbarat teşkilatı tarafından çalıştırılan bir araca yapıştırma konusunda anlaşılır bir şekilde isteksizseniz, github'larından indirilebilir ve yerel/çevrimdışı olarak dağıtılabilir.</p>
<p class="mb-4"><a href="https://gchq.github.io/CyberChef/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://gchq.github.io/CyberChef/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://gchq.github.io/CyberChef/" target="_blank" class="text-blue-400 hover:underline">https://gchq.github.io/CyberChef/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">CUrl</h3>
<p class="text-slate-400 mb-5 leading-relaxed">CUrl için kullanışlı bir dönüştürücü</p>
<p class="mb-4"><a href="https://curlconverter.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://curlconverter.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://curlconverter.com/" target="_blank" class="text-blue-400 hover:underline">https://curlconverter.com/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">WTFBİNLER</h3>
<p class="text-slate-400 mb-5 leading-relaxed">İyi huylu ikili dosyalar sizi kötü niyetli olduklarına ikna etmeye çalıştığında. Garip yanlış pozitifliğin açıklaması.</p>
<p class="mb-4"><a href="https://wtfbins.wtf/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://wtfbins.wtf/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://wtfbins.wtf/" target="_blank" class="text-blue-400 hover:underline">https://wtfbins.wtf/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Komut dosyaları</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Tek satırlık kısa metinler, küçük metinler ve mavi ekip çalışması için bazı yararlı ipuçlarından oluşan bir koleksiyon.</p>
<p class="mb-4"><a href="https://github.com/Purp1eW0lf/Blue-Team-Notes" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Purp1eW0lf/Blue-Team-Notes &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Purp1eW0lf/Blue-Team-Notes" target="_blank" class="text-blue-400 hover:underline">https://github.com/Purp1eW0lf/Blue-Team-Notes</a></p>
`
  },
  "soc-detection-gaps": {
    slug: "soc-detection-gaps",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "Algılama Boşlukları",
    description: "Farklı EDR ürünlerinin etkinliğini karşılaştıran uzun ve bilimsel bir makale",
    originalPath: "/soc/detection-gaps",
    htmlContent: `<h3 class="text-lg font-bold mt-6 mb-3 text-white">EDR</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Farklı EDR ürünlerinin etkinliğini karşılaştıran uzun ve bilimsel bir makale</p>
<p class="mb-4"><a href="https://www.mdpi.com/2624-800X/1/3/21/htm" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.mdpi.com/2624-800X/1/3/21/htm &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.mdpi.com/2624-800X/1/3/21/htm" target="_blank" class="text-blue-400 hover:underline">https://www.mdpi.com/2624-800X/1/3/21/htm</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">API, farklı EDR ürünlerinin kancalanmasını çağırır. Dağıttığınız EDR'deki boşlukların nerede olabileceğini ve ona nasıl saldırılabileceğini anlamada faydalıdır</p>
<p class="mb-4"><a href="https://github.com/Mr-Un1k0d3r/EDRs" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Mr-Un1k0d3r/EDRs &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Mr-Un1k0d3r/EDRs" target="_blank" class="text-blue-400 hover:underline">https://github.com/Mr-Un1k0d3r/EDRs</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">EDR bypass yöntemleri</p>
<p class="mb-4"><a href="https://s3cur3th1ssh1t.github.io/A-tale-of-EDR-bypass-methods/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://s3cur3th1ssh1t.github.io/A-tale-of-EDR-bypass-methods/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://s3cur3th1ssh1t.github.io/A-tale-of-EDR-bypass-methods/" target="_blank" class="text-blue-400 hover:underline">https://s3cur3th1ssh1t.github.io/A-tale-of-EDR-bypass-methods/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">EDR'nin ATT&CK'ye karşı gönye değerlendirmeleri. Pek çok satıcının zafer iddiasında bulunduğu bir sürece biraz şüpheyle yaklaşıyorum</p>
<p class="mb-4"><a href="https://attackevals.mitre-engenuity.org/enterprise" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://attackevals.mitre-engenuity.org/enterprise &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://attackevals.mitre-engenuity.org/enterprise" target="_blank" class="text-blue-400 hover:underline">https://attackevals.mitre-engenuity.org/enterprise</a></p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Windows Defender'ı</h2>
<p class="mb-4"><a href="https://arty-hlr.com/blog/2021/05/06/how-to-bypass-defender/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://arty-hlr.com/blog/2021/05/06/how-to-bypass-defender/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://arty-hlr.com/blog/2021/05/06/how-to-bypass-defender/" target="_blank" class="text-blue-400 hover:underline">https://arty-hlr.com/blog/2021/05/06/how-to-bypass-defender/</a></p>
`
  },
  "detection-use-cases-cloud-aws": {
    slug: "detection-use-cases-cloud-aws",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Amazon Web Hizmetleri (AWS)",
    description: "Bu, AWS'nin Amazon GuardDuty aracılığıyla tespit ettiği şeylerin (bazı nedenlerden dolayı 'bulgular' olarak anılacaktır) listesidir. Mantık açısından çok faz...",
    originalPath: "/detection-use-cases/cloud/aws",
    htmlContent: `<p class="mb-4"><a href="https://aws.amazon.com/guardduty/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Amazon Koruma Görevi &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bu, AWS'nin Amazon GuardDuty aracılığıyla tespit ettiği şeylerin (bazı nedenlerden dolayı 'bulgular' olarak anılacaktır) listesidir. Mantık açısından çok fazla ayrıntı yok ama başka bir üründe tespit yapıyorsanız kullanım senaryolarınızın aynı olayları kapsayıp kapsamayacağını dikkate almaya değer.</p>
<p class="mb-4"><a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html" target="_blank" class="text-blue-400 hover:underline">https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">AWS Kimliği Doğrulanmamış Hesaplar Arası Saldırıları Algılama. Biraz Logrhythm'e özgü ama faydalı bir okuma</p>
<p class="mb-4"><a href="https://logrhythm.com/blog/detecting-aws-unauthenticated-cross-account-attacks/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://logrhythm.com/blog/detecting-aws-unauthenticated-cross-account-attacks/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://logrhythm.com/blog/detecting-aws-unauthenticated-cross-account-attacks/" target="_blank" class="text-blue-400 hover:underline">https://logrhythm.com/blog/detecting-aws-unauthenticated-cross-account-attacks/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">AWS kullanım örnekleri için geçerli olan çeşitli SIEM platformlarındaki kurallar. Hangi platformda olursanız olun aynı mantığı uygulamak oldukça kolaydır.</p>
<p class="text-slate-400 mb-5 leading-relaxed">Elastik</p>
<p class="mb-4"><a href="https://github.com/elastic/detection-rules/tree/main/rules/integrations/aws" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/elastic/detection-rules/tree/main/rules/integrations/aws &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/elastic/detection-rules/tree/main/rules/integrations/aws" target="_blank" class="text-blue-400 hover:underline">https://github.com/elastic/detection-rules/tree/main/rules/integrations/aws</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Nöbetçi</p>
<p class="mb-4"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AWSCloudTrail" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AWSCloudTrail &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AWSCloudTrail" target="_blank" class="text-blue-400 hover:underline">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AWSCloudTrail</a></p>
<p class="mb-4"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AWSGuardDuty" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AWSGuardDuty &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AWSGuardDuty" target="_blank" class="text-blue-400 hover:underline">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AWSGuardDuty</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Splunk</p>
<p class="mb-4"><a href="https://github.com/splunk/security_content/tree/develop/detections/cloud" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/splunk/security_content/tree/develop/detections/cloud &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/splunk/security_content/tree/develop/detections/cloud" target="_blank" class="text-blue-400 hover:underline">https://github.com/splunk/security_content/tree/develop/detections/cloud</a></p>
`
  },
  "detection-use-cases-cloud-gcp": {
    slug: "detection-use-cases-cloud-gcp",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Google Bulut",
    description: "GCP'nin kullanım alanları",
    originalPath: "/detection-use-cases/cloud/gcp",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">GCP'nin kullanım alanları</p>
<p class="mb-4"><a href="https://github.com/GoogleCloudPlatform/security-analytics#security-analytics-use-cases" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/GoogleCloudPlatform/security-analytics#security-analytics-use-cases &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/GoogleCloudPlatform/security-analytics#security-analytics-use-cases" target="_blank" class="text-blue-400 hover:underline">https://github.com/GoogleCloudPlatform/security-analytics#security-analytics-use-cases</a></p>
`
  },
  "detection-use-cases-vulnerabilities-exploits": {
    slug: "detection-use-cases-vulnerabilities-exploits",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "İstismarlar",
    description: "Herkese açık istismar veritabanları",
    originalPath: "/detection-use-cases/vulnerabilities/exploits",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Herkese açık istismar veritabanları</p>
<p class="mb-4"><a href="https://www.exploitalert.com/index.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.exploitalert.com/index.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.exploitalert.com/index.html" target="_blank" class="text-blue-400 hover:underline">https://www.exploitalert.com/index.html</a></p>
<p class="mb-4"><a href="https://www.exploit-db.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.exploit-db.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.exploit-db.com/" target="_blank" class="text-blue-400 hover:underline">https://www.exploit-db.com/</a></p>
`
  },
  "logging-logging-projects": {
    slug: "logging-logging-projects",
    category: "logging",
    categoryTr: "Log Yönetimi & Analiz",
    title: "Projelerin Günlüğe Kaydedilmesi",
    description: "\"Güvenlik olay günlüklerinin veri standardizasyonunu ve dönüşümünü iyileştirmek için ortak bir veri modeli tanımlayın ve paylaşın\"",
    originalPath: "/logging/logging-projects",
    htmlContent: `<h3 class="text-lg font-bold mt-6 mb-3 text-white">ÖSSEM</h3>
<p class="text-slate-400 mb-5 leading-relaxed">"Güvenlik olay günlüklerinin veri standardizasyonunu ve dönüşümünü iyileştirmek için ortak bir veri modeli tanımlayın ve paylaşın"</p>
<p class="mb-4"><a href="https://github.com/OTRF/OSSEM" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/OTRF/OSSEM &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/OTRF/OSSEM" target="_blank" class="text-blue-400 hover:underline">https://github.com/OTRF/OSSEM</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">DeTT&CT</h3>
<p class="text-slate-400 mb-5 leading-relaxed">"DeTT&CT, mavi ekiplere veri günlüğü kaynak kalitesini, görünürlük kapsamını, tespit kapsamını ve tehdit aktörü davranışlarını puanlamak ve karşılaştırmak için ATT&CK'yi kullanma konusunda yardımcı olmayı amaçlıyor."</p>
<p class="mb-4"><a href="https://github.com/rabobank-cdc/DeTTECT" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/rabobank-cdc/DeTTECT &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/rabobank-cdc/DeTTECT" target="_blank" class="text-blue-400 hover:underline">https://github.com/rabobank-cdc/DeTTECT</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Neler Günlüğe Kaydedilir?</h3>
<p class="text-slate-400 mb-5 leading-relaxed">"What2Log, günlüklerle ilgili olarak bilgisayar güvenliği gösteriminde gözle görülür bir boşluk gördüğümüzde başlayan bir projeydi. Her gün kullanılan büyük işletim sistemlerinin günlüklerinin neyin ve nasıl anlaşılacağına ilişkin merkezi bir kaynak yoktu. What2Log tam olarak bu boşluğu doldurmak için yapıldı."</p>
<p class="mb-4"><a href="https://what2log.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://what2log.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://what2log.com/" target="_blank" class="text-blue-400 hover:underline">https://what2log.com/</a></p>
`
  },
  "detection-use-cases-vulnerabilities-log4shell-cve-2021-44228": {
    slug: "detection-use-cases-vulnerabilities-log4shell-cve-2021-44228",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "log4j Güvenlik Açığı ( log4shell)",
    description: "Kötüye kullanımın tespiti son derece zordur çünkü istismar dizesi kolayca gizlenir.",
    originalPath: "/detection-use-cases/vulnerabilities/log4shell-cve-2021-44228",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Kötüye kullanımın tespiti son derece zordur çünkü istismar dizesi kolayca gizlenir.</p>
<p class="text-slate-400 mb-5 leading-relaxed">İnternete yönelik hizmetlerden başlatılan giden bağlantılar gibi ikincil etkilerin tespit edilmesiyle muhtemelen daha iyi sonuçlar elde edilecektir.</p>
<p class="mb-4"><a href="https://github.com/Neo23x0/log4shell-detector" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Neo23x0/log4shell-detector &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Neo23x0/log4shell-detector" target="_blank" class="text-blue-400 hover:underline">https://github.com/Neo23x0/log4shell-detector</a></p>
<p class="mb-4"><a href="https://gist.github.com/SwitHak/b66db3a06c2955a9cb71a8718970c592" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://gist.github.com/SwitHak/b66db3a06c2955a9cb71a8718970c592 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://gist.github.com/SwitHak/b66db3a06c2955a9cb71a8718970c592" target="_blank" class="text-blue-400 hover:underline">https://gist.github.com/SwitHak/b66db3a06c2955a9cb71a8718970c592</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Canarytokens, güvenlik açığını test etmek için bir token oluşturulmasına olanak tanır. Açılır menünün en altında Log4Shell bulunur.</p>
<p class="mb-4"><a href="https://canarytokens.org/generate" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://canarytokens.org/generate &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://canarytokens.org/generate" target="_blank" class="text-blue-400 hover:underline">https://canarytokens.org/generate</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Splunk, faydalı olabilecek aramaları içeren bir blog yazısı yayınladı</p>
<p class="mb-4"><a href="https://www.splunk.com/en_us/blog/security/log4shell-detecting-log4j-vulnerability-cve-2021-44228-continued.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.splunk.com/en_us/blog/security/log4shell-detecting-log4j-vulnerability-cve-2021-44228-continued.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.splunk.com/en_us/blog/security/log4shell-detecting-log4j-vulnerability-cve-2021-44228-continued.html" target="_blank" class="text-blue-400 hover:underline">https://www.splunk.com/en_us/blog/security/log4shell-detecting-log4j-vulnerability-cve-2021-44228-continued.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NCC'nin kılavuzu</p>
<p class="mb-4"><a href="https://research.nccgroup.com/2021/12/12/log4shell-reconnaissance-and-post-exploitation-network-detection/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://research.nccgroup.com/2021/12/12/log4shell-reconnaissance-and-post-exploitation-network-detection/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://research.nccgroup.com/2021/12/12/log4shell-reconnaissance-and-post-exploitation-network-detection/" target="_blank" class="text-blue-400 hover:underline">https://research.nccgroup.com/2021/12/12/log4shell-reconnaissance-and-post-exploitation-network-detection/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Google Chronicle'ın kılavuzu</p>
<p class="mb-4"><a href="https://chroniclesec.medium.com/detecting-and-responding-to-apache-log4j-2-cve-2021-44228-using-google-chronicle-ec77d676eaea" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://chroniclesec.medium.com/detecting-and-responding-to-apache-log4j-2-cve-2021-44228-using-google-chronicle-ec77d676eaea &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://chroniclesec.medium.com/detecting-and-responding-to-apache-log4j-2-cve-2021-44228-using-google-chronicle-ec77d676eaea" target="_blank" class="text-blue-400 hover:underline">https://chroniclesec.medium.com/detecting-and-responding-to-apache-log4j-2-cve-2021-44228-using-google-chronicle-ec77d676eaea</a></p>
`
  },
  "work-in-a-soc-learning-resources-computer-science": {
    slug: "work-in-a-soc-learning-resources-computer-science",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Bilgisayar Bilimi",
    description: "Konuların tamamını kapsayan pek çok çevrimiçi CS video kursu",
    originalPath: "/work-in-a-soc/learning-resources/computer-science",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Konuların tamamını kapsayan pek çok çevrimiçi CS video kursu</p>
<p class="mb-4"><a href="https://github.com/Developer-Y/cs-video-courses" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Developer-Y/cs-video-courses &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Developer-Y/cs-video-courses" target="_blank" class="text-blue-400 hover:underline">https://github.com/Developer-Y/cs-video-courses</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">güvenlik dahil</p>
<p class="mb-4"><a href="https://github.com/Developer-Y/cs-video-courses#security" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Developer-Y/cs-video-courses#security &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Developer-Y/cs-video-courses#security" target="_blank" class="text-blue-400 hover:underline">https://github.com/Developer-Y/cs-video-courses#security</a></p>
`
  },
  "detection-use-cases-canary-tokens": {
    slug: "detection-use-cases-canary-tokens",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Kanarya Jetonları",
    description: "Thinkst'in Canary Token'ları hem UEBA hem de veri kümelerine erişimin izlenmesi için çok faydalıdır. Bunları tohumlamaya ve erişim konusunda uyarı verecek ku...",
    originalPath: "/detection-use-cases/canary-tokens",
    htmlContent: `<p class="mb-4"><a href="https://canary.tools/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Thinkst'in &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Thinkst'in Canary Token'ları hem UEBA hem de veri kümelerine erişimin izlenmesi için çok faydalıdır. Bunları tohumlamaya ve erişim konusunda uyarı verecek kullanım senaryoları oluşturmaya değer.</p>
<p class="mb-4"><a href="https://canarytokens.org/generate" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://canarytokens.org/generate &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://canarytokens.org/generate" target="_blank" class="text-blue-400 hover:underline">https://canarytokens.org/generate</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Microsoft çok benzer bir şeyi deniyor</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/azure/sentinel/monitor-key-vault-honeytokens?tabs=deploy-at-scale" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/azure/sentinel/monitor-key-vault-honeytokens?tabs=deploy-at-scale &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/azure/sentinel/monitor-key-vault-honeytokens?tabs=deploy-at-scale" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/azure/sentinel/monitor-key-vault-honeytokens?tabs=deploy-at-scale</a></p>
`
  },
  "other-stuff-hardening-personal": {
    slug: "other-stuff-hardening-personal",
    category: "other-stuff",
    categoryTr: "Sıkılaştırma & Diğer",
    title: "Kontrol listeleri",
    description: "Saldırılara maruz kalan DNC, aktivistler ve kampanyacılar için çok yararlı bir kontrol listesi oluşturan bir rehber hazırladı.",
    originalPath: "/other-stuff/hardening/personal",
    htmlContent: `<p class="mb-4"><a href="https://democrats.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">DNC &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Saldırılara maruz kalan DNC, aktivistler ve kampanyacılar için çok yararlı bir kontrol listesi oluşturan bir rehber hazırladı.</p>
<p class="mb-4"><a href="https://democrats.org/wp-content/uploads/Device-and-Account-Security-Checklist.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://democrats.org/wp-content/uploads/Device-and-Account-Security-Checklist.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://democrats.org/wp-content/uploads/Device-and-Account-Security-Checklist.pdf" target="_blank" class="text-blue-400 hover:underline">https://democrats.org/wp-content/uploads/Device-and-Account-Security-Checklist.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">EFF'nin Gözetim Meşru Savunması</p>
<p class="mb-4"><a href="https://ssd.eff.org/en/module-categories/basics" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://ssd.eff.org/en/module-categories/basics &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://ssd.eff.org/en/module-categories/basics" target="_blank" class="text-blue-400 hover:underline">https://ssd.eff.org/en/module-categories/basics</a></p>
<p class="mb-4"><a href="https://www.asd.gov.au/cyber-security" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">OSB &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ASD'nin kılavuzu</p>
<p class="mb-4"><a href="https://www.cyber.gov.au/acsc/view-all-content/advice/personal-security-guides" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cyber.gov.au/acsc/view-all-content/advice/personal-security-guides &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cyber.gov.au/acsc/view-all-content/advice/personal-security-guides" target="_blank" class="text-blue-400 hover:underline">https://www.cyber.gov.au/acsc/view-all-content/advice/personal-security-guides</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Önceliklendirmelere kesinlikle katılmıyorum ama bu iyi bir liste</p>
<p class="mb-4"><a href="https://github.com/Lissy93/personal-security-checklist" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Lissy93/personal-security-checklist &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Lissy93/personal-security-checklist" target="_blank" class="text-blue-400 hover:underline">https://github.com/Lissy93/personal-security-checklist</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Windows</h3>
<p class="mb-4"><a href="https://twitter.com/SwiftOnSecurity" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">SwiftOnSecurity &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">SwiftOnSecurity'nin iyi güvenlik rehberi</p>
<p class="mb-4"><a href="https://decentsecurity.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://decentsecurity.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://decentsecurity.com/" target="_blank" class="text-blue-400 hover:underline">https://decentsecurity.com/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Ev Ağları</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Ev yönlendiricinizi daha iyi koruyun</p>
<p class="mb-4"><a href="https://www.routersecurity.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.routersecurity.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.routersecurity.org/" target="_blank" class="text-blue-400 hover:underline">https://www.routersecurity.org/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NSA'nın "Ehliyeti Tehlikeye Giren Kişisel Ağ Göstergeleri ve Azaltıcı Önlemler" kılavuzu</p>
<p class="mb-4"><a href="https://media.defense.gov/2020/Sep/17/2002499615/-1/-1/0/COMPROMISED_PERSONAL_NETWORK_INDICATORS_AND_MITIGATIONS_20200914_FINAL.PDF/COMPROMISED_PERSONAL_NETWORK_INDICATORS_AND_MITIGATIONS_20200914_FINAL.PDF" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://media.defense.gov/2020/Sep/17/2002499615/-1/-1/0/COMPROMISED_PERSONAL_NETWORK_INDICATORS_AND_MITIGATIONS_20200914_FINAL.PDF/COMPROMISED_PERSONAL_NETWORK_INDICATORS_AND_MITIGATIONS_20200914_FINAL.PDF &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://media.defense.gov/2020/Sep/17/2002499615/-1/-1/0/COMPROMISED_PERSONAL_NETWORK_INDICATORS_AND_MITIGATIONS_20200914_FINAL.PDF/COMPROMISED_PERSONAL_NETWORK_INDICATORS_AND_MITIGATIONS_20200914_FINAL.PDF" target="_blank" class="text-blue-400 hover:underline">https://media.defense.gov/2020/Sep/17/2002499615/-1/-1/0/COMPROMISED_PERSONAL_NETWORK_INDICATORS_AND_MITIGATIONS_20200914_FINAL.PDF/COMPROMISED_PERSONAL_NETWORK_INDICATORS_AND_MITIGATIONS_20200914_FINAL.PDF</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Apple iOS cihazları</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Apple'ın "Kişisel Güvenlik Risk Altındayken Cihaz ve Veri Erişimi" kılavuzu</p>
<p class="mb-4"><a href="https://manuals.info.apple.com/MANUALS/1000/MA1976/en_US/device-and-data-access-when-personal-safety-is-at-risk.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://manuals.info.apple.com/MANUALS/1000/MA1976/en_US/device-and-data-access-when-personal-safety-is-at-risk.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://manuals.info.apple.com/MANUALS/1000/MA1976/en_US/device-and-data-access-when-personal-safety-is-at-risk.pdf" target="_blank" class="text-blue-400 hover:underline">https://manuals.info.apple.com/MANUALS/1000/MA1976/en_US/device-and-data-access-when-personal-safety-is-at-risk.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kontrol listesi: Konumunuzu başka kimsenin göremediğinden emin olmak istiyorsanız</p>
<p class="mb-4"><a href="https://support.apple.com/en-us/HT212023" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://support.apple.com/en-us/HT212023 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://support.apple.com/en-us/HT212023" target="_blank" class="text-blue-400 hover:underline">https://support.apple.com/en-us/HT212023</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kontrol listesi: Daha önce paylaşımda bulunduğunuz biriyle paylaşımı durdurmak istiyorsanız</p>
<p class="mb-4"><a href="https://support.apple.com/en-us/HT212022" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://support.apple.com/en-us/HT212022 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://support.apple.com/en-us/HT212022" target="_blank" class="text-blue-400 hover:underline">https://support.apple.com/en-us/HT212022</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kontrol listesi: Cihazınıza veya hesaplarınıza başka birinin erişimi olup olmadığını görmek istiyorsanız</p>
<p class="mb-4"><a href="https://support.apple.com/en-us/HT212021" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://support.apple.com/en-us/HT212021 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://support.apple.com/en-us/HT212021" target="_blank" class="text-blue-400 hover:underline">https://support.apple.com/en-us/HT212021</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Sinyal</h3>
<p class="mb-4"><a href="https://signal.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">sinyal &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kilitleme sinyali</p>
<p class="mb-4"><a href="https://freedom.press/training/locking-down-signal/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://freedom.press/training/locking-down-signal/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://freedom.press/training/locking-down-signal/" target="_blank" class="text-blue-400 hover:underline">https://freedom.press/training/locking-down-signal/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Çok Faktörlü Kimlik Doğrulama</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Çok Faktörlü Kimlik Doğrulama Türleri sıralandı</p>
<p class="mb-4"><a href="https://danielmiessler.com/blog/casmm-consumer-authentication-security-maturity-model/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://danielmiessler.com/blog/casmm-consumer-authentication-security-maturity-model/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://danielmiessler.com/blog/casmm-consumer-authentication-security-maturity-model/" target="_blank" class="text-blue-400 hover:underline">https://danielmiessler.com/blog/casmm-consumer-authentication-security-maturity-model/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Gizlilik Araçları</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Oldukça kapsamlı bir liste</p>
<p class="mb-4"><a href="https://www.privacytools.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.privacytools.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.privacytools.io/" target="_blank" class="text-blue-400 hover:underline">https://www.privacytools.io/</a></p>
`
  },
  "detection-use-cases-feeds": {
    slug: "detection-use-cases-feeds",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Yayınlar",
    description: "Feed'lerin değeri neden her zaman şüphelidir? Ünlü 'acı piramidi'",
    originalPath: "/detection-use-cases/feeds",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Feed'lerin değeri neden her zaman şüphelidir? Ünlü 'acı piramidi'</p>
<p class="mb-4"><a href="http://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">http://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="http://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html" target="_blank" class="text-blue-400 hover:underline">http://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Akışlarla ilgili uyarı vermek için oluşturulmuş kullanım senaryolarının oldukça etkilenip ıskalanabileceğini düşünüyorum, ancak bu çok faydalı</p>
<p class="mb-4"><a href="https://iplists.firehol.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://iplists.firehol.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://iplists.firehol.org/" target="_blank" class="text-blue-400 hover:underline">https://iplists.firehol.org/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kötü Amaçlı Yazılım tarafından kullanılan TLS Sertifikaları</p>
<p class="mb-4"><a href="https://sslbl.abuse.ch/ssl-certificates/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://sslbl.abuse.ch/ssl-certificates/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://sslbl.abuse.ch/ssl-certificates/" target="_blank" class="text-blue-400 hover:underline">https://sslbl.abuse.ch/ssl-certificates/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">TOR Çıkış IP'leri</p>
<p class="mb-4"><a href="https://check.torproject.org/torbulkexitlist" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://check.torproject.org/torbulkexitlist &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://check.torproject.org/torbulkexitlist" target="_blank" class="text-blue-400 hover:underline">https://check.torproject.org/torbulkexitlist</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Seçilmiş listeler</p>
<p class="mb-4"><a href="https://github.com/drb-ra/C2IntelFeeds" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/drb-ra/C2IntelFeeds &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/drb-ra/C2IntelFeeds" target="_blank" class="text-blue-400 hover:underline">https://github.com/drb-ra/C2IntelFeeds</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Mükemmel Greynoise. Sizi tarayan/sömürmeye çalışan şey size özel mi yoksa herkesi mi tarıyor? Denetim yapan harici güvenlik duvarı günlüklerini ilgi çekici ve yararlı tutmanızı sağlar....</p>
<p class="mb-4"><a href="https://www.greynoise.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.greynoise.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.greynoise.io/" target="_blank" class="text-blue-400 hover:underline">https://www.greynoise.io/</a></p>
`
  },
  "work-in-a-soc-learning-resources-analysis": {
    slug: "work-in-a-soc-learning-resources-analysis",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Analiz",
    description: "expel.com'dan nasıl iyi bir analist olunur?",
    originalPath: "/work-in-a-soc/learning-resources/analysis",
    htmlContent: `<p class="mb-4"><a href="https://expel.com" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">expel.com &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">expel.com'dan nasıl iyi bir analist olunur?</p>
<p class="mb-4"><a href="https://expel.com/blog/how-to-investigate-like-analyst-expel-workbench-managed-alert-process/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://expel.com/blog/how-to-investigate-like-analyst-expel-workbench-managed-alert-process/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://expel.com/blog/how-to-investigate-like-analyst-expel-workbench-managed-alert-process/" target="_blank" class="text-blue-400 hover:underline">https://expel.com/blog/how-to-investigate-like-analyst-expel-workbench-managed-alert-process/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Makaleler</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Her analistin şunları okuması gerekirdi:</p>
<p class="text-slate-400 mb-5 leading-relaxed">'Zinciri Öldür' makalesi</p>
<p class="mb-4"><a href="https://lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf" target="_blank" class="text-blue-400 hover:underline">https://lockheedmartin.com/content/dam/lockheed-martin/rms/documents/cyber/LM-White-Paper-Intel-Driven-Defense.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">'Elmas Modeli'</p>
<p class="mb-4"><a href="http://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">http://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="http://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf" target="_blank" class="text-blue-400 hover:underline">http://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf</a></p>
`
  },
  "soc-soc-maturity": {
    slug: "soc-soc-maturity",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "SOC Olgunluğu",
    description: "SOC CMM",
    originalPath: "/soc/soc-maturity",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">SOC CMM</p>
<p class="mb-4"><a href="https://soc-cmm.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://soc-cmm.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://soc-cmm.com/" target="_blank" class="text-blue-400 hover:underline">https://soc-cmm.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NCSC'nin NIS Hedef C'sini karşılama kılavuzu. 'İyi'nin neye benzediğine dair çok yararlı bir yapı.</p>
<p class="mb-4"><a href="https://www.ncsc.gov.uk/collection/caf/cyber-assessment-framework/caf-objective-c-detecting-cyber-security-events" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ncsc.gov.uk/collection/caf/cyber-assessment-framework/caf-objective-c-detecting-cyber-security-events &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ncsc.gov.uk/collection/caf/cyber-assessment-framework/caf-objective-c-detecting-cyber-security-events" target="_blank" class="text-blue-400 hover:underline">https://www.ncsc.gov.uk/collection/caf/cyber-assessment-framework/caf-objective-c-detecting-cyber-security-events</a></p>
<p class="mb-4"><a href="https://www.linkedin.com/in/stephendeutsch/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Benim &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bir kurumsal SOC'nin olgunluğunu değerlendirmeye yönelik sorularım. Bir e-tabloya çıkmak için tıklayın.</p>
`
  },
  "work-in-a-soc-learning-resources-other": {
    slug: "work-in-a-soc-learning-resources-other",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "İnfografikler",
    description: "Güvenlik İnfografikleri",
    originalPath: "/work-in-a-soc/learning-resources/other",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Güvenlik İnfografikleri</p>
<p class="mb-4"><a href="https://medium.com/malware-buddy/security-infographics-9c4d3bd891ef" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/malware-buddy/security-infographics-9c4d3bd891ef &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/malware-buddy/security-infographics-9c4d3bd891ef" target="_blank" class="text-blue-400 hover:underline">https://medium.com/malware-buddy/security-infographics-9c4d3bd891ef</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kullanışlı Duvar Kağıtları</p>
<p class="mb-4"><a href="https://wallpaperaccess.com/cheat-sheet" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://wallpaperaccess.com/cheat-sheet &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://wallpaperaccess.com/cheat-sheet" target="_blank" class="text-blue-400 hover:underline">https://wallpaperaccess.com/cheat-sheet</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Kaynaklar</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Müthiş Siber Güvenlik Mavi Ekibi</p>
<p class="mb-4"><a href="https://github.com/fabacab/awesome-cybersecurity-blueteam" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/fabacab/awesome-cybersecurity-blueteam &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/fabacab/awesome-cybersecurity-blueteam" target="_blank" class="text-blue-400 hover:underline">https://github.com/fabacab/awesome-cybersecurity-blueteam</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Operasyonlar</h3>
<p class="text-slate-400 mb-5 leading-relaxed">O kadar çok bilgelik</p>
<p class="mb-4"><a href="https://www.netmeister.org/blog/ops-lessons.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.netmeister.org/blog/ops-lessons.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.netmeister.org/blog/ops-lessons.html" target="_blank" class="text-blue-400 hover:underline">https://www.netmeister.org/blog/ops-lessons.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Nesneleri adlandırmak</p>
<p class="mb-4"><a href="https://namingschemes.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://namingschemes.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://namingschemes.com/" target="_blank" class="text-blue-400 hover:underline">https://namingschemes.com/</a></p>
`
  },
  "detection-use-cases-linux": {
    slug: "detection-use-cases-linux",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Linux",
    description: "ATT&CK ile eşlenen denetim yapılandırması",
    originalPath: "/detection-use-cases/linux",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">ATT&CK ile eşlenen denetim yapılandırması</p>
<p class="mb-4"><a href="https://github.com/bfuzzy/auditd-attack" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/bfuzzy/auditd-attack &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/bfuzzy/auditd-attack" target="_blank" class="text-blue-400 hover:underline">https://github.com/bfuzzy/auditd-attack</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">*NIX sistemleri için LOL kutuları</p>
<p class="mb-4"><a href="https://gtfobins.github.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://gtfobins.github.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://gtfobins.github.io/" target="_blank" class="text-blue-400 hover:underline">https://gtfobins.github.io/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Florian Roth'un denetim yapılandırması</p>
<p class="mb-4"><a href="https://gist.github.com/Neo23x0/9fe88c0c5979e017a389b90fd19ddfee" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://gist.github.com/Neo23x0/9fe88c0c5979e017a389b90fd19ddfee &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://gist.github.com/Neo23x0/9fe88c0c5979e017a389b90fd19ddfee" target="_blank" class="text-blue-400 hover:underline">https://gist.github.com/Neo23x0/9fe88c0c5979e017a389b90fd19ddfee</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Linux için ATT&CK tekniklerini ve taktiklerini tespit etmek</p>
<p class="mb-4"><a href="https://github.com/Kirtar22/Litmus_Test/blob/master/README.md" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Kirtar22/Litmus_Test/blob/master/README.md &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Kirtar22/Litmus_Test/blob/master/README.md" target="_blank" class="text-blue-400 hover:underline">https://github.com/Kirtar22/Litmus_Test/blob/master/README.md</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Linux için Sysmon</p>
<p class="mb-4"><a href="https://github.com/microsoft/MSTIC-Sysmon/tree/main/linux/configs" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/microsoft/MSTIC-Sysmon/tree/main/linux/configs &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/microsoft/MSTIC-Sysmon/tree/main/linux/configs" target="_blank" class="text-blue-400 hover:underline">https://github.com/microsoft/MSTIC-Sysmon/tree/main/linux/configs</a></p>
<p class="mb-4"><a href="https://www.lares.com/blog/sysmon-for-linux-test-drive/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.lares.com/blog/sysmon-for-linux-test-drive/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.lares.com/blog/sysmon-for-linux-test-drive/" target="_blank" class="text-blue-400 hover:underline">https://www.lares.com/blog/sysmon-for-linux-test-drive/</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/tactics/TA0003/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">sebat &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Linux'ta kalıcılık mekanizmalarını tespit etmek</p>
<p class="mb-4"><a href="https://pberba.github.io/security/2021/11/22/linux-threat-hunting-for-persistence-sysmon-auditd-webshell/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://pberba.github.io/security/2021/11/22/linux-threat-hunting-for-persistence-sysmon-auditd-webshell/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://pberba.github.io/security/2021/11/22/linux-threat-hunting-for-persistence-sysmon-auditd-webshell/" target="_blank" class="text-blue-400 hover:underline">https://pberba.github.io/security/2021/11/22/linux-threat-hunting-for-persistence-sysmon-auditd-webshell/</a></p>
<p class="mb-4"><a href="https://pberba.github.io/security/2021/11/23/linux-threat-hunting-for-persistence-account-creation-manipulation/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://pberba.github.io/security/2021/11/23/linux-threat-hunting-for-persistence-account-creation-manipulation/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://pberba.github.io/security/2021/11/23/linux-threat-hunting-for-persistence-account-creation-manipulation/" target="_blank" class="text-blue-400 hover:underline">https://pberba.github.io/security/2021/11/23/linux-threat-hunting-for-persistence-account-creation-manipulation/</a></p>
`
  },
  "work-in-a-soc-learning-resources-books-and-podcasts": {
    slug: "work-in-a-soc-learning-resources-books-and-podcasts",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Kitaplar",
    description: "Jack Rhysider'ın (Darknet Diaries Podcast'inden) kitap seçimleri",
    originalPath: "/work-in-a-soc/learning-resources/books-and-podcasts",
    htmlContent: `<p class="mb-4"><a href="https://twitter.com/JackRhysider" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Jack Rhysider &rarr;</a></p>
<p class="mb-4"><a href="https://darknetdiaries.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Darknet Günlükleri &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Jack Rhysider'ın (Darknet Diaries Podcast'inden) kitap seçimleri</p>
<p class="mb-4"><a href="https://darknetdiaries.com/books/#" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://darknetdiaries.com/books/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://darknetdiaries.com/books/" target="_blank" class="text-blue-400 hover:underline">https://darknetdiaries.com/books/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Palo Alto'nun Siber Güvenlik Kanonu adında bir projesi vardı. Ölmüş gibi görünüyor ancak arşivler burada bulunabilir</p>
<p class="mb-4"><a href="https://www.paloaltonetworks.com/blog/category/canon/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.paloaltonetworks.com/blog/category/canon/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.paloaltonetworks.com/blog/category/canon/" target="_blank" class="text-blue-400 hover:underline">https://www.paloaltonetworks.com/blog/category/canon/</a></p>
<p class="mb-4"><a href="https://www.osu.edu/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Ohio Eyalet Üniversitesi &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ohio Eyalet Üniversitesi'nin Siber Güvenlik Canon'u hâlâ var</p>
<p class="mb-4"><a href="https://icdt.osu.edu/cybercanon" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://icdt.osu.edu/cybercanon &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://icdt.osu.edu/cybercanon" target="_blank" class="text-blue-400 hover:underline">https://icdt.osu.edu/cybercanon</a></p>
<p class="mb-4"><a href="https://www.cl.cam.ac.uk/~rja14" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Ross Anderson &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ross Anderson, Güvenlik Mühendisliği kitabının 3. baskısının bölümlerini (ve 2. baskının tamamını) ücretsiz olarak sundu</p>
<p class="mb-4"><a href="https://www.cl.cam.ac.uk/~rja14/book.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cl.cam.ac.uk/~rja14/book.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cl.cam.ac.uk/~rja14/book.html" target="_blank" class="text-blue-400 hover:underline">https://www.cl.cam.ac.uk/~rja14/book.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Özellikle kötü amaçlı yazılım analizi ve tersine mühendislik üzerine kitaplar</p>
<p class="mb-4"><a href="https://medium.com/malware-buddy/my-top-books-to-learn-malware-analysis-and-reverse-engineering-2ae1c6e209b9" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/malware-buddy/my-top-books-to-learn-malware-analysis-and-reverse-engineering-2ae1c6e209b9 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/malware-buddy/my-top-books-to-learn-malware-analysis-and-reverse-engineering-2ae1c6e209b9" target="_blank" class="text-blue-400 hover:underline">https://medium.com/malware-buddy/my-top-books-to-learn-malware-analysis-and-reverse-engineering-2ae1c6e209b9</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kırmızı takım</p>
<p class="mb-4"><a href="https://redteams.net/bookshelf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://redteams.net/bookshelf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://redteams.net/bookshelf" target="_blank" class="text-blue-400 hover:underline">https://redteams.net/bookshelf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Siber Bilgi Gövdesi (CYBOK)</p>
<p class="mb-4"><a href="https://www.cybok.org/knowledgebase1_1/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cybok.org/knowledgebase1_1/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cybok.org/knowledgebase1_1/" target="_blank" class="text-blue-400 hover:underline">https://www.cybok.org/knowledgebase1_1/</a></p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Podcast'ler</h2>
<p class="text-slate-400 mb-5 leading-relaxed">Risky Business haftalık olarak mutlaka dinlenmesi gereken bir eser. Haberler ve röportajlar</p>
<p class="mb-4"><a href="https://risky.biz/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://risky.biz/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://risky.biz/" target="_blank" class="text-blue-400 hover:underline">https://risky.biz/</a></p>
<p class="mb-4"><a href="https://twitter.com/JackRhysider" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Jack Rhysider &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Jack Rhysider geçmiş olaylara ve insanlara daha tarihsel bir bakış açısı getiriyor. Büyüleyici ve iyi anlatılmış hikayelerdir. "İnternetin karanlık tarafından gerçek hikayeler"</p>
<p class="mb-4"><a href="https://darknetdiaries.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://darknetdiaries.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://darknetdiaries.com/" target="_blank" class="text-blue-400 hover:underline">https://darknetdiaries.com/</a></p>
`
  },
  "soc-soar": {
    slug: "soc-soar",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "YÜKSEL",
    description: "Splunk phantom için uygulama ayrıntılarını içeren bazı örnek SOAR oyun kitapları",
    originalPath: "/soc/soar",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Splunk phantom için uygulama ayrıntılarını içeren bazı örnek SOAR oyun kitapları</p>
<p class="mb-4"><a href="https://research.splunk.com/playbooks/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://research.splunk.com/playbooks/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://research.splunk.com/playbooks/" target="_blank" class="text-blue-400 hover:underline">https://research.splunk.com/playbooks/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bu, SOAR platformu için harika bir kullanım örneğidir</p>
<p class="mb-4"><a href="https://cyb3rops.medium.com/use-personal-activity-reviews-par-to-uncover-adversary-activity-2db0bcb9e76" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://cyb3rops.medium.com/use-personal-activity-reviews-par-to-uncover-adversary-activity-2db0bcb9e76 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://cyb3rops.medium.com/use-personal-activity-reviews-par-to-uncover-adversary-activity-2db0bcb9e76" target="_blank" class="text-blue-400 hover:underline">https://cyb3rops.medium.com/use-personal-activity-reviews-par-to-uncover-adversary-activity-2db0bcb9e76</a></p>
`
  },
  "detection-use-cases-web": {
    slug: "detection-use-cases-web",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "ağ",
    description: "Target'tan web kredi kartı hesaplayıcılarını tespit etmeye yönelik ilginç bir açık kaynak yaklaşımı",
    originalPath: "/detection-use-cases/web",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Target'tan web kredi kartı hesaplayıcılarını tespit etmeye yönelik ilginç bir açık kaynak yaklaşımı</p>
<p class="mb-4"><a href="https://tech.target.com/blog/meet-merry-maker" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://tech.target.com/blog/meet-merry-maker &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://tech.target.com/blog/meet-merry-maker" target="_blank" class="text-blue-400 hover:underline">https://tech.target.com/blog/meet-merry-maker</a></p>
<p class="mb-4"><a href="https://github.com/target/mmk-ui-api" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/target/mmk-ui-api &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/target/mmk-ui-api" target="_blank" class="text-blue-400 hover:underline">https://github.com/target/mmk-ui-api</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kendi Kendine Barındırılan, Açık Kaynak, Web Sayfalarının Değişiklik Takibi</p>
<p class="mb-4"><a href="https://github.com/dgtlmoon/changedetection.io" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/dgtlmoon/changedetection.io &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/dgtlmoon/changedetection.io" target="_blank" class="text-blue-400 hover:underline">https://github.com/dgtlmoon/changedetection.io</a></p>
`
  },
  "soc-machine-learning": {
    slug: "soc-machine-learning",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "Makine öğrenimi",
    description: "Algılama güvenliği ürünlerinde pek çok şüpheli makine öğrenimi yaşanıyor. Bazı satıcılar ürünlerinin nasıl çalıştığını sorduğunuzda ellerini sallayıp 'algori...",
    originalPath: "/soc/machine-learning",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Algılama güvenliği ürünlerinde pek çok şüpheli makine öğrenimi yaşanıyor. Bazı satıcılar ürünlerinin nasıl çalıştığını sorduğunuzda ellerini sallayıp 'algoritmalar' diyecekler. Satıcılara şüpheci sorular sormak için bazı yararlı bağlantılar...</p>
<p class="mb-4"><a href="https://twitter.com/joshua_saxe" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Joshua Saxe &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Joshua Saxe'nin twitter başlığı "ML hakkında fazla bir şey bilmiyor olsanız bile bir siber güvenlik satıcısının makine öğrenimi iddiaları nasıl değerlendirilir?"</p>
<p class="mb-4"><a href="https://twitter.com/joshua_saxe/status/1328834270723452928" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/joshua_saxe/status/1328834270723452928 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/joshua_saxe/status/1328834270723452928" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/joshua_saxe/status/1328834270723452928</a></p>
<p class="mb-4"><a href="https://twitter.com/rharang" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Zengin Harang &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Zengin Harang Derin Öğrenme hakkında</p>
<p class="mb-4"><a href="https://twitter.com/rharang/status/1465340190919217153" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/rharang/status/1465340190919217153 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/rharang/status/1465340190919217153" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/rharang/status/1465340190919217153</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Makine öğrenimi" çözümü satan bir siber güvenlik satıcısına sorulacak beş soru</p>
<p class="mb-4"><a href="https://medium.com/@PauloShak/five-questions-to-ask-a-cybersecurity-vendor-selling-a-machine-learning-solution-8160979b2c66" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/@PauloShak/five-questions-to-ask-a-cybersecurity-vendor-selling-a-machine-learning-solution-8160979b2c66 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/@PauloShak/five-questions-to-ask-a-cybersecurity-vendor-selling-a-machine-learning-solution-8160979b2c66" target="_blank" class="text-blue-400 hover:underline">https://medium.com/@PauloShak/five-questions-to-ask-a-cybersecurity-vendor-selling-a-machine-learning-solution-8160979b2c66</a></p>
<p class="mb-4"><a href="https://twitter.com/random_walker" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Arvind Narayanan &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Arvind Narayanan'ın yazdığı AI yılan yağı nasıl tanınır?</p>
<p class="mb-4"><a href="https://www.cs.princeton.edu/~arvindn/talks/MIT-STS-AI-snakeoil.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cs.princeton.edu/~arvindn/talks/MIT-STS-AI-snakeoil.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cs.princeton.edu/~arvindn/talks/MIT-STS-AI-snakeoil.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.cs.princeton.edu/~arvindn/talks/MIT-STS-AI-snakeoil.pdf</a></p>
`
  },
  "work-in-a-soc-learning-resources-networking": {
    slug: "work-in-a-soc-learning-resources-networking",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Ağ oluşturma",
    description: "Cisco'nun Korumalı Alanı. Geliştirme amacıyla çok çeşitli Cisco teknolojilerine ücretsiz erişim sağlar.",
    originalPath: "/work-in-a-soc/learning-resources/networking",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Cisco'nun Korumalı Alanı. Geliştirme amacıyla çok çeşitli Cisco teknolojilerine ücretsiz erişim sağlar.</p>
<p class="mb-4"><a href="https://developer.cisco.com/site/sandbox/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://developer.cisco.com/site/sandbox/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://developer.cisco.com/site/sandbox/" target="_blank" class="text-blue-400 hover:underline">https://developer.cisco.com/site/sandbox/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve Cisco ağ akademisi</p>
<p class="mb-4"><a href="https://www.netacad.com/courses/networking" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.netacad.com/courses/networking &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.netacad.com/courses/networking" target="_blank" class="text-blue-400 hover:underline">https://www.netacad.com/courses/networking</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ağ+ eğitimi</p>
<p class="mb-4"><a href="https://www.professormesser.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.professormesser.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.professormesser.com/" target="_blank" class="text-blue-400 hover:underline">https://www.professormesser.com/</a></p>
<p class="mb-4"><a href="https://securityonionsolutions.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Güvenlik Soğanı &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Security Onion, tam özellikli bir açık kaynaklı ağ güvenliği izleme platformudur. NSM uygulamasını öğrenmenin harika bir yolu.</p>
<p class="mb-4"><a href="https://github.com/Security-Onion-Solutions/securityonion" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Security-Onion-Solutions/securityonion &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Security-Onion-Solutions/securityonion" target="_blank" class="text-blue-400 hover:underline">https://github.com/Security-Onion-Solutions/securityonion</a></p>
<p class="mb-4"><a href="https://docs.securityonion.net/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.securityonion.net/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.securityonion.net/" target="_blank" class="text-blue-400 hover:underline">https://docs.securityonion.net/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ağ öğrencileri için özenle seçilmiş, sürekli büyüyen bir infografik kütüphanesi</p>
<p class="mb-4"><a href="https://github.com/DelfinoRT/Networking-Study-Stuff" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/DelfinoRT/Networking-Study-Stuff &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/DelfinoRT/Networking-Study-Stuff" target="_blank" class="text-blue-400 hover:underline">https://github.com/DelfinoRT/Networking-Study-Stuff</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">IANA'nın resmi liman ve hizmet haritalaması</p>
<p class="mb-4"><a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml" target="_blank" class="text-blue-400 hover:underline">https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xml</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Tüm packagelife hile sayfaları faydalıdır.</p>
<p class="mb-4"><a href="https://packetlife.net/library/cheat-sheets/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://packetlife.net/library/cheat-sheets/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://packetlife.net/library/cheat-sheets/" target="_blank" class="text-blue-400 hover:underline">https://packetlife.net/library/cheat-sheets/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">IPSEC nasıl çalışır?</p>
<p class="mb-4"><a href="https://networklessons.com/cisco/ccie-routing-switching/ipsec-internet-protocol-security" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://networklessons.com/cisco/ccie-routing-switching/ipsec-internet-protocol-security &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://networklessons.com/cisco/ccie-routing-switching/ipsec-internet-protocol-security" target="_blank" class="text-blue-400 hover:underline">https://networklessons.com/cisco/ccie-routing-switching/ipsec-internet-protocol-security</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Paket Yakalamalar (PCAP)</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Kötü amaçlı yazılım trafik örnekleri içeren efsanevi site. Analiz uygulamak için çok faydalıdır.</p>
<p class="mb-4"><a href="https://www.malware-traffic-analysis.net/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.malware-traffic-analysis.net/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.malware-traffic-analysis.net/" target="_blank" class="text-blue-400 hover:underline">https://www.malware-traffic-analysis.net/</a></p>
<p class="mb-4"><a href="https://twitter.com/chrissanders88" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Chris Sanders &rarr;</a></p>
<p class="mb-4"><a href="https://nostarch.com/packetanalysis3" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Pratik Paket Analizi &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Mükemmel Pratik Paket Analizi kitabından Chris Sanders'ın bir PCAP kütüphanesi var</p>
<p class="mb-4"><a href="https://github.com/chrissanders/packets" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/chrissanders/packets &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/chrissanders/packets" target="_blank" class="text-blue-400 hover:underline">https://github.com/chrissanders/packets</a></p>
<p class="mb-4"><a href="https://zeek.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Zeek &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Zeek (eski adıyla Bro) projesinin kapsamlı bir kütüphanesi var</p>
<p class="mb-4"><a href="https://github.com/zeek/zeek/tree/master/testing/btest/Traces" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/zeek/zeek/tree/master/testing/btest/Traces &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/zeek/zeek/tree/master/testing/btest/Traces" target="_blank" class="text-blue-400 hover:underline">https://github.com/zeek/zeek/tree/master/testing/btest/Traces</a></p>
<p class="mb-4"><a href="https://www.wireshark.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Wireshark &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Wireshark projesinin kendisi gibi</p>
<p class="mb-4"><a href="https://wiki.wireshark.org/SampleCaptures" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://wiki.wireshark.org/SampleCaptures &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://wiki.wireshark.org/SampleCaptures" target="_blank" class="text-blue-400 hover:underline">https://wiki.wireshark.org/SampleCaptures</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">İyi huylu PCAP örnekleri</p>
<p class="mb-4"><a href="http://njrusmc.net/jobaid/jobaid.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">http://njrusmc.net/jobaid/jobaid.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="http://njrusmc.net/jobaid/jobaid.html" target="_blank" class="text-blue-400 hover:underline">http://njrusmc.net/jobaid/jobaid.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Örnek PCAP'lerle Wireshark'ı öğrenin</p>
<p class="mb-4"><a href="https://gaia.cs.umass.edu/kurose_ross/wireshark.php" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://gaia.cs.umass.edu/kurose_ross/wireshark.php &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://gaia.cs.umass.edu/kurose_ross/wireshark.php" target="_blank" class="text-blue-400 hover:underline">https://gaia.cs.umass.edu/kurose_ross/wireshark.php</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">DNS</h3>
<p class="text-slate-400 mb-5 leading-relaxed">DNS'nin nasıl çalıştığını öğrenin. Ya da gerçekten işe yaramıyor. "DNS değil. DNS olmasının imkanı yok. DNS'di"</p>
<p class="mb-4"><a href="https://messwithdns.net/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://messwithdns.net/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://messwithdns.net/" target="_blank" class="text-blue-400 hover:underline">https://messwithdns.net/</a></p>
`
  },
  "detection-use-cases-cloud-okta": {
    slug: "detection-use-cases-cloud-okta",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Okta",
    description: "Okta'nın Blog yazısı",
    originalPath: "/detection-use-cases/cloud/okta",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Okta'nın Blog yazısı</p>
<p class="mb-4"><a href="https://www.okta.com/blog/2022/03/updated-okta-statement-on-lapsus/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.okta.com/blog/2022/03/updated-okta-statement-on-lapsus/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.okta.com/blog/2022/03/updated-okta-statement-on-lapsus/" target="_blank" class="text-blue-400 hover:underline">https://www.okta.com/blog/2022/03/updated-okta-statement-on-lapsus/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Cloudflare'in blog yazısı</p>
<p class="mb-4"><a href="https://blog.cloudflare.com/cloudflare-investigation-of-the-january-2022-okta-compromise/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://blog.cloudflare.com/cloudflare-investigation-of-the-january-2022-okta-compromise/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://blog.cloudflare.com/cloudflare-investigation-of-the-january-2022-okta-compromise/" target="_blank" class="text-blue-400 hover:underline">https://blog.cloudflare.com/cloudflare-investigation-of-the-january-2022-okta-compromise/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Okta'nın ilgi çekici etkinlikleri</p>
<p class="mb-4"><a href="https://github.com/eshlomo1/Microsoft-Sentinel-4-SecOps/blob/master/OKTA/Security-Events/Okta-Security-Event.md" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/eshlomo1/Microsoft-Sentinel-4-SecOps/blob/master/OKTA/Security-Events/Okta-Security-Event.md &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/eshlomo1/Microsoft-Sentinel-4-SecOps/blob/master/OKTA/Security-Events/Okta-Security-Event.md" target="_blank" class="text-blue-400 hover:underline">https://github.com/eshlomo1/Microsoft-Sentinel-4-SecOps/blob/master/OKTA/Security-Events/Okta-Security-Event.md</a></p>
<p class="mb-4"><a href="https://www.mitiga.io" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Mitiga &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Mitiga'nın Kılavuzu</p>
<p class="mb-4"><a href="https://www.mitiga.io/blog/all-the-information-you-need-to-know-to-understand-your-okta-logs-today" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.mitiga.io/blog/all-the-information-you-need-to-know-to-understand-your-okta-logs-today &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.mitiga.io/blog/all-the-information-you-need-to-know-to-understand-your-okta-logs-today" target="_blank" class="text-blue-400 hover:underline">https://www.mitiga.io/blog/all-the-information-you-need-to-know-to-understand-your-okta-logs-today</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Tüzük</p>
<p class="mb-4"><a href="https://github.com/SigmaHQ/sigma/tree/master/rules/cloud/okta" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/SigmaHQ/sigma/tree/master/rules/cloud/okta &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/SigmaHQ/sigma/tree/master/rules/cloud/okta" target="_blank" class="text-blue-400 hover:underline">https://github.com/SigmaHQ/sigma/tree/master/rules/cloud/okta</a></p>
<p class="mb-4"><a href="https://github.com/elastic/detection-rules/tree/main/rules/integrations/okta" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/elastic/detection-rules/tree/main/rules/integrations/okta &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/elastic/detection-rules/tree/main/rules/integrations/okta" target="_blank" class="text-blue-400 hover:underline">https://github.com/elastic/detection-rules/tree/main/rules/integrations/okta</a></p>
`
  },
  "work-in-a-soc-certifications": {
    slug: "work-in-a-soc-certifications",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Sertifikalar",
    description: "Paul Jerimy'nin dikkate değer sertifikasyon yol haritası. Pek çok sertifika.",
    originalPath: "/work-in-a-soc/certifications",
    htmlContent: `<p class="mb-4"><a href="https://twitter.com/pauljerimy" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Paul Jerimy &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Paul Jerimy'nin dikkate değer sertifikasyon yol haritası. Pek çok sertifika.</p>
<p class="mb-4"><a href="https://pauljerimy.com/security-certification-roadmap/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://pauljerimy.com/security-certification-roadmap/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://pauljerimy.com/security-certification-roadmap/" target="_blank" class="text-blue-400 hover:underline">https://pauljerimy.com/security-certification-roadmap/</a></p>
`
  },
  "other-stuff-pci-dss": {
    slug: "other-stuff-pci-dss",
    category: "other-stuff",
    categoryTr: "Sıkılaştırma & Diğer",
    title: "PCI-DSS",
    description: "Bunu takip etmenin sizi ne kadar etkili kılacağı oldukça tartışmalıdır.",
    originalPath: "/other-stuff/pci-dss",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Bunu takip etmenin sizi ne kadar etkili kılacağı oldukça tartışmalıdır.</p>
<p class="mb-4"><a href="https://www.pcisecuritystandards.org/documents/Effective-Daily-Log-Monitoring-Guidance.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.pcisecuritystandards.org/documents/Effective-Daily-Log-Monitoring-Guidance.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.pcisecuritystandards.org/documents/Effective-Daily-Log-Monitoring-Guidance.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.pcisecuritystandards.org/documents/Effective-Daily-Log-Monitoring-Guidance.pdf</a></p>
`
  },
  "work-in-a-soc-finding-a-job-interviews-reverse-questions": {
    slug: "work-in-a-soc-finding-a-job-interviews-reverse-questions",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Ters Sorular",
    description: "Görüşmecinize sormanız gereken sorular:",
    originalPath: "/work-in-a-soc/finding-a-job/interviews/reverse-questions",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Görüşmecinize sormanız gereken sorular:</p>
<p class="mb-4"><a href="https://twitter.com/lilykonings" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Lily Konings &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Lily Konings'in yöneticilere yönelik soruları</p>
<p class="mb-4"><a href="https://twitter.com/lilykonings/status/1484598087494496258" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/lilykonings/status/1484598087494496258 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/lilykonings/status/1484598087494496258" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/lilykonings/status/1484598087494496258</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Geliştirici röportajlarına yönelik ama yine de faydalı</p>
<p class="mb-4"><a href="https://github.com/viraptor/reverse-interview/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/viraptor/reverse-interview/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/viraptor/reverse-interview/" target="_blank" class="text-blue-400 hover:underline">https://github.com/viraptor/reverse-interview/</a></p>
<p class="mb-4"><a href="https://twitter.com/jadecarsonxo" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Yeşim Carson &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Jade Carson'dan mükemmel bir konu</p>
<p class="mb-4"><a href="https://twitter.com/jadecarsonxo/status/1233801790086426626" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/jadecarsonxo/status/1233801790086426626 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/jadecarsonxo/status/1233801790086426626" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/jadecarsonxo/status/1233801790086426626</a></p>
`
  },
  "soc-threat-modelling": {
    slug: "soc-threat-modelling",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "Tehdit Modellemesi",
    description: "Gönye ATT&CK, CI/CD ortamlarını iş parçacığı modellemeye yönelik uyumlu yaklaşım",
    originalPath: "/soc/threat-modelling",
    htmlContent: `<h3 class="text-lg font-bold mt-6 mb-3 text-white">CI/CD</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Gönye ATT&CK, CI/CD ortamlarını iş parçacığı modellemeye yönelik uyumlu yaklaşım</p>
<p class="mb-4"><a href="https://github.com/rung/threat-matrix-cicd" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/rung/threat-matrix-cicd &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/rung/threat-matrix-cicd" target="_blank" class="text-blue-400 hover:underline">https://github.com/rung/threat-matrix-cicd</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Bulut</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Tehdit Modelleme S3</p>
<p class="mb-4"><a href="https://github.com/trustoncloud/threatmodel-for-aws-s3" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/trustoncloud/threatmodel-for-aws-s3 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/trustoncloud/threatmodel-for-aws-s3" target="_blank" class="text-blue-400 hover:underline">https://github.com/trustoncloud/threatmodel-for-aws-s3</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Tehdit Aktörleri</h3>
<p class="text-slate-400 mb-5 leading-relaxed">STIX'in tehdit aktörü yetenek tanımları. Tehdit modelinizi buna göre kalibre etmek faydalıdır.</p>
<p class="mb-4"><a href="https://docs.oasis-open.org/cti/stix/v2.1/csprd01/stix-v2.1-csprd01.html#_Toc16070817" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.oasis-open.org/cti/stix/v2.1/csprd01/stix-v2.1-csprd01.html#_Toc16070817 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.oasis-open.org/cti/stix/v2.1/csprd01/stix-v2.1-csprd01.html#_Toc16070817" target="_blank" class="text-blue-400 hover:underline">https://docs.oasis-open.org/cti/stix/v2.1/csprd01/stix-v2.1-csprd01.html#_Toc16070817</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Takımlama</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Tehdit modelleri oluşturmak için görsel araç</p>
<p class="mb-4"><a href="https://online.visual-paradigm.com/diagrams/features/threat-modeling-tool/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://online.visual-paradigm.com/diagrams/features/threat-modeling-tool/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://online.visual-paradigm.com/diagrams/features/threat-modeling-tool/" target="_blank" class="text-blue-400 hover:underline">https://online.visual-paradigm.com/diagrams/features/threat-modeling-tool/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Rehber</h3>
<p class="text-slate-400 mb-5 leading-relaxed">FIRST'ün tehdit modelleme kılavuzu</p>
<p class="mb-4"><a href="https://www.first.org/global/sigs/cti/curriculum/threat-modelling" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.first.org/global/sigs/cti/curriculum/threat-modelling &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.first.org/global/sigs/cti/curriculum/threat-modelling" target="_blank" class="text-blue-400 hover:underline">https://www.first.org/global/sigs/cti/curriculum/threat-modelling</a></p>
`
  },
  "soc-soc-analyst-tools-malware-analysis": {
    slug: "soc-soc-analyst-tools-malware-analysis",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "Kötü Amaçlı Yazılım Analizi",
    description: "Mandiant'ın PE dosyalarının statik analizine yönelik aracı",
    originalPath: "/soc/soc-analyst-tools/malware-analysis",
    htmlContent: `<h3 class="text-lg font-bold mt-6 mb-3 text-white">Statik PE Analizi</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Mandiant'ın PE dosyalarının statik analizine yönelik aracı</p>
<p class="mb-4"><a href="https://github.com/mandiant/capa" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/mandiant/capa &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/mandiant/capa" target="_blank" class="text-blue-400 hover:underline">https://github.com/mandiant/capa</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Çok kullanışlı PE stüdyosu</p>
<p class="mb-4"><a href="https://www.winitor.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.winitor.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.winitor.com/" target="_blank" class="text-blue-400 hover:underline">https://www.winitor.com/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Korumalı alanlar</h3>
<p class="mb-4"><a href="https://tria.ge/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://tria.ge/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://tria.ge/" target="_blank" class="text-blue-400 hover:underline">https://tria.ge/</a></p>
<p class="mb-4"><a href="https://twitter.com/lennyzeltser" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Lenny Zeltser &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Lenny Zeltser çevrimiçi sanal alanların güncellenmiş bir listesini tutuyor</p>
<p class="mb-4"><a href="https://zeltser.com/automated-malware-analysis/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://zeltser.com/automated-malware-analysis/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://zeltser.com/automated-malware-analysis/" target="_blank" class="text-blue-400 hover:underline">https://zeltser.com/automated-malware-analysis/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Kötü amaçlı URL'ler</h3>
<p class="mb-4"><a href="https://zeltser.com/lookup-malicious-websites/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://zeltser.com/lookup-malicious-websites/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://zeltser.com/lookup-malicious-websites/" target="_blank" class="text-blue-400 hover:underline">https://zeltser.com/lookup-malicious-websites/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bir URL'yi güvenle açın ve sonucu yakalayın</p>
<p class="mb-4"><a href="https://lookyloo.circl.lu/capture" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://lookyloo.circl.lu/capture &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://lookyloo.circl.lu/capture" target="_blank" class="text-blue-400 hover:underline">https://lookyloo.circl.lu/capture</a></p>
`
  },
  "other-stuff-mitre-attck": {
    slug: "other-stuff-mitre-attck",
    category: "other-stuff",
    categoryTr: "Sıkılaştırma & Diğer",
    title: "GÖNYE ATT&CK",
    description: "NIST'ten Gönye ATT&CK'ye",
    originalPath: "/other-stuff/mitre-attck",
    htmlContent: `<p class="mb-4"><a href="https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">NIST &rarr;</a></p>
<p class="mb-4"><a href="https://attack.mitre.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Gönye ATT&CK &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NIST'ten Gönye ATT&CK'ye</p>
<p class="mb-4"><a href="https://github.com/center-for-threat-informed-defense/attack-control-framework-mappings" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/center-for-threat-informed-defense/attack-control-framework-mappings &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/center-for-threat-informed-defense/attack-control-framework-mappings" target="_blank" class="text-blue-400 hover:underline">https://github.com/center-for-threat-informed-defense/attack-control-framework-mappings</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CISA'nın MITRE ATT&CK Haritalaması İçin En İyi Uygulamaları</p>
<p class="mb-4"><a href="https://us-cert.cisa.gov/sites/default/files/publications/Best%20Practices%20for%20MITRE%20ATTCK%20Mapping.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://us-cert.cisa.gov/sites/default/files/publications/Best%20Practices%20for%20MITRE%20ATTCK%20Mapping.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://us-cert.cisa.gov/sites/default/files/publications/Best%20Practices%20for%20MITRE%20ATTCK%20Mapping.pdf" target="_blank" class="text-blue-400 hover:underline">https://us-cert.cisa.gov/sites/default/files/publications/Best%20Practices%20for%20MITRE%20ATTCK%20Mapping.pdf</a></p>
<p class="mb-4"><a href="https://www.microsoft.com/en-gb/microsoft-365/excel" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">excel &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bu, Excel'e ve MITRE ATT&CK'ye olan iki büyük aşkımı bir algılama kapsamı e-tablosunda birleştiriyor. Tüm aile için eğlence vb.</p>
<p class="mb-4"><a href="https://github.com/RealityNet/attack-coverage" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/RealityNet/attack-coverage &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/RealityNet/attack-coverage" target="_blank" class="text-blue-400 hover:underline">https://github.com/RealityNet/attack-coverage</a></p>
`
  },
  "logging-sysmon": {
    slug: "logging-sysmon",
    category: "logging",
    categoryTr: "Log Yönetimi & Analiz",
    title: "Sismon",
    description: "Bu yapılandırma iyi bir başlangıç ​​noktasıdır. SwiftOnSecurity yapılandırmasından çatallanmıştır",
    originalPath: "/logging/sysmon",
    htmlContent: `<p class="mb-4"><a href="https://twitter.com/SwiftOnSecurity" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">SwiftOnSecurity &rarr;</a></p>
<p class="mb-4"><a href="https://github.com/SwiftOnSecurity/sysmon-config" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">yapılandırma &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bu yapılandırma iyi bir başlangıç ​​noktasıdır. SwiftOnSecurity yapılandırmasından çatallanmıştır</p>
<p class="mb-4"><a href="https://github.com/Neo23x0/sysmon-config" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Neo23x0/sysmon-config &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Neo23x0/sysmon-config" target="_blank" class="text-blue-400 hover:underline">https://github.com/Neo23x0/sysmon-config</a></p>
<p class="mb-4"><a href="https://twitter.com/olafhartong" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Olag Hartong &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Olag Hartong'un Sysmon Hile Sayfası</p>
<p class="mb-4"><a href="https://github.com/olafhartong/sysmon-cheatsheet" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/olafhartong/sysmon-cheatsheet &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/olafhartong/sysmon-cheatsheet" target="_blank" class="text-blue-400 hover:underline">https://github.com/olafhartong/sysmon-cheatsheet</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve modüler yapılandırma</p>
<p class="mb-4"><a href="https://github.com/olafhartong/sysmon-modular" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/olafhartong/sysmon-modular &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/olafhartong/sysmon-modular" target="_blank" class="text-blue-400 hover:underline">https://github.com/olafhartong/sysmon-modular</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">TrustedSec Sysinternals Sysmon Topluluk Kılavuzu</p>
<p class="mb-4"><a href="https://github.com/trustedsec/SysmonCommunityGuide" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/trustedsec/SysmonCommunityGuide &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/trustedsec/SysmonCommunityGuide" target="_blank" class="text-blue-400 hover:underline">https://github.com/trustedsec/SysmonCommunityGuide</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sysmon için yardımcı programlar</p>
<p class="mb-4"><a href="https://github.com/nshalabi/SysmonTools" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/nshalabi/SysmonTools &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/nshalabi/SysmonTools" target="_blank" class="text-blue-400 hover:underline">https://github.com/nshalabi/SysmonTools</a></p>
`
  },
  "incident-response": {
    slug: "incident-response",
    category: "incident-response",
    categoryTr: "Olay Müdahale (IR)",
    title: "Olay Müdahalesi",
    description: "Ayrıca bkz. Başucu Kitapları",
    originalPath: "/incident-response",
    htmlContent: `<p class="mb-4"><a href="/soc/playbooks" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Başucu Kitapları &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ayrıca bkz. Başucu Kitapları</p>
<p class="text-slate-400 mb-5 leading-relaxed">MITRE ATT&CK'ye benzer bir tarzda gerçekleştirilecek Yİ eylemlerinin eylemlerinin bir çerçevesinin oluşturulması. Çok faydalı.</p>
<p class="mb-4"><a href="https://atc-project.github.io/atc-react/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://atc-project.github.io/atc-react/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://atc-project.github.io/atc-react/" target="_blank" class="text-blue-400 hover:underline">https://atc-project.github.io/atc-react/</a></p>
<p class="mb-4"><a href="https://atc-project.github.io/react-navigator/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://atc-project.github.io/react-navigator/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://atc-project.github.io/react-navigator/" target="_blank" class="text-blue-400 hover:underline">https://atc-project.github.io/react-navigator/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Güvenlik analistlerine ve DFIR ekiplerine yardımcı olmayı amaçlayan, güvenlik olaylarına müdahaleye yönelik seçilmiş araç ve kaynak listesi.</p>
<p class="mb-4"><a href="https://github.com/meirwah/awesome-incident-response" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/meirwah/awesome-incident-response &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/meirwah/awesome-incident-response" target="_blank" class="text-blue-400 hover:underline">https://github.com/meirwah/awesome-incident-response</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">İhtiyaçların Olay Müdahale Hiyerarşisi. Bol miktarda siyah kahve ve fast food olmamasına rağmen çok iyi.</p>
<p class="mb-4"><a href="https://github.com/swannman/ircapabilities" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/swannman/ircapabilities &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/swannman/ircapabilities" target="_blank" class="text-blue-400 hover:underline">https://github.com/swannman/ircapabilities</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">PagerDuty IR belgelerini açık kaynak olarak kullandı</p>
<p class="mb-4"><a href="https://www.pagerduty.com/blog/incident-response-documentation/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.pagerduty.com/blog/incident-response-documentation/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.pagerduty.com/blog/incident-response-documentation/" target="_blank" class="text-blue-400 hover:underline">https://www.pagerduty.com/blog/incident-response-documentation/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kendi IR planınızı oluşturun</p>
<p class="mb-4"><a href="https://cydea.tools/ir-plan/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://cydea.tools/ir-plan/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://cydea.tools/ir-plan/" target="_blank" class="text-blue-400 hover:underline">https://cydea.tools/ir-plan/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ENISA'nın GPG'si</p>
<p class="mb-4"><a href="https://www.enisa.europa.eu/publications/good-practice-guide-for-incident-management" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.enisa.europa.eu/publications/good-practice-guide-for-incident-management &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.enisa.europa.eu/publications/good-practice-guide-for-incident-management" target="_blank" class="text-blue-400 hover:underline">https://www.enisa.europa.eu/publications/good-practice-guide-for-incident-management</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NIST'in kılavuzu</p>
<p class="mb-4"><a href="https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-61r2.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-61r2.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-61r2.pdf" target="_blank" class="text-blue-400 hover:underline">https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-61r2.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Harika DFIR'ın kaynakları faydalıdır</p>
<p class="mb-4"><a href="https://awesomedfir.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://awesomedfir.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://awesomedfir.com/" target="_blank" class="text-blue-400 hover:underline">https://awesomedfir.com/</a></p>
<p class="mb-4"><a href="https://twitter.com/joshlemon" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Josh Limon &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Josh Lemon'un ortak DFIR çerçeveleri</p>
<p class="mb-4"><a href="https://github.com/joshlemon/DFIR-Reference-Frameworks" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/joshlemon/DFIR-Reference-Frameworks &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/joshlemon/DFIR-Reference-Frameworks" target="_blank" class="text-blue-400 hover:underline">https://github.com/joshlemon/DFIR-Reference-Frameworks</a></p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Şiddet</h2>
<p class="text-slate-400 mb-5 leading-relaxed">Olayın ciddiyetinin değerlendirilmesi ve sınıflandırılması, kaynakların önceliklendirilmesi açısından faydalıdır. Aşağıdaki tablo faydalıdır:</p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Raporlama</h2>
<p class="text-slate-400 mb-5 leading-relaxed">Olay Raporu Yazma</p>
<p class="mb-4"><a href="https://joshbrunty.github.io/2021/01/27/reporting.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://joshbrunty.github.io/2021/01/27/reporting.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://joshbrunty.github.io/2021/01/27/reporting.html" target="_blank" class="text-blue-400 hover:underline">https://joshbrunty.github.io/2021/01/27/reporting.html</a></p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">İyileşmek</h2>
<p class="text-slate-400 mb-5 leading-relaxed">AD'yi kurtarma</p>
<p class="mb-4"><a href="https://m365internals.com/2021/04/27/practical-compromise-recovery-guidance-for-active-directory/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://m365internals.com/2021/04/27/practical-compromise-recovery-guidance-for-active-directory/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://m365internals.com/2021/04/27/practical-compromise-recovery-guidance-for-active-directory/" target="_blank" class="text-blue-400 hover:underline">https://m365internals.com/2021/04/27/practical-compromise-recovery-guidance-for-active-directory/</a></p>
`
  },
  "detection-use-cases-use-case-sets": {
    slug: "detection-use-cases-use-case-sets",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Kullanım Senaryosu Setleri",
    description: "Ayrıca buradaki teknolojiye özel setlere bakın",
    originalPath: "/detection-use-cases/use-case-sets",
    htmlContent: `<p class="mb-4"><a href="/detection-use-cases/siem-specific-detections" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Burada &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ayrıca buradaki teknolojiye özel setlere bakın</p>
<p class="text-slate-400 mb-5 leading-relaxed">MITRE'nin Siber Analitik Havuzu ve D3FEND projesi</p>
<p class="mb-4"><a href="https://car.mitre.org/analytics/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://car.mitre.org/analytics/ &rarr;</a></p>
<p class="mb-4"><a href="https://d3fend.mitre.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://d3fend.mitre.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://car.mitre.org/analytics/ and https://d3fend.mitre.org/" target="_blank" class="text-blue-400 hover:underline">https://car.mitre.org/analytics/ and https://d3fend.mitre.org/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Red Canary'nin en sık gözlemlenen ATT&CK teknikleri ve bunların nasıl tespit edileceği hakkındaki raporu. Çok çok faydalı.</p>
<p class="mb-4"><a href="https://resource.redcanary.com/rs/003-YRU-314/images/2021-Threat-Detection-Report.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://resource.redcanary.com/rs/003-YRU-314/images/2021-Threat-Detection-Report.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://resource.redcanary.com/rs/003-YRU-314/images/2021-Threat-Detection-Report.pdf" target="_blank" class="text-blue-400 hover:underline">https://resource.redcanary.com/rs/003-YRU-314/images/2021-Threat-Detection-Report.pdf</a></p>
<p class="mb-4"><a href="https://resource.redcanary.com/rs/003-YRU-314/images/2022_ThreatDetectionReport_RedCanary.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://resource.redcanary.com/rs/003-YRU-314/images/2022_ThreatDetectionReport_RedCanary.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://resource.redcanary.com/rs/003-YRU-314/images/2022_ThreatDetectionReport_RedCanary.pdf" target="_blank" class="text-blue-400 hover:underline">https://resource.redcanary.com/rs/003-YRU-314/images/2022_ThreatDetectionReport_RedCanary.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Biraz eski ama yine de kullanışlı.</p>
<p class="mb-4"><a href="https://github.com/jhainly/det3ct-the-att-ck/blob/master/use%20case%20library.xlsx" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/jhainly/det3ct-the-att-ck/blob/master/use%20case%20library.xlsx &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/jhainly/det3ct-the-att-ck/blob/master/use%20case%20library.xlsx" target="_blank" class="text-blue-400 hover:underline">https://github.com/jhainly/det3ct-the-att-ck/blob/master/use%20case%20library.xlsx</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">TI raporlarından TTP'leri çıkarmak ve bunları tespit kurallarına dönüştürmek için ilginç bir proje</p>
<p class="mb-4"><a href="https://github.com/vadim-hunter/Detection-Ideas-Rules" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/vadim-hunter/Detection-Ideas-Rules &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/vadim-hunter/Detection-Ideas-Rules" target="_blank" class="text-blue-400 hover:underline">https://github.com/vadim-hunter/Detection-Ideas-Rules</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Loginsoft'un kuralları. Güvenlik açıklarından yararlanılmasını tespit etmeye yönelik kurallara özellikle odaklanma</p>
<p class="mb-4"><a href="https://github.com/Loginsoft-Research/detection-rules" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Loginsoft-Research/detection-rules &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Loginsoft-Research/detection-rules" target="_blank" class="text-blue-400 hover:underline">https://github.com/Loginsoft-Research/detection-rules</a></p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Sigma</h2>
<p class="mb-4"><a href="https://github.com/SigmaHQ" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Sigma &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sigma'nın tespit kuralları</p>
<p class="mb-4"><a href="https://github.com/SigmaHQ/sigma/tree/master/rules" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/SigmaHQ/sigma/tree/master/rules &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/SigmaHQ/sigma/tree/master/rules" target="_blank" class="text-blue-400 hover:underline">https://github.com/SigmaHQ/sigma/tree/master/rules</a></p>
<p class="mb-4"><a href="https://twitter.com/Manu_De_Lucia" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Emanuele De Lucia &rarr;</a></p>
<p class="mb-4"><a href="http://cluster25.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Küme25 &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Cluster25'ten Emanuele De Lucia</p>
<p class="mb-4"><a href="https://github.com/edelucia/rules/tree/main/sigma" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/edelucia/rules/tree/main/sigma &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/edelucia/rules/tree/main/sigma" target="_blank" class="text-blue-400 hover:underline">https://github.com/edelucia/rules/tree/main/sigma</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sigma kuralları yukarıdaki gibidir ancak sigma'dan çeşitli SIEM ürünleri tarafından kullanılan formatlara dönüştürülür.</p>
<p class="mb-4"><a href="https://sigma.socprime.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://sigma.socprime.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://sigma.socprime.com/" target="_blank" class="text-blue-400 hover:underline">https://sigma.socprime.com/</a></p>
<p class="mb-4"><a href="/detection-use-cases/projects" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Projeler &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sigma hakkında daha fazla bilgi için ayrıca Projelere bakın.</p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Ticari Setler</h2>
<p class="text-slate-400 mb-5 leading-relaxed">SOC Prime - Bazı ücretsiz SIGMA kuralları içeren ücretli paketler</p>
<p class="mb-4"><a href="https://my.socprime.com/tdm/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://my.socprime.com/tdm/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://my.socprime.com/tdm/" target="_blank" class="text-blue-400 hover:underline">https://my.socprime.com/tdm/</a></p>
<h2 class="text-xl font-bold mt-8 mb-4 text-white border-b border-slate-900 pb-2">Satıcı Listeleri</h2>
<p class="text-slate-400 mb-5 leading-relaxed">Genellikle umutsuzdur ancak bu kötü bir fikir listesi değildir. Ölü olmasına rağmen Peerlyst'e bağlantılar.</p>
<p class="mb-4"><a href="https://surelog.medium.com/detecting-unusual-activities-using-a-next-generation-siem-use-cases-cb2e3a43b0ac" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://surelog.medium.com/detecting-unusual-activities-using-a-next-generation-siem-use-cases-cb2e3a43b0ac &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://surelog.medium.com/detecting-unusual-activities-using-a-next-generation-siem-use-cases-cb2e3a43b0ac" target="_blank" class="text-blue-400 hover:underline">https://surelog.medium.com/detecting-unusual-activities-using-a-next-generation-siem-use-cases-cb2e3a43b0ac</a></p>
`
  },
  "detection-use-cases-command-line": {
    slug: "detection-use-cases-command-line",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Komut Satırı",
    description: "Farklı araç ve yardımcı programların ortak \"kötü amaçlı\" komut satırı uygulamalarını belgelemeye yönelik ilginç bir proje.",
    originalPath: "/detection-use-cases/command-line",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Farklı araç ve yardımcı programların ortak "kötü amaçlı" komut satırı uygulamalarını belgelemeye yönelik ilginç bir proje.</p>
<p class="mb-4"><a href="https://github.com/3CORESec/MAL-CL" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/3CORESec/MAL-CL &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/3CORESec/MAL-CL" target="_blank" class="text-blue-400 hover:underline">https://github.com/3CORESec/MAL-CL</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Windows Komut Satırı Gizleme</p>
<p class="mb-4"><a href="https://www.wietzebeukema.nl/blog/windows-command-line-obfuscation" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.wietzebeukema.nl/blog/windows-command-line-obfuscation &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.wietzebeukema.nl/blog/windows-command-line-obfuscation" target="_blank" class="text-blue-400 hover:underline">https://www.wietzebeukema.nl/blog/windows-command-line-obfuscation</a></p>
`
  },
  "work-in-a-soc-learning-resources-osint": {
    slug: "work-in-a-soc-learning-resources-osint",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "OSINT",
    description: "İnanılmaz derecede harika açık kaynaklı istihbarat araçları ve kaynaklarının seçilmiş bir listesi",
    originalPath: "/work-in-a-soc/learning-resources/osint",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">İnanılmaz derecede harika açık kaynaklı istihbarat araçları ve kaynaklarının seçilmiş bir listesi</p>
<p class="mb-4"><a href="https://github.com/jivoi/awesome-osint" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/jivoi/awesome-osint &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/jivoi/awesome-osint" target="_blank" class="text-blue-400 hover:underline">https://github.com/jivoi/awesome-osint</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">İnanılmaz OSINT 'başlangıç' sayfası</p>
<p class="mb-4"><a href="https://start.me/p/rxRbpo/ti" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://start.me/p/rxRbpo/ti &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://start.me/p/rxRbpo/ti" target="_blank" class="text-blue-400 hover:underline">https://start.me/p/rxRbpo/ti</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Google</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Dorklar</p>
<p class="mb-4"><a href="https://dorksearch.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://dorksearch.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://dorksearch.com/" target="_blank" class="text-blue-400 hover:underline">https://dorksearch.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve dosyalar</p>
<p class="mb-4"><a href="https://cartographia.github.io/FilePhish/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://cartographia.github.io/FilePhish/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://cartographia.github.io/FilePhish/" target="_blank" class="text-blue-400 hover:underline">https://cartographia.github.io/FilePhish/</a></p>
`
  },
  "work-in-a-soc-learning-resources-attack-techniques": {
    slug: "work-in-a-soc-learning-resources-attack-techniques",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Saldırı Teknikleri",
    description: "'Fantastik Windows Oturum Açma türleri ve Kimlik Bilgilerinin Nerede Bulunacağı' Saldırganlar Windows'tan kimlik bilgilerini nasıl aktarabilir?",
    originalPath: "/work-in-a-soc/learning-resources/attack-techniques",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">'Fantastik Windows Oturum Açma türleri ve Kimlik Bilgilerinin Nerede Bulunacağı' Saldırganlar Windows'tan kimlik bilgilerini nasıl aktarabilir?</p>
<p class="mb-4"><a href="https://www.alteredsecurity.com/post/fantastic-windows-logon-types-and-where-to-find-credentials-in-them" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.alteredsecurity.com/post/fantastic-windows-logon-types-and-where-to-find-credentials-in-them &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.alteredsecurity.com/post/fantastic-windows-logon-types-and-where-to-find-credentials-in-them" target="_blank" class="text-blue-400 hover:underline">https://www.alteredsecurity.com/post/fantastic-windows-logon-types-and-where-to-find-credentials-in-them</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Saldırgan Güvenlik Hile Sayfası</p>
<p class="mb-4"><a href="https://cheatsheet.haax.fr/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://cheatsheet.haax.fr/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://cheatsheet.haax.fr/" target="_blank" class="text-blue-400 hover:underline">https://cheatsheet.haax.fr/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Yanal Hareketi Anlamak</p>
<p class="mb-4"><a href="https://attl4s.github.io/assets/pdf/Understanding_Windows_Lateral_Movements.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://attl4s.github.io/assets/pdf/Understanding_Windows_Lateral_Movements.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://attl4s.github.io/assets/pdf/Understanding_Windows_Lateral_Movements.pdf" target="_blank" class="text-blue-400 hover:underline">https://attl4s.github.io/assets/pdf/Understanding_Windows_Lateral_Movements.pdf</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Aktif Dizin</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Aktif Dizin</p>
<p class="mb-4"><a href="https://zer1t0.gitlab.io/posts/attacking_ad/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://zer1t0.gitlab.io/posts/attacking_ad/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://zer1t0.gitlab.io/posts/attacking_ad/" target="_blank" class="text-blue-400 hover:underline">https://zer1t0.gitlab.io/posts/attacking_ad/</a></p>
<p class="mb-4"><a href="https://cybersecuritynews.com/active-directory-checklist/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://cybersecuritynews.com/active-directory-checklist/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://cybersecuritynews.com/active-directory-checklist/" target="_blank" class="text-blue-400 hover:underline">https://cybersecuritynews.com/active-directory-checklist/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">AD'ye saldırmanın yollarının zihin haritası</p>
<p class="mb-4"><a href="https://www.xmind.net/m/5dypm8" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.xmind.net/m/5dypm8 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.xmind.net/m/5dypm8" target="_blank" class="text-blue-400 hover:underline">https://www.xmind.net/m/5dypm8</a></p>
`
  },
  "detection-use-cases-windows-use-cases": {
    slug: "detection-use-cases-windows-use-cases",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Windows Kullanım Durumları",
    description: "Arazide Yaşamak İkili Dosyalar ve Komut Dosyaları.",
    originalPath: "/detection-use-cases/windows-use-cases",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Arazide Yaşamak İkili Dosyalar ve Komut Dosyaları.</p>
<p class="mb-4"><a href="https://lolbas-project.github.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://lolbas-project.github.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://lolbas-project.github.io/" target="_blank" class="text-blue-400 hover:underline">https://lolbas-project.github.io/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve LOLBİNS'i avlamanın neden bu kadar faydalı olduğu</p>
<p class="mb-4"><a href="https://nasbench.medium.com/why-hunting-for-lolbins-is-one-of-the-best-bets-e5e58e1619c2" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://nasbench.medium.com/why-hunting-for-lolbins-is-one-of-the-best-bets-e5e58e1619c2 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://nasbench.medium.com/why-hunting-for-lolbins-is-one-of-the-best-bets-e5e58e1619c2" target="_blank" class="text-blue-400 hover:underline">https://nasbench.medium.com/why-hunting-for-lolbins-is-one-of-the-best-bets-e5e58e1619c2</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">URL, bir Windows uç noktasının konuştuğu ve nedeni</p>
<p class="mb-4"><a href="https://learn.microsoft.com/en-gb/windows/privacy/manage-windows-11-endpoints" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://learn.microsoft.com/en-gb/windows/privacy/manage-windows-11-endpoints &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://learn.microsoft.com/en-gb/windows/privacy/manage-windows-11-endpoints" target="_blank" class="text-blue-400 hover:underline">https://learn.microsoft.com/en-gb/windows/privacy/manage-windows-11-endpoints</a></p>
<p class="mb-4"><a href="https://learn.microsoft.com/en-gb/windows/privacy/manage-windows-21h2-endpoints" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://learn.microsoft.com/en-gb/windows/privacy/manage-windows-21h2-endpoints &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://learn.microsoft.com/en-gb/windows/privacy/manage-windows-21h2-endpoints" target="_blank" class="text-blue-400 hover:underline">https://learn.microsoft.com/en-gb/windows/privacy/manage-windows-21h2-endpoints</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Gönye ATT&CK ile eşlenen MSRPC'nin kötüye kullanılması</p>
<p class="mb-4"><a href="https://github.com/jsecurity101/MSRPC-to-ATTACK" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/jsecurity101/MSRPC-to-ATTACK &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/jsecurity101/MSRPC-to-ATTACK" target="_blank" class="text-blue-400 hover:underline">https://github.com/jsecurity101/MSRPC-to-ATTACK</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Belirsiz Windows Olay Günlüklerinde Adli İyilik Bulma</p>
<p class="mb-4"><a href="https://nasbench.medium.com/finding-forensic-goodness-in-obscure-windows-event-logs-60e978ea45a3" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://nasbench.medium.com/finding-forensic-goodness-in-obscure-windows-event-logs-60e978ea45a3 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://nasbench.medium.com/finding-forensic-goodness-in-obscure-windows-event-logs-60e978ea45a3" target="_blank" class="text-blue-400 hover:underline">https://nasbench.medium.com/finding-forensic-goodness-in-obscure-windows-event-logs-60e978ea45a3</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kötü amaçlı yazılımlar tarafından yaygın olarak kullanılan Windows API çağrıları</p>
<p class="mb-4"><a href="https://malapi.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://malapi.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://malapi.io/" target="_blank" class="text-blue-400 hover:underline">https://malapi.io/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sistem Erişim Kontrol Listeleriyle Windows Uç Nokta Güvenliğini Tespit Etme.</p>
<p class="mb-4"><a href="https://medium.com/@cryps1s/detecting-windows-endpoint-compromise-with-sacls-cd748e10950" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/@cryps1s/detecting-windows-endpoint-compromise-with-sacls-cd748e10950 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/@cryps1s/detecting-windows-endpoint-compromise-with-sacls-cd748e10950" target="_blank" class="text-blue-400 hover:underline">https://medium.com/@cryps1s/detecting-windows-endpoint-compromise-with-sacls-cd748e10950</a></p>
<p class="mb-4"><a href="https://github.com/OTRF/Set-AuditRule" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/OTRF/Set-AuditRule &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/OTRF/Set-AuditRule" target="_blank" class="text-blue-400 hover:underline">https://github.com/OTRF/Set-AuditRule</a></p>
`
  },
  "detection-use-cases-cloud-office-365": {
    slug: "detection-use-cases-cloud-office-365",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Ofis 365",
    description: "O365 altyapısını izlemeye yönelik faydalı kılavuz",
    originalPath: "/detection-use-cases/cloud/office-365",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">O365 altyapısını izlemeye yönelik faydalı kılavuz</p>
<p class="mb-4"><a href="https://medium.com/falconforce/reducing-your-office-365-attack-surface-99830a654d0" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/falconforce/reducing-your-office-365-attack-surface-99830a654d0 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/falconforce/reducing-your-office-365-attack-surface-99830a654d0" target="_blank" class="text-blue-400 hover:underline">https://medium.com/falconforce/reducing-your-office-365-attack-surface-99830a654d0</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CISA'nın "Microsoft Bulut Ortamlarında Uzlaşma Sonrası Tehdit Etkinliğini Algılama" kılavuzu</p>
<p class="mb-4"><a href="https://us-cert.cisa.gov/ncas/alerts/aa21-008a" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://us-cert.cisa.gov/ncas/alerts/aa21-008a &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://us-cert.cisa.gov/ncas/alerts/aa21-008a" target="_blank" class="text-blue-400 hover:underline">https://us-cert.cisa.gov/ncas/alerts/aa21-008a</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">O365 günlüğünün korkunç karmaşasına yönelik kullanışlı bir rehber</p>
<p class="mb-4"><a href="https://thecloudtechnologist.com/2021/10/15/everything-you-wanted-to-know-about-security-and-audit-logging-in-office-365" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://thecloudtechnologist.com/2021/10/15/everything-you-wanted-to-know-about-security-and-audit-logging-in-office-365 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://thecloudtechnologist.com/2021/10/15/everything-you-wanted-to-know-about-security-and-audit-logging-in-office-365" target="_blank" class="text-blue-400 hover:underline">https://thecloudtechnologist.com/2021/10/15/everything-you-wanted-to-know-about-security-and-audit-logging-in-office-365</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Golden SAML saldırısının tespiti</p>
<p class="mb-4"><a href="https://www.inversecos.com/2021/09/backdooring-office-365-and-active.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.inversecos.com/2021/09/backdooring-office-365-and-active.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.inversecos.com/2021/09/backdooring-office-365-and-active.html" target="_blank" class="text-blue-400 hover:underline">https://www.inversecos.com/2021/09/backdooring-office-365-and-active.html</a></p>
`
  },
  "detection-use-cases-kubernetes": {
    slug: "detection-use-cases-kubernetes",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Kubernet'ler",
    description: "NCC'nin Kuberenetes kümelerinde ayrıcalık artışını tespit etme kılavuzu",
    originalPath: "/detection-use-cases/kubernetes",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">NCC'nin Kuberenetes kümelerinde ayrıcalık artışını tespit etme kılavuzu</p>
<p class="mb-4"><a href="https://research.nccgroup.com/2021/11/10/detection-engineering-for-kubernetes-clusters/#part2-detection-engineering" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://research.nccgroup.com/2021/11/10/detection-engineering-for-kubernetes-clusters/#part2-detection-engineering &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://research.nccgroup.com/2021/11/10/detection-engineering-for-kubernetes-clusters/#part2-detection-engineering" target="_blank" class="text-blue-400 hover:underline">https://research.nccgroup.com/2021/11/10/detection-engineering-for-kubernetes-clusters/#part2-detection-engineering</a></p>
`
  },
  "soc-soc-papers-thinking": {
    slug: "soc-soc-papers-thinking",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "SOC Makaleleri / Düşünme",
    description: "Mitre'nin SOC \"Birinci Sınıf Siber Güvenlik Operasyon Merkezinin On Stratejisi\" hakkındaki 2014 makalesi",
    originalPath: "/soc/soc-papers-thinking",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Mitre'nin SOC "Birinci Sınıf Siber Güvenlik Operasyon Merkezinin On Stratejisi" hakkındaki 2014 makalesi</p>
<p class="mb-4"><a href="https://www.mitre.org/sites/default/files/publications/pr-13-1028-mitre-10-strategies-cyber-ops-center.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.mitre.org/sites/default/files/publications/pr-13-1028-mitre-10-strategies-cyber-ops-center.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.mitre.org/sites/default/files/publications/pr-13-1028-mitre-10-strategies-cyber-ops-center.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.mitre.org/sites/default/files/publications/pr-13-1028-mitre-10-strategies-cyber-ops-center.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve güncellenmiş 2022 makalesi "Birinci Sınıf Siber Güvenlik Operasyon Merkezinin 11 Stratejisi"</p>
<p class="mb-4"><a href="https://www.mitre.org/sites/default/files/publications/11-strategies-of-a-world-class-cybersecurity-operations-center.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.mitre.org/sites/default/files/publications/11-strategies-of-a-world-class-cybersecurity-operations-center.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.mitre.org/sites/default/files/publications/11-strategies-of-a-world-class-cybersecurity-operations-center.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.mitre.org/sites/default/files/publications/11-strategies-of-a-world-class-cybersecurity-operations-center.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Birleşik Krallık NCSC'nin SOC satın alma kılavuzu</p>
<p class="mb-4"><a href="https://www.ncsc.gov.uk/guidance/security-operations-centre-soc-buyers-guide" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ncsc.gov.uk/guidance/security-operations-centre-soc-buyers-guide &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ncsc.gov.uk/guidance/security-operations-centre-soc-buyers-guide" target="_blank" class="text-blue-400 hover:underline">https://www.ncsc.gov.uk/guidance/security-operations-centre-soc-buyers-guide</a></p>
<p class="mb-4"><a href="https://mobile.twitter.com/anton_chuvakin" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Anton Çuvakin &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Google Cloud Security'den Anton Chuvakin'in blogunda pek çok faydalı fikir var</p>
<p class="mb-4"><a href="https://medium.com/anton-on-security" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/anton-on-security &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/anton-on-security" target="_blank" class="text-blue-400 hover:underline">https://medium.com/anton-on-security</a></p>
<p class="mb-4"><a href="https://twitter.com/sechubb" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">John Hubbard &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Erdemli Döngüler: Uzun Vadeli Başarı için SOC'yi Yeniden Düşünmek, John Hubbard</p>
<p class="mb-4"><a href="https://www.youtube.com/watch?v=1NUjT-0yQjg" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.youtube.com/watch?v=1NUjT-0yQjg &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.youtube.com/watch?v=1NUjT-0yQjg" target="_blank" class="text-blue-400 hover:underline">https://www.youtube.com/watch?v=1NUjT-0yQjg</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CREST belgesinin büyük bir hayranı değilim. YMMV.</p>
<p class="mb-4"><a href="https://www.crest-approved.org/wp-content/uploads/Cyber-Security-Monitoring-Guide.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.crest-approved.org/wp-content/uploads/Cyber-Security-Monitoring-Guide.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.crest-approved.org/wp-content/uploads/Cyber-Security-Monitoring-Guide.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.crest-approved.org/wp-content/uploads/Cyber-Security-Monitoring-Guide.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Gartner'ın 'Yönetilen Tespit ve Yanıt Hizmetleri için Pazar Kılavuzu'</p>
<p class="mb-4"><a href="https://www.gartner.com/doc/reprints?id=1-27QJQAMI&ct=211026&st=sb" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.gartner.com/doc/reprints?id=1-27QJQAMI&ct=211026&st=sb &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.gartner.com/doc/reprints?id=1-27QJQAMI&ct=211026&st=sb" target="_blank" class="text-blue-400 hover:underline">https://www.gartner.com/doc/reprints?id=1-27QJQAMI&ct=211026&st=sb</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Google'ın Otonom Güvenlik Operasyonları</p>
<p class="mb-4"><a href="https://services.google.com/fh/files/misc/googlecloud_autonomicsecurityoperations_soc10x.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://services.google.com/fh/files/misc/googlecloud_autonomicsecurityoperations_soc10x.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://services.google.com/fh/files/misc/googlecloud_autonomicsecurityoperations_soc10x.pdf" target="_blank" class="text-blue-400 hover:underline">https://services.google.com/fh/files/misc/googlecloud_autonomicsecurityoperations_soc10x.pdf</a></p>
`
  },
  "soc-soc-metrics": {
    slug: "soc-soc-metrics",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "SOC Metrikleri",
    description: "Doğruyu bulmak zor ama bunu faydalı buldum",
    originalPath: "/soc/soc-metrics",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Doğruyu bulmak zor ama bunu faydalı buldum</p>
<p class="mb-4"><a href="https://www.first.org/resources/papers/conf2019/Public__SOC-Metrics-for-FIRST-v07-002-.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.first.org/resources/papers/conf2019/Public__SOC-Metrics-for-FIRST-v07-002-.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.first.org/resources/papers/conf2019/Public__SOC-Metrics-for-FIRST-v07-002-.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.first.org/resources/papers/conf2019/Public__SOC-Metrics-for-FIRST-v07-002-.pdf</a></p>
<p class="mb-4"><a href="https://www.first.org/resources/papers/metrics-sig/SOC-Metrics-Webinar-for-FIRST-Metrics-SIG-v08a.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.first.org/resources/papers/metrics-sig/SOC-Metrics-Webinar-for-FIRST-Metrics-SIG-v08a.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.first.org/resources/papers/metrics-sig/SOC-Metrics-Webinar-for-FIRST-Metrics-SIG-v08a.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.first.org/resources/papers/metrics-sig/SOC-Metrics-Webinar-for-FIRST-Metrics-SIG-v08a.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Olay Müdahalesinde KPI'ların Rolü"</p>
<p class="mb-4"><a href="https://www.darkreading.com/vulnerabilities-threats/the-role-of-kpis-in-incident-response" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.darkreading.com/vulnerabilities-threats/the-role-of-kpis-in-incident-response &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.darkreading.com/vulnerabilities-threats/the-role-of-kpis-in-incident-response" target="_blank" class="text-blue-400 hover:underline">https://www.darkreading.com/vulnerabilities-threats/the-role-of-kpis-in-incident-response</a></p>
<p class="mb-4"><a href="https://twitter.com/jhencinski" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Jon Hencinski &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Jon Hencinski'nin SOC ölçümleri hakkındaki görüşleri okumaya değer.</p>
<p class="mb-4"><a href="https://expel.com/blog/performance-metrics-measuring-soc-efficiency/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://expel.com/blog/performance-metrics-measuring-soc-efficiency/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://expel.com/blog/performance-metrics-measuring-soc-efficiency/" target="_blank" class="text-blue-400 hover:underline">https://expel.com/blog/performance-metrics-measuring-soc-efficiency/</a></p>
<p class="mb-4"><a href="https://expel.com/blog/performance-metrics-keeping-things-under-control/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://expel.com/blog/performance-metrics-keeping-things-under-control/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://expel.com/blog/performance-metrics-keeping-things-under-control/" target="_blank" class="text-blue-400 hover:underline">https://expel.com/blog/performance-metrics-keeping-things-under-control/</a></p>
<p class="mb-4"><a href="https://expel.com/blog/performance-metrics-part-3-success-stories/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://expel.com/blog/performance-metrics-part-3-success-stories/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://expel.com/blog/performance-metrics-part-3-success-stories/" target="_blank" class="text-blue-400 hover:underline">https://expel.com/blog/performance-metrics-part-3-success-stories/</a></p>
<p class="mb-4"><a href="https://expel.com/blog/how-to-measure-soc-quality/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://expel.com/blog/how-to-measure-soc-quality/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://expel.com/blog/how-to-measure-soc-quality/" target="_blank" class="text-blue-400 hover:underline">https://expel.com/blog/how-to-measure-soc-quality/</a></p>
<p class="mb-4"><a href="https://twitter.com/flyingmonkey127" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Joe Köstebek &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Red Canary'den Joe Mole'un bu blog yazısı çok güzel</p>
<p class="mb-4"><a href="https://redcanary.com/blog/measuring-reporting-security-operations-program/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://redcanary.com/blog/measuring-reporting-security-operations-program/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://redcanary.com/blog/measuring-reporting-security-operations-program/" target="_blank" class="text-blue-400 hover:underline">https://redcanary.com/blog/measuring-reporting-security-operations-program/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Rapid7'nin algılama etkinliğini ölçme yaklaşımı</p>
<p class="mb-4"><a href="https://www.rapid7.com/blog/post/2020/05/15/moving-toward-a-better-signature-metric-in-socs-detection-efficacy/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.rapid7.com/blog/post/2020/05/15/moving-toward-a-better-signature-metric-in-socs-detection-efficacy/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.rapid7.com/blog/post/2020/05/15/moving-toward-a-better-signature-metric-in-socs-detection-efficacy/" target="_blank" class="text-blue-400 hover:underline">https://www.rapid7.com/blog/post/2020/05/15/moving-toward-a-better-signature-metric-in-socs-detection-efficacy/</a></p>
`
  },
  "work-in-a-soc-learning-resources-web": {
    slug: "work-in-a-soc-learning-resources-web",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "ağ",
    description: "OWASP'ın ilk 10'u",
    originalPath: "/work-in-a-soc/learning-resources/web",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">OWASP'ın ilk 10'u</p>
<p class="mb-4"><a href="https://owasp.org/www-project-top-ten/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://owasp.org/www-project-top-ten/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://owasp.org/www-project-top-ten/" target="_blank" class="text-blue-400 hover:underline">https://owasp.org/www-project-top-ten/</a></p>
<p class="mb-4"><a href="https://portswigger.net/burp" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Geğirmek &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Portswigger'ın (Burp'la ünlü) ücretsiz çevrimiçi web güvenliği kursları</p>
<p class="mb-4"><a href="https://portswigger.net/web-security" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://portswigger.net/web-security &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://portswigger.net/web-security" target="_blank" class="text-blue-400 hover:underline">https://portswigger.net/web-security</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Tehdit avcılığı için simüle edilmiş web günlükleri oluşturun</p>
<p class="mb-4"><a href="https://github.com/punk-security/pwnspoof" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/punk-security/pwnspoof &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/punk-security/pwnspoof" target="_blank" class="text-blue-400 hover:underline">https://github.com/punk-security/pwnspoof</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">HTTP Güvenlik Başlıkları ve yaptıkları şey</p>
<p class="mb-4"><a href="https://nullsweep.com/http-security-headers-a-complete-guide/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://nullsweep.com/http-security-headers-a-complete-guide/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://nullsweep.com/http-security-headers-a-complete-guide/" target="_blank" class="text-blue-400 hover:underline">https://nullsweep.com/http-security-headers-a-complete-guide/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NCC'nin "Finansal Yönelimli Web Uygulamalarındaki Genel Güvenlik Sorunları" kılavuzu</p>
<p class="mb-4"><a href="https://www.nccgroup.com/globalassets/our-research/uk/images/common_security_issues_in_financially-orientated_web.pdf.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.nccgroup.com/globalassets/our-research/uk/images/common_security_issues_in_financially-orientated_web.pdf.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.nccgroup.com/globalassets/our-research/uk/images/common_security_issues_in_financially-orientated_web.pdf.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.nccgroup.com/globalassets/our-research/uk/images/common_security_issues_in_financially-orientated_web.pdf.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Web Uygulama Güvenliği için faydalı yüklerin ve atlamaların listesi</p>
<p class="mb-4"><a href="https://github.com/swisskyrepo/PayloadsAllTheThings" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/swisskyrepo/PayloadsAllTheThings &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/swisskyrepo/PayloadsAllTheThings" target="_blank" class="text-blue-400 hover:underline">https://github.com/swisskyrepo/PayloadsAllTheThings</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">GÖNYE CAPEC</p>
<p class="mb-4"><a href="http://capec.mitre.org/index.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">http://capec.mitre.org/index.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="http://capec.mitre.org/index.html" target="_blank" class="text-blue-400 hover:underline">http://capec.mitre.org/index.html</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">SQL</h3>
<p class="text-slate-400 mb-5 leading-relaxed">SQL cinayetinin gizemiyle SQL öğrenin</p>
<p class="mb-4"><a href="https://mystery.knightlab.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://mystery.knightlab.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://mystery.knightlab.com/" target="_blank" class="text-blue-400 hover:underline">https://mystery.knightlab.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">SQL sorgu oluşturucu</p>
<p class="mb-4"><a href="http://sqlfiddle.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">http://sqlfiddle.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="http://sqlfiddle.com/" target="_blank" class="text-blue-400 hover:underline">http://sqlfiddle.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">SQL Enjeksiyonu</p>
<p class="mb-4"><a href="https://pentestmonkey.net/cheat-sheet/sql-injection/mysql-sql-injection-cheat-sheet" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://pentestmonkey.net/cheat-sheet/sql-injection/mysql-sql-injection-cheat-sheet &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://pentestmonkey.net/cheat-sheet/sql-injection/mysql-sql-injection-cheat-sheet" target="_blank" class="text-blue-400 hover:underline">https://pentestmonkey.net/cheat-sheet/sql-injection/mysql-sql-injection-cheat-sheet</a></p>
<p class="mb-4"><a href="https://portswigger.net/web-security/sql-injection/cheat-sheet" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://portswigger.net/web-security/sql-injection/cheat-sheet &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://portswigger.net/web-security/sql-injection/cheat-sheet" target="_blank" class="text-blue-400 hover:underline">https://portswigger.net/web-security/sql-injection/cheat-sheet</a></p>
<p class="mb-4"><a href="https://www.websec.ca/kb/sql_injection" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.websec.ca/kb/sql_injection &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.websec.ca/kb/sql_injection" target="_blank" class="text-blue-400 hover:underline">https://www.websec.ca/kb/sql_injection</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">XSS</h3>
<p class="text-slate-400 mb-5 leading-relaxed">XSS verileri</p>
<p class="mb-4"><a href="https://github.com/payloadbox/xss-payload-list" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/payloadbox/xss-payload-list &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/payloadbox/xss-payload-list" target="_blank" class="text-blue-400 hover:underline">https://github.com/payloadbox/xss-payload-list</a></p>
`
  },
  "work-in-a-soc-finding-a-job-cv": {
    slug: "work-in-a-soc-finding-a-job-cv",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Özgeçmiş",
    description: "CV akışı CV'nizin çok yararlı bir oluşturucusudur",
    originalPath: "/work-in-a-soc/finding-a-job/cv",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">CV akışı CV'nizin çok yararlı bir oluşturucusudur</p>
<p class="mb-4"><a href="https://flowcv.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://flowcv.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://flowcv.io/" target="_blank" class="text-blue-400 hover:underline">https://flowcv.io/</a></p>
`
  },
  "detection-use-cases-use-case-thinking": {
    slug: "detection-use-cases-use-case-thinking",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Örnek Olay Düşünmeyi Kullanın",
    description: "Çevik Gelişim",
    originalPath: "/detection-use-cases/use-case-thinking",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Çevik Gelişim</p>
<p class="mb-4"><a href="https://opstune.com/2017/10/15/siem-use-cases-development-workflow-agile-all-the-things/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://opstune.com/2017/10/15/siem-use-cases-development-workflow-agile-all-the-things/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://opstune.com/2017/10/15/siem-use-cases-development-workflow-agile-all-the-things/" target="_blank" class="text-blue-400 hover:underline">https://opstune.com/2017/10/15/siem-use-cases-development-workflow-agile-all-the-things/</a></p>
<p class="mb-4"><a href="https://medium.com/anton-on-security" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Anton Çuvakin &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">'Algılama Zordur' ve 'Tehdit Algılaması Nasıl Daha İyi Hale Getirilir?' Google Cloud Security'den büyük Anton Chuvakin tarafından</p>
<p class="mb-4"><a href="https://medium.com/anton-on-security/why-is-threat-detection-hard-42aa479a197f" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/anton-on-security/why-is-threat-detection-hard-42aa479a197f &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/anton-on-security/why-is-threat-detection-hard-42aa479a197f" target="_blank" class="text-blue-400 hover:underline">https://medium.com/anton-on-security/why-is-threat-detection-hard-42aa479a197f</a></p>
<p class="mb-4"><a href="https://medium.com/anton-on-security/how-to-make-threat-detection-better-c38f1758b842" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/anton-on-security/how-to-make-threat-detection-better-c38f1758b842 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/anton-on-security/how-to-make-threat-detection-better-c38f1758b842" target="_blank" class="text-blue-400 hover:underline">https://medium.com/anton-on-security/how-to-make-threat-detection-better-c38f1758b842</a></p>
<p class="mb-4"><a href="https://twitter.com/chrissanders88" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Chris Sanders &rarr;</a></p>
<p class="mb-4"><a href="https://twitter.com/jhencinski" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Jon Hencinski &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Chris Sanders ve Jon Hencinski'den iki harika Twitter mesajı</p>
<p class="mb-4"><a href="https://twitter.com/chrissanders88/status/1456982558890250245" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/chrissanders88/status/1456982558890250245 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/chrissanders88/status/1456982558890250245" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/chrissanders88/status/1456982558890250245</a></p>
<p class="mb-4"><a href="https://twitter.com/jhencinski/status/1456974938712121347" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/jhencinski/status/1456974938712121347 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/jhencinski/status/1456974938712121347" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/jhencinski/status/1456974938712121347</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Savunmacının Zihniyeti</p>
<p class="mb-4"><a href="https://medium.com/@johnlatwc/defenders-mindset-319854d10aaa" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/@johnlatwc/defenders-mindset-319854d10aaa &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/@johnlatwc/defenders-mindset-319854d10aaa" target="_blank" class="text-blue-400 hover:underline">https://medium.com/@johnlatwc/defenders-mindset-319854d10aaa</a></p>
<p class="mb-4"><a href="https://twitter.com/d3sre" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Desiree Sacher-Boldewin &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Desiree Sacher-Boldewin'in kullanım senaryoları üzerine yaptığı bu çalışma okumaya değer</p>
<p class="mb-4"><a href="https://github.com/d3sre/Use_Case_Applicability" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/d3sre/Use_Case_Applicability &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/d3sre/Use_Case_Applicability" target="_blank" class="text-blue-400 hover:underline">https://github.com/d3sre/Use_Case_Applicability</a></p>
<p class="mb-4"><a href="https://github.com/d3sre/Use_Case_Applicability/blob/master/UseCaseApplicability-Paper.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/d3sre/Use_Case_Applicability/blob/master/UseCaseApplicability-Paper.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/d3sre/Use_Case_Applicability/blob/master/UseCaseApplicability-Paper.pdf" target="_blank" class="text-blue-400 hover:underline">https://github.com/d3sre/Use_Case_Applicability/blob/master/UseCaseApplicability-Paper.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bazı yararlı bağlantılar içeren yararlı kılavuz</p>
<p class="mb-4"><a href="https://blueteamblog.com/siem-use-case-writing-guide" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://blueteamblog.com/siem-use-case-writing-guide &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://blueteamblog.com/siem-use-case-writing-guide" target="_blank" class="text-blue-400 hover:underline">https://blueteamblog.com/siem-use-case-writing-guide</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Palantir'in yaklaşımı</p>
<p class="mb-4"><a href="https://blog.palantir.com/alerting-and-detection-strategy-framework-52dc33722df2" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://blog.palantir.com/alerting-and-detection-strategy-framework-52dc33722df2 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://blog.palantir.com/alerting-and-detection-strategy-framework-52dc33722df2" target="_blank" class="text-blue-400 hover:underline">https://blog.palantir.com/alerting-and-detection-strategy-framework-52dc33722df2</a></p>
`
  },
  "work-in-a-soc-learning-resources-labs-training": {
    slug: "work-in-a-soc-learning-resources-labs-training",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Laboratuvarlar / Eğitim",
    description: "Eksiksiz bir tespit laboratuvarı başlatın",
    originalPath: "/work-in-a-soc/learning-resources/labs-training",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Eksiksiz bir tespit laboratuvarı başlatın</p>
<p class="mb-4"><a href="https://github.com/clong/detectionlab" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/clong/detectionlab &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/clong/detectionlab" target="_blank" class="text-blue-400 hover:underline">https://github.com/clong/detectionlab</a></p>
<p class="mb-4"><a href="https://www.detectionlab.network/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.detectionlab.network/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.detectionlab.network/" target="_blank" class="text-blue-400 hover:underline">https://www.detectionlab.network/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Kurumsal Düzeyde Ev Laboratuvarı Oluşturmak için Harika Kaynaklar ve Eğitim Listesi"</p>
<p class="mb-4"><a href="https://github.com/aboutsecurity/blueteam_homelabs" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/aboutsecurity/blueteam_homelabs &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/aboutsecurity/blueteam_homelabs" target="_blank" class="text-blue-400 hover:underline">https://github.com/aboutsecurity/blueteam_homelabs</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Ücretsiz / Ticari</h3>
<p class="text-slate-400 mb-5 leading-relaxed">SOC analist eğitimi için ücretsiz kaynaklar ve ücretli planların karışımı</p>
<p class="mb-4"><a href="https://blueteamlabs.online/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://blueteamlabs.online/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://blueteamlabs.online/" target="_blank" class="text-blue-400 hover:underline">https://blueteamlabs.online/</a></p>
<p class="mb-4"><a href="https://letsdefend.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://letsdefend.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://letsdefend.io/" target="_blank" class="text-blue-400 hover:underline">https://letsdefend.io/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">John Strand'ın eğitimi iyi kabul ediliyor ve "ödeyebildiğiniz kadar ödeyin"</p>
<p class="mb-4"><a href="https://www.antisyphontraining.com/soc-core-skills-w-john-strand/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.antisyphontraining.com/soc-core-skills-w-john-strand/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.antisyphontraining.com/soc-core-skills-w-john-strand/" target="_blank" class="text-blue-400 hover:underline">https://www.antisyphontraining.com/soc-core-skills-w-john-strand/</a></p>
`
  },
  "other-stuff-hardening": {
    slug: "other-stuff-hardening",
    category: "other-stuff",
    categoryTr: "Sıkılaştırma & Diğer",
    title: "Sertleşme",
    description: "Müthiş Güvenlik Güçlendirmesi",
    originalPath: "/other-stuff/hardening",
    htmlContent: `<p class="mb-4"><a href="#h.58dhou7lhvjk" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Rehber &rarr;</a></p>
<p class="mb-4"><a href="#h.1rea94vaf2ie" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Microsoft Bulut &rarr;</a></p>
<p class="mb-4"><a href="#h.47c003uxelj5" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">elma iOS'u &rarr;</a></p>
<p class="mb-4"><a href="#h.ci9fas8dlwgk" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">BDT Karşılaştırmaları &rarr;</a></p>
<p class="mb-4"><a href="#h.wih9bnvmem0h" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Google Workspaces (G Suite) &rarr;</a></p>
<p class="mb-4"><a href="#h.kwm9vbhuar4d" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Yıkıcı Saldırılar / Silecekler &rarr;</a></p>
<p class="mb-4"><a href="#h.oo9fth1m1rri" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Aktif Dizin &rarr;</a></p>
<p class="mb-4"><a href="#h.vodm0hcuhzzm" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Citrix Xenapp / Xendesktop &rarr;</a></p>
<p class="mb-4"><a href="#h.jhuejf17k18j" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Ağ &rarr;</a></p>
<p class="mb-4"><a href="#h.xq7dci57r97j" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Kubernet'ler &rarr;</a></p>
<p class="mb-4"><a href="#h.x997k3or4efi" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">İstismar Azaltımları &rarr;</a></p>
<p class="mb-4"><a href="#h.ob8l3v3ryh66" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Github &rarr;</a></p>
<p class="mb-4"><a href="#h.6et1yt47qlpm" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Windows &rarr;</a></p>
<p class="mb-4"><a href="#h.mbkkl79y8iaq" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Linux &rarr;</a></p>
<p class="mb-4"><a href="#h.7m4lpy4idfgx" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Sıfır Güven &rarr;</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Rehber</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Müthiş Güvenlik Güçlendirmesi</p>
<p class="mb-4"><a href="https://github.com/decalage2/awesome-security-hardening" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/decalage2/awesome-security-hardening &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/decalage2/awesome-security-hardening" target="_blank" class="text-blue-400 hover:underline">https://github.com/decalage2/awesome-security-hardening</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NCSC'nin Platform Güvenliği Kılavuzu</p>
<p class="mb-4"><a href="https://www.ncsc.gov.uk/collection/device-security-guidance" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ncsc.gov.uk/collection/device-security-guidance &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ncsc.gov.uk/collection/device-security-guidance" target="_blank" class="text-blue-400 hover:underline">https://www.ncsc.gov.uk/collection/device-security-guidance</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Microsoft Bulut</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Başarılı bir şirket içi saldırının ardından bulut altyapısının tehlikeye girmesini önlemeye yönelik Microsoft kılavuzu</p>
<p class="mb-4"><a href="https://techcommunity.microsoft.com/t5/azure-active-directory-identity/protecting-microsoft-365-from-on-premises-attacks/ba-p/1751754" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://techcommunity.microsoft.com/t5/azure-active-directory-identity/protecting-microsoft-365-from-on-premises-attacks/ba-p/1751754 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://techcommunity.microsoft.com/t5/azure-active-directory-identity/protecting-microsoft-365-from-on-premises-attacks/ba-p/1751754" target="_blank" class="text-blue-400 hover:underline">https://techcommunity.microsoft.com/t5/azure-active-directory-identity/protecting-microsoft-365-from-on-premises-attacks/ba-p/1751754</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">E3'ten E5'e (yıkıcı derecede pahalı) yükseltmenin sunduğu ek Güvenlik işlevlerine ilişkin inanılmaz derecede yararlı kılavuz</p>
<p class="mb-4"><a href="https://frankmcg.com/2020/09/purchased-microsoft-365-e5-now-what/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://frankmcg.com/2020/09/purchased-microsoft-365-e5-now-what/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://frankmcg.com/2020/09/purchased-microsoft-365-e5-now-what/" target="_blank" class="text-blue-400 hover:underline">https://frankmcg.com/2020/09/purchased-microsoft-365-e5-now-what/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Azure AD'de hibrit ve bulut dağıtımları için ayrıcalıklı erişimin güvenliğini sağlama</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/azure/active-directory/roles/security-planning#ensure-separate-user-accounts-and-mail-forwarding-for-global-administrator-accounts" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/azure/active-directory/roles/security-planning#ensure-separate-user-accounts-and-mail-forwarding-for-global-administrator-accounts &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/azure/active-directory/roles/security-planning#ensure-separate-user-accounts-and-mail-forwarding-for-global-administrator-accounts" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/azure/active-directory/roles/security-planning#ensure-separate-user-accounts-and-mail-forwarding-for-global-administrator-accounts</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sertleştirme O365</p>
<p class="mb-4"><a href="https://medium.com/falconforce/reducing-your-office365-attack-surface-1073a4d46a7b" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/falconforce/reducing-your-office365-attack-surface-1073a4d46a7b &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/falconforce/reducing-your-office365-attack-surface-1073a4d46a7b" target="_blank" class="text-blue-400 hover:underline">https://medium.com/falconforce/reducing-your-office365-attack-surface-1073a4d46a7b</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">KOBİ olduğunuzda Office 365'i BEC'den koruyun</p>
<p class="mb-4"><a href="https://www.comae.com/posts/keep-office-365-safe-from-bec-when-you-are-an-sme/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.comae.com/posts/keep-office-365-safe-from-bec-when-you-are-an-sme/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.comae.com/posts/keep-office-365-safe-from-bec-when-you-are-an-sme/" target="_blank" class="text-blue-400 hover:underline">https://www.comae.com/posts/keep-office-365-safe-from-bec-when-you-are-an-sme/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">elma iOS'u</h3>
<p class="text-slate-400 mb-5 leading-relaxed">ASD'nin Apple iOS 14 sağlamlaştırma kılavuzu</p>
<p class="mb-4"><a href="https://www.cyber.gov.au/acsc/view-all-content/publications/security-configuration-guide-apple-ios-14-devices" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cyber.gov.au/acsc/view-all-content/publications/security-configuration-guide-apple-ios-14-devices &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cyber.gov.au/acsc/view-all-content/publications/security-configuration-guide-apple-ios-14-devices" target="_blank" class="text-blue-400 hover:underline">https://www.cyber.gov.au/acsc/view-all-content/publications/security-configuration-guide-apple-ios-14-devices</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">BDT Karşılaştırmaları</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Bunları ticari olarak kullanmak için ücretli bir lisansa ihtiyacınız var</p>
<p class="mb-4"><a href="https://www.cisecurity.org/cis-benchmarks/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cisecurity.org/cis-benchmarks/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cisecurity.org/cis-benchmarks/" target="_blank" class="text-blue-400 hover:underline">https://www.cisecurity.org/cis-benchmarks/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Google Workspaces (G Suite)</h3>
<p class="mb-4"><a href="https://fleetdm.com/handbook/security#google-workspace-security" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://fleetdm.com/handbook/security#google-workspace-security &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://fleetdm.com/handbook/security#google-workspace-security" target="_blank" class="text-blue-400 hover:underline">https://fleetdm.com/handbook/security#google-workspace-security</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Google'ın küçük ve büyük işletmelere yönelik kılavuzu</p>
<p class="mb-4"><a href="https://support.google.com/a/answer/9211704" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://support.google.com/a/answer/9211704 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://support.google.com/a/answer/9211704" target="_blank" class="text-blue-400 hover:underline">https://support.google.com/a/answer/9211704</a></p>
<p class="mb-4"><a href="https://support.google.com/a/answer/7587183" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://support.google.com/a/answer/7587183 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://support.google.com/a/answer/7587183" target="_blank" class="text-blue-400 hover:underline">https://support.google.com/a/answer/7587183</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Yıkıcı Saldırılar / Silecekler</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Mandiant'ın yıkıcı saldırılara/sileceklere karşı sertleşme rehberi.</p>
<p class="mb-4"><a href="https://www.mandiant.com/resources/protect-against-destructive-attacks" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.mandiant.com/resources/protect-against-destructive-attacks &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.mandiant.com/resources/protect-against-destructive-attacks" target="_blank" class="text-blue-400 hover:underline">https://www.mandiant.com/resources/protect-against-destructive-attacks</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Aktif Dizin</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Bloodhound AD'deki gizli ilişkilerin haritasını çıkarır ve Ransomulator bunu görselleştirir</p>
<p class="mb-4"><a href="https://bloodhound.readthedocs.io/en/latest/index.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://bloodhound.readthedocs.io/en/latest/index.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://bloodhound.readthedocs.io/en/latest/index.html" target="_blank" class="text-blue-400 hover:underline">https://bloodhound.readthedocs.io/en/latest/index.html</a></p>
<p class="mb-4"><a href="https://github.com/BloodHoundAD/BloodHound" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/BloodHoundAD/BloodHound &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/BloodHoundAD/BloodHound" target="_blank" class="text-blue-400 hover:underline">https://github.com/BloodHoundAD/BloodHound</a></p>
<p class="mb-4"><a href="https://github.com/zeronetworks/BloodHound-Tools/tree/main/Ransomulator" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/zeronetworks/BloodHound-Tools/tree/main/Ransomulator &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/zeronetworks/BloodHound-Tools/tree/main/Ransomulator" target="_blank" class="text-blue-400 hover:underline">https://github.com/zeronetworks/BloodHound-Tools/tree/main/Ransomulator</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Citrix Xenapp / Xendesktop</h3>
<p class="mb-4"><a href="https://www.citrix.com/content/dam/citrix/en_us/documents/products-solutions/system-hardening-for-xenapp-and-xendesktop.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.citrix.com/content/dam/citrix/en_us/documents/products-solutions/system-hardening-for-xenapp-and-xendesktop.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.citrix.com/content/dam/citrix/en_us/documents/products-solutions/system-hardening-for-xenapp-and-xendesktop.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.citrix.com/content/dam/citrix/en_us/documents/products-solutions/system-hardening-for-xenapp-and-xendesktop.pdf</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Ağ</h3>
<p class="text-slate-400 mb-5 leading-relaxed">NSA/CISA'nın ağ sağlamlaştırma kılavuzu. Biraz eski tarz ve Cisco'ya çok odaklanmış, bu yüzden YMMV</p>
<p class="mb-4"><a href="https://media.defense.gov/2022/Mar/01/2002947139/-1/-1/0/CTR_NSA_NETWORK_INFRASTRUCTURE_SECURITY_GUIDANCE_20220301.PDF" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://media.defense.gov/2022/Mar/01/2002947139/-1/-1/0/CTR_NSA_NETWORK_INFRASTRUCTURE_SECURITY_GUIDANCE_20220301.PDF &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://media.defense.gov/2022/Mar/01/2002947139/-1/-1/0/CTR_NSA_NETWORK_INFRASTRUCTURE_SECURITY_GUIDANCE_20220301.PDF" target="_blank" class="text-blue-400 hover:underline">https://media.defense.gov/2022/Mar/01/2002947139/-1/-1/0/CTR_NSA_NETWORK_INFRASTRUCTURE_SECURITY_GUIDANCE_20220301.PDF</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Kubernet'ler</h3>
<p class="text-slate-400 mb-5 leading-relaxed">NSA/CISA'nın Kubernetes sağlamlaştırma kılavuzu.</p>
<p class="mb-4"><a href="https://media.defense.gov/2021/Aug/03/2002820425/-1/-1/0/CTR_Kubernetes_Hardening_Guidance_1.1_20220315.PDF" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://media.defense.gov/2021/Aug/03/2002820425/-1/-1/0/CTR_Kubernetes_Hardening_Guidance_1.1_20220315.PDF &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://media.defense.gov/2021/Aug/03/2002820425/-1/-1/0/CTR_Kubernetes_Hardening_Guidance_1.1_20220315.PDF" target="_blank" class="text-blue-400 hover:underline">https://media.defense.gov/2021/Aug/03/2002820425/-1/-1/0/CTR_Kubernetes_Hardening_Guidance_1.1_20220315.PDF</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">İstismar Azaltımları</h3>
<p class="text-slate-400 mb-5 leading-relaxed">NCC'nin istismar azaltma kütüphanesi</p>
<p class="mb-4"><a href="https://github.com/nccgroup/exploit_mitigations" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/nccgroup/exploit_mitigations &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/nccgroup/exploit_mitigations" target="_blank" class="text-blue-400 hover:underline">https://github.com/nccgroup/exploit_mitigations</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Github</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Github'u güçlendirme kılavuzu. Birçok kuruluşun CI/CD işlem hatlarında kritik öneme sahiptir</p>
<p class="mb-4"><a href="https://alsmola.medium.com/securing-github-organizations-9c33c850638" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://alsmola.medium.com/securing-github-organizations-9c33c850638 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://alsmola.medium.com/securing-github-organizations-9c33c850638" target="_blank" class="text-blue-400 hover:underline">https://alsmola.medium.com/securing-github-organizations-9c33c850638</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Windows</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Microsoft'un Windows Güvenlik Yapılandırma Çerçevesi</p>
<p class="mb-4"><a href="https://github.com/microsoft/SecCon-Framework/blob/master/windows-security-configuration-framework.md" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/microsoft/SecCon-Framework/blob/master/windows-security-configuration-framework.md &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/microsoft/SecCon-Framework/blob/master/windows-security-configuration-framework.md" target="_blank" class="text-blue-400 hover:underline">https://github.com/microsoft/SecCon-Framework/blob/master/windows-security-configuration-framework.md</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">HardeningKitty, Windows'u sertleştirmek için kullanılan bir powershell betiğidir</p>
<p class="mb-4"><a href="https://github.com/0x6d69636b/windows_hardening" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/0x6d69636b/windows_hardening &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/0x6d69636b/windows_hardening" target="_blank" class="text-blue-400 hover:underline">https://github.com/0x6d69636b/windows_hardening</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Linux</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Mandiant'ın Linux Uç Nokta Güçlendirme rehberi</p>
<p class="mb-4"><a href="https://www.mandiant.com/sites/default/files/2022-03/wp-linux-endpoint-hardening.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.mandiant.com/sites/default/files/2022-03/wp-linux-endpoint-hardening.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.mandiant.com/sites/default/files/2022-03/wp-linux-endpoint-hardening.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.mandiant.com/sites/default/files/2022-03/wp-linux-endpoint-hardening.pdf</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Sıfır Güven</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Orijinal Google 'Beyondcorp' makalesi</p>
<p class="mb-4"><a href="https://research.google/pubs/pub43231/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://research.google/pubs/pub43231/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://research.google/pubs/pub43231/" target="_blank" class="text-blue-400 hover:underline">https://research.google/pubs/pub43231/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NSA'nın "Sıfır Güven Güvenlik Modelini Benimsetmek" başlıklı makalesi</p>
<p class="mb-4"><a href="https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZT_SECURITY_MODEL_UOO115131-21.PDF" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZT_SECURITY_MODEL_UOO115131-21.PDF &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZT_SECURITY_MODEL_UOO115131-21.PDF" target="_blank" class="text-blue-400 hover:underline">https://media.defense.gov/2021/Feb/25/2002588479/-1/-1/0/CSI_EMBRACING_ZT_SECURITY_MODEL_UOO115131-21.PDF</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Microsoft'un Sıfır Güven'e bakışı</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/security/zero-trust/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/security/zero-trust/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/security/zero-trust/" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/security/zero-trust/</a></p>
`
  },
  "detection-use-cases-cloud-azure": {
    slug: "detection-use-cases-cloud-azure",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Azure",
    description: "Azure'da Sentinel'in algılama kuralları.",
    originalPath: "/detection-use-cases/cloud/azure",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Azure'da Sentinel'in algılama kuralları.</p>
<p class="mb-4"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureActivity" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureActivity &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureActivity" target="_blank" class="text-blue-400 hover:underline">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureActivity</a></p>
<p class="mb-4"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureAppServices" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureAppServices &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureAppServices" target="_blank" class="text-blue-400 hover:underline">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureAppServices</a></p>
<p class="mb-4"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureDevOpsAuditing" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureDevOpsAuditing &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureDevOpsAuditing" target="_blank" class="text-blue-400 hover:underline">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureDevOpsAuditing</a></p>
<p class="mb-4"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureDiagnostics" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureDiagnostics &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureDiagnostics" target="_blank" class="text-blue-400 hover:underline">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureDiagnostics</a></p>
<p class="mb-4"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureFirewall" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureFirewall &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureFirewall" target="_blank" class="text-blue-400 hover:underline">https://github.com/Azure/Azure-Sentinel/tree/master/Detections/AzureFirewall</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Azure Active Directory Arka Kapıları Nasıl Tespit Edilir"</p>
<p class="mb-4"><a href="https://www.inversecos.com/2021/11/how-to-detect-azure-active-directory.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.inversecos.com/2021/11/how-to-detect-azure-active-directory.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.inversecos.com/2021/11/how-to-detect-azure-active-directory.html" target="_blank" class="text-blue-400 hover:underline">https://www.inversecos.com/2021/11/how-to-detect-azure-active-directory.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Breakglass hesaplarının kullanımını tespit etmek çok iyi bir uygulamadır</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/azure/active-directory/roles/security-emergency-access" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/azure/active-directory/roles/security-emergency-access &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/azure/active-directory/roles/security-emergency-access" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/azure/active-directory/roles/security-emergency-access</a></p>
`
  },
  "work-in-a-soc-learning-resources-crypto": {
    slug: "work-in-a-soc-learning-resources-crypto",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Kripto",
    description: "Açık Anahtar Altyapısı ile ilgili çok güzel ve net açıklamalar.",
    originalPath: "/work-in-a-soc/learning-resources/crypto",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Açık Anahtar Altyapısı ile ilgili çok güzel ve net açıklamalar.</p>
<p class="mb-4"><a href="https://www.cem.me/pki" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cem.me/pki &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cem.me/pki" target="_blank" class="text-blue-400 hover:underline">https://www.cem.me/pki</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">TLS 1.2 nasıl çalışır?</p>
<p class="mb-4"><a href="https://tls.ulfheim.net/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://tls.ulfheim.net/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://tls.ulfheim.net/" target="_blank" class="text-blue-400 hover:underline">https://tls.ulfheim.net/</a></p>
<p class="mb-4"><a href="http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html" target="_blank" class="text-blue-400 hover:underline">http://www.moserware.com/2009/06/first-few-milliseconds-of-https.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve TLS 1.3 için güncellendi</p>
<p class="mb-4"><a href="https://tls13.ulfheim.net/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://tls13.ulfheim.net/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://tls13.ulfheim.net/" target="_blank" class="text-blue-400 hover:underline">https://tls13.ulfheim.net/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Uygulamalı Kripto Sertleştirme</p>
<p class="mb-4"><a href="https://bettercrypto.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://bettercrypto.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://bettercrypto.org/" target="_blank" class="text-blue-400 hover:underline">https://bettercrypto.org/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CrypTool projesinin amacı herkeste kripto tekniklerine yönelik farkındalık ve ilgiyi artırmaktır.</p>
<p class="mb-4"><a href="https://www.cryptool.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cryptool.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cryptool.org/" target="_blank" class="text-blue-400 hover:underline">https://www.cryptool.org/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Anahtarı veya şifreyi bilmeden şifrelemelerin şifresini otomatik olarak çözün, kodlamaların kodunu çözün ve karmaları kırın"</p>
<p class="mb-4"><a href="https://github.com/Ciphey/Ciphey" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Ciphey/Ciphey &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Ciphey/Ciphey" target="_blank" class="text-blue-400 hover:underline">https://github.com/Ciphey/Ciphey</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Modern kriptografiyi öğrenmek için eğlenceli ve ücretsiz bir platform"</p>
<p class="mb-4"><a href="https://cryptohack.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://cryptohack.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://cryptohack.org/" target="_blank" class="text-blue-400 hover:underline">https://cryptohack.org/</a></p>
`
  },
  "other-stuff-bored-on-shift": {
    slug: "other-stuff-bored-on-shift",
    category: "other-stuff",
    categoryTr: "Sıkılaştırma & Diğer",
    title: "Vardiyada sıkıldım....",
    description: "Kullanım senaryolarını düşünmediğimde bunu yapıyorum",
    originalPath: "/other-stuff/bored-on-shift",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Kullanım senaryolarını düşünmediğimde bunu yapıyorum</p>
<p class="mb-4"><a href="https://perfectroastpotatoes.com" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://perfectroastpotatoes.com &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://perfectroastpotatoes.com" target="_blank" class="text-blue-400 hover:underline">https://perfectroastpotatoes.com</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Meşguliyet simülasyonu gerekiyorsa</p>
<p class="mb-4"><a href="https://busysimulator.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://busysimulator.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://busysimulator.com/" target="_blank" class="text-blue-400 hover:underline">https://busysimulator.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">İsmine rağmen iş için güvenli</p>
<p class="mb-4"><a href="https://bookshelfporn.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://bookshelfporn.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://bookshelfporn.com/" target="_blank" class="text-blue-400 hover:underline">https://bookshelfporn.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">İnternetin fiziksel gerçekliği büyüleyici</p>
<p class="mb-4"><a href="https://www.infrapedia.com/app" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.infrapedia.com/app &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.infrapedia.com/app" target="_blank" class="text-blue-400 hover:underline">https://www.infrapedia.com/app</a></p>
<p class="mb-4"><a href="https://openinframap.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://openinframap.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://openinframap.org/" target="_blank" class="text-blue-400 hover:underline">https://openinframap.org/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">TVTropes, kaçmanın zor olduğu bir tavşan deliğidir</p>
<p class="mb-4"><a href="https://tvtropes.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://tvtropes.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://tvtropes.org/" target="_blank" class="text-blue-400 hover:underline">https://tvtropes.org/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Tarayıcı içi Prince of Persia. Yine 1989'daki gibi korkunç bir şekilde dikenlerin üzerine düşüyorum...</p>
<p class="mb-4"><a href="https://princejs.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://princejs.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://princejs.com/" target="_blank" class="text-blue-400 hover:underline">https://princejs.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">O RLY kapak oluşturucu</p>
<p class="mb-4"><a href="https://dev.to/rly" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://dev.to/rly &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://dev.to/rly" target="_blank" class="text-blue-400 hover:underline">https://dev.to/rly</a></p>
<p class="mb-4"><a href="https://github.com/thepracticaldev/orly-full-res" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2Fthepracticaldev%2Forly-full-res&sa=D&sntz=1&usg=AOvVaw2DWPm5FEJoymiqinq7prhh &rarr;</a></p>
`
  },
  "incident-response-cloud": {
    slug: "incident-response-cloud",
    category: "incident-response",
    categoryTr: "Olay Müdahale (IR)",
    title: "Bulutta Olay Müdahalesi",
    description: "AWS'nin AWS'de IR kılavuzu",
    originalPath: "/incident-response/cloud",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">AWS'nin AWS'de IR kılavuzu</p>
<p class="mb-4"><a href="https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/aws-security-incident-response-guide.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/aws-security-incident-response-guide.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/aws-security-incident-response-guide.pdf" target="_blank" class="text-blue-400 hover:underline">https://docs.aws.amazon.com/whitepapers/latest/aws-security-incident-response-guide/aws-security-incident-response-guide.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">AWS'nin Otomatik Olay Müdahalesi ve Adli Bilim Çerçevesi</p>
<p class="mb-4"><a href="https://github.com/awslabs/aws-automated-incident-response-and-forensics" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/awslabs/aws-automated-incident-response-and-forensics &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/awslabs/aws-automated-incident-response-and-forensics" target="_blank" class="text-blue-400 hover:underline">https://github.com/awslabs/aws-automated-incident-response-and-forensics</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Microsoft Bulut Ortamında Olay Müdahalesi"</p>
<p class="mb-4"><a href="https://m365internals.com/2021/04/17/incident-response-in-a-microsoft-cloud-environment/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://m365internals.com/2021/04/17/incident-response-in-a-microsoft-cloud-environment/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://m365internals.com/2021/04/17/incident-response-in-a-microsoft-cloud-environment/" target="_blank" class="text-blue-400 hover:underline">https://m365internals.com/2021/04/17/incident-response-in-a-microsoft-cloud-environment/</a></p>
`
  },
  "work-in-a-soc-becoming-a-soc-analyst": {
    slug: "work-in-a-soc-becoming-a-soc-analyst",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "SOC analisti olmak",
    description: "Jay Jay Davey'in çalışma kılavuzu",
    originalPath: "/work-in-a-soc/becoming-a-soc-analyst",
    htmlContent: `<p class="mb-4"><a href="https://twitter.com/noxcyber" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Jay Jay &rarr;</a></p>
<p class="mb-4"><a href="https://uk.linkedin.com/in/biggingerhoneypot" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Davey &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Jay Jay Davey'in çalışma kılavuzu</p>
<p class="mb-4"><a href="https://biggingerhoneypot.notion.site/68fb84422c8b47118569f7585054a7d7?v=493a04e2c4024a899ba23dea337d7009" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://biggingerhoneypot.notion.site/68fb84422c8b47118569f7585054a7d7?v=493a04e2c4024a899ba23dea337d7009 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://biggingerhoneypot.notion.site/68fb84422c8b47118569f7585054a7d7?v=493a04e2c4024a899ba23dea337d7009" target="_blank" class="text-blue-400 hover:underline">https://biggingerhoneypot.notion.site/68fb84422c8b47118569f7585054a7d7?v=493a04e2c4024a899ba23dea337d7009</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve 'Siber Plana Giriş'</p>
<p class="mb-4"><a href="https://kb.cybermentordojo.com/knowledge-base/entry-to-cyber-blueprint/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://kb.cybermentordojo.com/knowledge-base/entry-to-cyber-blueprint/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://kb.cybermentordojo.com/knowledge-base/entry-to-cyber-blueprint/" target="_blank" class="text-blue-400 hover:underline">https://kb.cybermentordojo.com/knowledge-base/entry-to-cyber-blueprint/</a></p>
<p class="mb-4"><a href="https://www.cyberhuntingguide.net/stefan-waldvogel.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Stefan Waldvogel &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Stefan Waldvogel'in rehberi</p>
<p class="mb-4"><a href="https://www.cyberhuntingguide.net/soc-analyst-as-career.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cyberhuntingguide.net/soc-analyst-as-career.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cyberhuntingguide.net/soc-analyst-as-career.html" target="_blank" class="text-blue-400 hover:underline">https://www.cyberhuntingguide.net/soc-analyst-as-career.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Güvenlik çalışanlarının yaptığı inanılmaz çeşitlilikte şeyler</p>
<p class="mb-4"><a href="https://rafeeqrehman.com/2021/07/11/ciso-mindmap-2021-what-do-infosec-professionals-really-do/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://rafeeqrehman.com/2021/07/11/ciso-mindmap-2021-what-do-infosec-professionals-really-do/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://rafeeqrehman.com/2021/07/11/ciso-mindmap-2021-what-do-infosec-professionals-really-do/" target="_blank" class="text-blue-400 hover:underline">https://rafeeqrehman.com/2021/07/11/ciso-mindmap-2021-what-do-infosec-professionals-really-do/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Cyber ​​Mentor Dojo'ya katılın ve menti olarak kaydolun</p>
<p class="mb-4"><a href="https://app.cybermentordojo.com/signup" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://app.cybermentordojo.com/signup &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://app.cybermentordojo.com/signup" target="_blank" class="text-blue-400 hover:underline">https://app.cybermentordojo.com/signup</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CMD anlaşmazlığı aynı zamanda yararlı tavsiyelerle doludur</p>
<p class="mb-4"><a href="https://discord.gg/dtvukkHXHa" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://discord.gg/dtvukkHXHa &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://discord.gg/dtvukkHXHa" target="_blank" class="text-blue-400 hover:underline">https://discord.gg/dtvukkHXHa</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Siber İş Avcılığı Anlaşmazlığı gibi</p>
<p class="mb-4"><a href="https://discord.gg/nEFUUewtJT" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://discord.gg/nEFUUewtJT &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://discord.gg/nEFUUewtJT" target="_blank" class="text-blue-400 hover:underline">https://discord.gg/nEFUUewtJT</a></p>
`
  },
  "work-in-a-soc-learning-resources-cloud": {
    slug: "work-in-a-soc-learning-resources-cloud",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Bulut",
    description: "AWS'de çok sayıda eğitim mevcuttur.",
    originalPath: "/work-in-a-soc/learning-resources/cloud",
    htmlContent: `<h3 class="text-lg font-bold mt-6 mb-3 text-white">AWS</h3>
<p class="text-slate-400 mb-5 leading-relaxed">AWS'de çok sayıda eğitim mevcuttur.</p>
<p class="mb-4"><a href="https://d1.awsstatic.com/training-and-certification/ramp-up_guides/Ramp-Up_Guide_Security.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://d1.awsstatic.com/training-and-certification/ramp-up_guides/Ramp-Up_Guide_Security.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://d1.awsstatic.com/training-and-certification/ramp-up_guides/Ramp-Up_Guide_Security.pdf" target="_blank" class="text-blue-400 hover:underline">https://d1.awsstatic.com/training-and-certification/ramp-up_guides/Ramp-Up_Guide_Security.pdf</a></p>
<p class="mb-4"><a href="https://explore.skillbuilder.aws/learn" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://explore.skillbuilder.aws/learn &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://explore.skillbuilder.aws/learn" target="_blank" class="text-blue-400 hover:underline">https://explore.skillbuilder.aws/learn</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">AWS güvenlik kimlik bilgisi formatları kılavuzu</p>
<p class="mb-4"><a href="https://summitroute.com/blog/2018/06/20/aws_security_credential_formats/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://summitroute.com/blog/2018/06/20/aws_security_credential_formats/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://summitroute.com/blog/2018/06/20/aws_security_credential_formats/" target="_blank" class="text-blue-400 hover:underline">https://summitroute.com/blog/2018/06/20/aws_security_credential_formats/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Dürüst AWS sağlık durumu kontrol paneli</p>
<p class="mb-4"><a href="https://stop.lying.cloud/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://stop.lying.cloud/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://stop.lying.cloud/" target="_blank" class="text-blue-400 hover:underline">https://stop.lying.cloud/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Hangi bölgede hangi hizmetler mevcut? Şaşırtıcı derecede düzensiz</p>
<p class="mb-4"><a href="https://awsservices.info/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://awsservices.info/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://awsservices.info/" target="_blank" class="text-blue-400 hover:underline">https://awsservices.info/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">AWS hizmetlerinin diyagramları</p>
<p class="mb-4"><a href="https://www.awsgeek.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.awsgeek.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.awsgeek.com/" target="_blank" class="text-blue-400 hover:underline">https://www.awsgeek.com/</a></p>
`
  },
  "work-in-a-soc-learning-resources-siem": {
    slug: "work-in-a-soc-learning-resources-siem",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "SIEM / Günlük analitiği",
    description: "SIEM ürünleriyle ilgili deneyim kazanmanın hem açık kaynak hem de kurumsal ürünlerin 'ücretsiz' denemeleri için çeşitli yollar vardır.",
    originalPath: "/work-in-a-soc/learning-resources/siem",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">SIEM ürünleriyle ilgili deneyim kazanmanın hem açık kaynak hem de kurumsal ürünlerin 'ücretsiz' denemeleri için çeşitli yollar vardır.</p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Splunk</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Splunk çok pahalı bir kurumsal üründür ancak hem Cloud hem de prem sürümlerinde ücretsiz denemeler sunar.</p>
<p class="text-slate-400 mb-5 leading-relaxed">Bunun tam Kurumsal Güvenlik ürünü değil, günlük analizi ürünü olduğunu unutmayın; ancak 'Security Essentials' uygulamasını yükleyebilirsiniz.</p>
<p class="mb-4"><a href="https://www.splunk.com/en_us/download.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.splunk.com/en_us/download.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.splunk.com/en_us/download.html" target="_blank" class="text-blue-400 hover:underline">https://www.splunk.com/en_us/download.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ayrıca ücretsiz eğitim veriyorlar</p>
<p class="mb-4"><a href="https://www.splunk.com/en_us/training/free-courses/overview.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.splunk.com/en_us/training/free-courses/overview.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.splunk.com/en_us/training/free-courses/overview.html" target="_blank" class="text-blue-400 hover:underline">https://www.splunk.com/en_us/training/free-courses/overview.html</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Microsoft Sentinel</h3>
<p class="mb-4"><a href="/work-in-a-soc/learning-resources/windows-microsoft" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Burada &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Hem burada hem de aşağıda listelenen pek çok iyi eğitim mevcuttur</p>
<p class="mb-4"><a href="https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/become-a-microsoft-sentinel-ninja-the-complete-level-400/ba-p/1246310" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/become-a-microsoft-sentinel-ninja-the-complete-level-400/ba-p/1246310 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/become-a-microsoft-sentinel-ninja-the-complete-level-400/ba-p/1246310" target="_blank" class="text-blue-400 hover:underline">https://techcommunity.microsoft.com/t5/microsoft-sentinel-blog/become-a-microsoft-sentinel-ninja-the-complete-level-400/ba-p/1246310</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Elasticsearch</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Elastic yığını ücretsiz ve açık kaynaktır</p>
<p class="mb-4"><a href="https://www.elastic.co/downloads/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.elastic.co/downloads/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.elastic.co/downloads/" target="_blank" class="text-blue-400 hover:underline">https://www.elastic.co/downloads/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Qradar</h3>
<p class="text-slate-400 mb-5 leading-relaxed">IBM'in Qradar'ı bir SIEM olarak oldukça eski bir çözüm ancak piyasada çok sayıda devreye alma mevcut. 'Ücretsiz' bir Topluluk Sürümü sunuyorlar</p>
<p class="mb-4"><a href="https://www.ibm.com/community/qradar/ce/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ibm.com/community/qradar/ce/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ibm.com/community/qradar/ce/" target="_blank" class="text-blue-400 hover:underline">https://www.ibm.com/community/qradar/ce/</a></p>
`
  },
  "work-in-a-soc-learning-resources-youtube": {
    slug: "work-in-a-soc-learning-resources-youtube",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "youtube",
    description: "Çok sayıda iyi güvenlik içeriği. Bazı yararlı kanallar",
    originalPath: "/work-in-a-soc/learning-resources/youtube",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Çok sayıda iyi güvenlik içeriği. Bazı yararlı kanallar</p>
<p class="mb-4"><a href="https://www.youtube.com/c/ippsec/videos" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.youtube.com/c/ippsec/videos &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.youtube.com/c/ippsec/videos" target="_blank" class="text-blue-400 hover:underline">https://www.youtube.com/c/ippsec/videos</a></p>
<p class="mb-4"><a href="https://www.youtube.com/c/JohnHammond010" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.youtube.com/c/JohnHammond010 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.youtube.com/c/JohnHammond010" target="_blank" class="text-blue-400 hover:underline">https://www.youtube.com/c/JohnHammond010</a></p>
<p class="mb-4"><a href="https://www.youtube.com/c/SecHubb" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.youtube.com/c/SecHubb &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.youtube.com/c/SecHubb" target="_blank" class="text-blue-400 hover:underline">https://www.youtube.com/c/SecHubb</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Powershell</p>
<p class="mb-4"><a href="https://www.youtube.com/watch?v=UVUd9_k9C6A" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.youtube.com/watch?v=UVUd9_k9C6A &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.youtube.com/watch?v=UVUd9_k9C6A" target="_blank" class="text-blue-400 hover:underline">https://www.youtube.com/watch?v=UVUd9_k9C6A</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CCNA</p>
<p class="mb-4"><a href="https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ" target="_blank" class="text-blue-400 hover:underline">https://www.youtube.com/playlist?list=PLxbwE86jKRgMpuZuLBivzlM8s2Dk5lXBQ</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Herşey Güvenlik Operasyon Analisti Giriş Seviyesi - Siber Güvenlik İşi Size Göre mi?</p>
<p class="mb-4"><a href="https://www.youtube.com/watch?v=p9RsKDIGKvc" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.youtube.com/watch?v=p9RsKDIGKvc &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.youtube.com/watch?v=p9RsKDIGKvc" target="_blank" class="text-blue-400 hover:underline">https://www.youtube.com/watch?v=p9RsKDIGKvc</a></p>
`
  },
  "work-in-a-soc-learning-resources-windows-microsoft": {
    slug: "work-in-a-soc-learning-resources-windows-microsoft",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Windows / Microsoft",
    description: "Microsoft, geliştiriciler için bir korumalı alan sunar. Bu, test ve geliştirme amaçlı 90 günlük E5 lisanslarıyla birlikte gelir",
    originalPath: "/work-in-a-soc/learning-resources/windows-microsoft",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Microsoft, geliştiriciler için bir korumalı alan sunar. Bu, test ve geliştirme amaçlı 90 günlük E5 lisanslarıyla birlikte gelir</p>
<p class="mb-4"><a href="https://developer.microsoft.com/en-us/microsoft-365/dev-program" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://developer.microsoft.com/en-us/microsoft-365/dev-program &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://developer.microsoft.com/en-us/microsoft-365/dev-program" target="_blank" class="text-blue-400 hover:underline">https://developer.microsoft.com/en-us/microsoft-365/dev-program</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ayrıca güvenlik ürünleri için bir değerlendirme ortamı da oluşturabilirsiniz.</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/microsoft-365/security/defender/eval-create-eval-environment?view=o365-worldwide" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/microsoft-365/security/defender/eval-create-eval-environment?view=o365-worldwide &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/microsoft-365/security/defender/eval-create-eval-environment?view=o365-worldwide" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/microsoft-365/security/defender/eval-create-eval-environment?view=o365-worldwide</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Defender'ı keşif ve yanal hareketi tespit edecek şekilde ayarlamak için Microsoft Lab</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/defender-for-identity/playbook-lab-overview" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/defender-for-identity/playbook-lab-overview &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/defender-for-identity/playbook-lab-overview" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/defender-for-identity/playbook-lab-overview</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bu, Exam SC-200: Microsoft Güvenlik Operasyonları Analisti için kaynak sayfasıdır. Sınavın kendisi ücretsiz değildir ancak sınav için kendi kendine öğretilen eğitim materyalleri ücretsizdir.</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/learn/certifications/exams/sc-200" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/learn/certifications/exams/sc-200 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/learn/certifications/exams/sc-200" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/learn/certifications/exams/sc-200</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Güvenlik Mühendisi Olmak</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/learn/roles/security-engineer" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/learn/roles/security-engineer &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/learn/roles/security-engineer" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/learn/roles/security-engineer</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Yararlı Kaynaklar</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Her Windows komutu</p>
<p class="mb-4"><a href="https://www.microsoft.com/en-us/download/details.aspx?id=56846" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.microsoft.com/en-us/download/details.aspx?id=56846 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.microsoft.com/en-us/download/details.aspx?id=56846" target="_blank" class="text-blue-400 hover:underline">https://www.microsoft.com/en-us/download/details.aspx?id=56846</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Windows API çağrıları</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/windows/win32/apiindex/windows-api-list</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Microsoft'un güvenlik belgeleri</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/security/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/security/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/security/" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/security/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Dosya ekleri Outlook tarafından engellendi.</p>
<p class="mb-4"><a href="https://support.microsoft.com/en-us/office/blocked-attachments-in-outlook-434752e1-02d3-4e90-9124-8b81e49a8519" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://support.microsoft.com/en-us/office/blocked-attachments-in-outlook-434752e1-02d3-4e90-9124-8b81e49a8519 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://support.microsoft.com/en-us/office/blocked-attachments-in-outlook-434752e1-02d3-4e90-9124-8b81e49a8519" target="_blank" class="text-blue-400 hover:underline">https://support.microsoft.com/en-us/office/blocked-attachments-in-outlook-434752e1-02d3-4e90-9124-8b81e49a8519</a></p>
<p class="mb-4"><a href="https://twitter.com/stevesyfuhs" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Steve Syfuhs &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Steve Syfuhs'tan Windows'un bazı dahili güvenlik bileşenlerine ilişkin bir tur</p>
<p class="mb-4"><a href="https://syfuhs.net/a-bit-about-the-local-security-authority" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://syfuhs.net/a-bit-about-the-local-security-authority &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://syfuhs.net/a-bit-about-the-local-security-authority" target="_blank" class="text-blue-400 hover:underline">https://syfuhs.net/a-bit-about-the-local-security-authority</a></p>
<p class="mb-4"><a href="https://syfuhs.net/how-windows-defender-credential-guard-works" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://syfuhs.net/how-windows-defender-credential-guard-works &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://syfuhs.net/how-windows-defender-credential-guard-works" target="_blank" class="text-blue-400 hover:underline">https://syfuhs.net/how-windows-defender-credential-guard-works</a></p>
<p class="mb-4"><a href="https://syfuhs.net/how-authentication-works-when-you-use-remote-desktop" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://syfuhs.net/how-authentication-works-when-you-use-remote-desktop &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://syfuhs.net/how-authentication-works-when-you-use-remote-desktop" target="_blank" class="text-blue-400 hover:underline">https://syfuhs.net/how-authentication-works-when-you-use-remote-desktop</a></p>
<p class="mb-4"><a href="https://syfuhs.net/what-happens-when-you-type-your-password-into-windows" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://syfuhs.net/what-happens-when-you-type-your-password-into-windows &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://syfuhs.net/what-happens-when-you-type-your-password-into-windows" target="_blank" class="text-blue-400 hover:underline">https://syfuhs.net/what-happens-when-you-type-your-password-into-windows</a></p>
`
  },
  "detection-use-cases-yara": {
    slug: "detection-use-cases-yara",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "yara",
    description: "Birçok farklı saldırı türünü kapsayan geniş bir YARA deposu",
    originalPath: "/detection-use-cases/yara",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Birçok farklı saldırı türünü kapsayan geniş bir YARA deposu</p>
<p class="mb-4"><a href="https://github.com/Yara-Rules/rules" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Yara-Rules/rules &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Yara-Rules/rules" target="_blank" class="text-blue-400 hover:underline">https://github.com/Yara-Rules/rules</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Makalelerden ve olaylardan kaynaklanan eski ve yeni tehditleri izlemek için sürekli olarak güncellenen bir YARA kural deposu"</p>
<p class="mb-4"><a href="https://github.com/StrangerealIntel/Orion" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/StrangerealIntel/Orion &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/StrangerealIntel/Orion" target="_blank" class="text-blue-400 hover:underline">https://github.com/StrangerealIntel/Orion</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Harika YARA kurallarının, araçlarının ve kaynaklarının özenle seçilmiş bir listesi.</p>
<p class="mb-4"><a href="https://github.com/InQuest/awesome-yara" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/InQuest/awesome-yara &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/InQuest/awesome-yara" target="_blank" class="text-blue-400 hover:underline">https://github.com/InQuest/awesome-yara</a></p>
<p class="mb-4"><a href="https://twitter.com/cyb3rops" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Florian Roth &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Florian Roth'un YARA kural seti.</p>
<p class="mb-4"><a href="https://github.com/Neo23x0/signature-base/tree/master/yara" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Neo23x0/signature-base/tree/master/yara &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Neo23x0/signature-base/tree/master/yara" target="_blank" class="text-blue-400 hover:underline">https://github.com/Neo23x0/signature-base/tree/master/yara</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve tanrı modu YARA kuralı</p>
<p class="mb-4"><a href="https://gist.github.com/Neo23x0/f1bb645a4f715cb499150c5a14d82b44" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://gist.github.com/Neo23x0/f1bb645a4f715cb499150c5a14d82b44 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://gist.github.com/Neo23x0/f1bb645a4f715cb499150c5a14d82b44" target="_blank" class="text-blue-400 hover:underline">https://gist.github.com/Neo23x0/f1bb645a4f715cb499150c5a14d82b44</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">YARA hata ayıklayıcı</p>
<p class="mb-4"><a href="https://yaradbg.dev/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://yaradbg.dev/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://yaradbg.dev/" target="_blank" class="text-blue-400 hover:underline">https://yaradbg.dev/</a></p>
`
  },
  "soc-siem-vendor-docs": {
    slug: "soc-siem-vendor-docs",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "SIEM Tedarikçi Belgeleri",
    description: "IBM'in",
    originalPath: "/soc/siem-vendor-docs",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">IBM'in</p>
<p class="mb-4"><a href="https://www.ibm.com/docs/en/dsm?topic=management-threat-use-cases-by-log-source-type" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ibm.com/docs/en/dsm?topic=management-threat-use-cases-by-log-source-type &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ibm.com/docs/en/dsm?topic=management-threat-use-cases-by-log-source-type" target="_blank" class="text-blue-400 hover:underline">https://www.ibm.com/docs/en/dsm?topic=management-threat-use-cases-by-log-source-type</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Splunk</p>
<p class="mb-4"><a href="https://docs.splunk.com/Documentation/ES/latest/Usecases/Overview" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.splunk.com/Documentation/ES/latest/Usecases/Overview &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.splunk.com/Documentation/ES/latest/Usecases/Overview" target="_blank" class="text-blue-400 hover:underline">https://docs.splunk.com/Documentation/ES/latest/Usecases/Overview</a></p>
`
  },
  "detection-use-cases-c2-frameworks": {
    slug: "detection-use-cases-c2-frameworks",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "C2 Çerçeveleri",
    description: "Kobalt Saldırısı",
    originalPath: "/detection-use-cases/c2-frameworks",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Kobalt Saldırısı</p>
<p class="text-slate-400 mb-5 leading-relaxed">Fidye yazılımı ekipleri arasında çok popüler olduğundan odaklanmaya değer.</p>
<p class="mb-4"><a href="https://thedfirreport.com/2021/08/29/cobalt-strike-a-defenders-guide/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://thedfirreport.com/2021/08/29/cobalt-strike-a-defenders-guide/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://thedfirreport.com/2021/08/29/cobalt-strike-a-defenders-guide/" target="_blank" class="text-blue-400 hover:underline">https://thedfirreport.com/2021/08/29/cobalt-strike-a-defenders-guide/</a></p>
<p class="mb-4"><a href="https://thedfirreport.com/2022/01/24/cobalt-strike-a-defenders-guide-part-2/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://thedfirreport.com/2022/01/24/cobalt-strike-a-defenders-guide-part-2/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://thedfirreport.com/2022/01/24/cobalt-strike-a-defenders-guide-part-2/" target="_blank" class="text-blue-400 hover:underline">https://thedfirreport.com/2022/01/24/cobalt-strike-a-defenders-guide-part-2/</a></p>
<p class="mb-4"><a href="https://labs.f-secure.com/blog/detecting-cobalt-strike-default-modules-via-named-pipe-analysis/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://labs.f-secure.com/blog/detecting-cobalt-strike-default-modules-via-named-pipe-analysis/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://labs.f-secure.com/blog/detecting-cobalt-strike-default-modules-via-named-pipe-analysis/" target="_blank" class="text-blue-400 hover:underline">https://labs.f-secure.com/blog/detecting-cobalt-strike-default-modules-via-named-pipe-analysis/</a></p>
<p class="mb-4"><a href="https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-1" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-1 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-1" target="_blank" class="text-blue-400 hover:underline">https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-1</a></p>
<p class="mb-4"><a href="https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-2" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-2 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-2" target="_blank" class="text-blue-400 hover:underline">https://www.unh4ck.com/detection-engineering-and-threat-hunting/lateral-movement/detecting-conti-cobaltstrike-lateral-movement-techniques-part-2</a></p>
<p class="mb-4"><a href="https://go.recordedfuture.com/hubfs/reports/mtp-2021-0914.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://go.recordedfuture.com/hubfs/reports/mtp-2021-0914.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://go.recordedfuture.com/hubfs/reports/mtp-2021-0914.pdf" target="_blank" class="text-blue-400 hover:underline">https://go.recordedfuture.com/hubfs/reports/mtp-2021-0914.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">İşaretler</p>
<p class="mb-4"><a href="https://www.blackberry.com/us/en/pdfviewer?file=/content/dam/blackberry-com/asset/enterprise/pdf/direct/bb-ebook-finding-beacons-in-the-dark.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.blackberry.com/us/en/pdfviewer?file=/content/dam/blackberry-com/asset/enterprise/pdf/direct/bb-ebook-finding-beacons-in-the-dark.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.blackberry.com/us/en/pdfviewer?file=/content/dam/blackberry-com/asset/enterprise/pdf/direct/bb-ebook-finding-beacons-in-the-dark.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.blackberry.com/us/en/pdfviewer?file=/content/dam/blackberry-com/asset/enterprise/pdf/direct/bb-ebook-finding-beacons-in-the-dark.pdf</a></p>
<p class="mb-4"><a href="https://research.nccgroup.com/2022/03/25/mining-data-from-cobalt-strike-beacons/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://research.nccgroup.com/2022/03/25/mining-data-from-cobalt-strike-beacons/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://research.nccgroup.com/2022/03/25/mining-data-from-cobalt-strike-beacons/" target="_blank" class="text-blue-400 hover:underline">https://research.nccgroup.com/2022/03/25/mining-data-from-cobalt-strike-beacons/</a></p>
<p class="mb-4"><a href="https://github.com/fox-it/cobaltstrike-beacon-data" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/fox-it/cobaltstrike-beacon-data &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/fox-it/cobaltstrike-beacon-data" target="_blank" class="text-blue-400 hover:underline">https://github.com/fox-it/cobaltstrike-beacon-data</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Nettitude'un Şık C2'si</p>
<p class="mb-4"><a href="https://labs.nettitude.com/blog/detecting-poshc2-indicators-of-compromise/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://labs.nettitude.com/blog/detecting-poshc2-indicators-of-compromise/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://labs.nettitude.com/blog/detecting-poshc2-indicators-of-compromise/" target="_blank" class="text-blue-400 hover:underline">https://labs.nettitude.com/blog/detecting-poshc2-indicators-of-compromise/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">F-Secure'un C3'ü</p>
<p class="mb-4"><a href="https://labs.f-secure.com/blog/hunting-for-c3/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://labs.f-secure.com/blog/hunting-for-c3/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://labs.f-secure.com/blog/hunting-for-c3/" target="_blank" class="text-blue-400 hover:underline">https://labs.f-secure.com/blog/hunting-for-c3/</a></p>
`
  },
  "detection-use-cases-siem-specific-detections": {
    slug: "detection-use-cases-siem-specific-detections",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "SIEM'e Özel Tespitler",
    description: "Bunlar açıkça satıcıya özel olmasına rağmen, mantığın nasıl çalıştığı, benzer algılama kullanım durumlarının diğer platformlarda uygulanmasında faydalıdır.",
    originalPath: "/detection-use-cases/siem-specific-detections",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Bunlar açıkça satıcıya özel olmasına rağmen, mantığın nasıl çalıştığı, benzer algılama kullanım durumlarının diğer platformlarda uygulanmasında faydalıdır.</p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Elastik</h3>
<p class="mb-4"><a href="https://www.elastic.co/siem/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Elastik &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Elastic'in tespit kuralları</p>
<p class="mb-4"><a href="https://github.com/elastic/detection-rules/tree/main/rules" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/elastic/detection-rules/tree/main/rules &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/elastic/detection-rules/tree/main/rules" target="_blank" class="text-blue-400 hover:underline">https://github.com/elastic/detection-rules/tree/main/rules</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Microsoft Sentinel / Defender 365</h3>
<p class="mb-4"><a href="https://azure.microsoft.com/en-gb/services/azure-sentinel/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Microsoft Sentinel &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Microsoft Sentinel'in algılama kuralları</p>
<p class="mb-4"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Azure/Azure-Sentinel/tree/master/Detections &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Detections" target="_blank" class="text-blue-400 hover:underline">https://github.com/Azure/Azure-Sentinel/tree/master/Detections</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">ve arama sorguları</p>
<p class="mb-4"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Hunting%20Queries" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Azure/Azure-Sentinel/tree/master/Hunting%20Queries &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Azure/Azure-Sentinel/tree/master/Hunting%20Queries" target="_blank" class="text-blue-400 hover:underline">https://github.com/Azure/Azure-Sentinel/tree/master/Hunting%20Queries</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bu, Sentinel resmi değildir ancak Sentinel çalıştırıyorsanız yine de potansiyel olarak yararlı olabilir.</p>
<p class="mb-4"><a href="https://github.com/BlueTeamLabs/sentinel-attack" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/BlueTeamLabs/sentinel-attack &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/BlueTeamLabs/sentinel-attack" target="_blank" class="text-blue-400 hover:underline">https://github.com/BlueTeamLabs/sentinel-attack</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Sentinel KQL sorgularının seçilmiş listesi</p>
<p class="mb-4"><a href="https://github.com/reprise99/Sentinel-Queries" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/reprise99/Sentinel-Queries &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/reprise99/Sentinel-Queries" target="_blank" class="text-blue-400 hover:underline">https://github.com/reprise99/Sentinel-Queries</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Harika KQL</p>
<p class="mb-4"><a href="https://github.com/basedfir/awesomekql" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/basedfir/awesomekql &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/basedfir/awesomekql" target="_blank" class="text-blue-400 hover:underline">https://github.com/basedfir/awesomekql</a></p>
<p class="mb-4"><a href="https://www.falconforce.nl" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">FalconForce &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">FalconForce'un Uç Nokta Kuralları için Microsoft Defender'ı</p>
<p class="mb-4"><a href="https://github.com/FalconForceTeam/FalconFriday" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/FalconForceTeam/FalconFriday &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/FalconForceTeam/FalconFriday" target="_blank" class="text-blue-400 hover:underline">https://github.com/FalconForceTeam/FalconFriday</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Google Chronicle</h3>
<p class="mb-4"><a href="https://chronicle.security/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Google Chronicle &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Google Chronicle'ın algılama kuralları</p>
<p class="mb-4"><a href="https://github.com/chronicle/detection-rules" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/chronicle/detection-rules &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/chronicle/detection-rules" target="_blank" class="text-blue-400 hover:underline">https://github.com/chronicle/detection-rules</a></p>
<p class="mb-4"><a href="https://dansec.medium.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Dan Lussier &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Dan Lussier'in Chronicle için kural seti</p>
<p class="mb-4"><a href="https://github.com/the2dl/chronicle_detection_public" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/the2dl/chronicle_detection_public &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/the2dl/chronicle_detection_public" target="_blank" class="text-blue-400 hover:underline">https://github.com/the2dl/chronicle_detection_public</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Chronicle Rehberi</p>
<p class="mb-4"><a href="https://www.crestdatasys.com/blogs/google-chronicle-security-threat-detection-and-hunting/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.crestdatasys.com/blogs/google-chronicle-security-threat-detection-and-hunting/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.crestdatasys.com/blogs/google-chronicle-security-threat-detection-and-hunting/" target="_blank" class="text-blue-400 hover:underline">https://www.crestdatasys.com/blogs/google-chronicle-security-threat-detection-and-hunting/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Splunk</h3>
<p class="mb-4"><a href="https://www.splunk.com/en_us/software/cyber-security-essentials.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Splunk &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Splunk'un Security Essentials algılama kuralları</p>
<p class="mb-4"><a href="https://research.splunk.com/detections/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://research.splunk.com/detections/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://research.splunk.com/detections/" target="_blank" class="text-blue-400 hover:underline">https://research.splunk.com/detections/</a></p>
<p class="mb-4"><a href="https://docs.splunksecurityessentials.com/content-detail/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.splunksecurityessentials.com/content-detail/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.splunksecurityessentials.com/content-detail/" target="_blank" class="text-blue-400 hover:underline">https://docs.splunksecurityessentials.com/content-detail/</a></p>
<p class="mb-4"><a href="https://github.com/splunk/security_content/tree/develop/detections" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/splunk/security_content/tree/develop/detections &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/splunk/security_content/tree/develop/detections" target="_blank" class="text-blue-400 hover:underline">https://github.com/splunk/security_content/tree/develop/detections</a></p>
<p class="mb-4"><a href="https://twitter.com/0xCyberY" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Abdullah Baghuth &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Abdullah Baghuth'un Splunk kullanım örnekleri</p>
<p class="mb-4"><a href="https://0xcybery.github.io/blog/Splunk+Use+Cases" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://0xcybery.github.io/blog/Splunk+Use+Cases &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://0xcybery.github.io/blog/Splunk+Use+Cases" target="_blank" class="text-blue-400 hover:underline">https://0xcybery.github.io/blog/Splunk+Use+Cases</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Wuzah</h3>
<p class="mb-4"><a href="https://wazuh.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Wazuh &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Açık kaynaklı bir tehdit tespit platformu olan Wazuh'un kuralları</p>
<p class="mb-4"><a href="https://github.com/wazuh/wazuh/tree/master/ruleset" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/wazuh/wazuh/tree/master/ruleset &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/wazuh/wazuh/tree/master/ruleset" target="_blank" class="text-blue-400 hover:underline">https://github.com/wazuh/wazuh/tree/master/ruleset</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Panter Laboratuvarları</h3>
<p class="mb-4"><a href="https://runpanther.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Panter Laboratuvarları &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Panther Labs güvenlik analitiği platformunun kuralları. Bunlar özellikle bulut odaklıdır</p>
<p class="mb-4"><a href="https://github.com/panther-labs/panther-analysis" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/panther-labs/panther-analysis &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/panther-labs/panther-analysis" target="_blank" class="text-blue-400 hover:underline">https://github.com/panther-labs/panther-analysis</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">DNIF</h3>
<p class="mb-4"><a href="https://dnif.it/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">DNIF &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">DNIF'in SIEM platformunun kuralları</p>
<p class="mb-4"><a href="https://github.com/dnif/content" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/dnif/content &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/dnif/content" target="_blank" class="text-blue-400 hover:underline">https://github.com/dnif/content</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Sofo</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Sophos'un IOC deposu</p>
<p class="mb-4"><a href="https://github.com/sophoslabs/IoCs" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/sophoslabs/IoCs &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/sophoslabs/IoCs" target="_blank" class="text-blue-400 hover:underline">https://github.com/sophoslabs/IoCs</a></p>
`
  },
  "soc-hunting": {
    slug: "soc-hunting",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "Avcılık",
    description: "Yararlı kaynak seti",
    originalPath: "/soc/hunting",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Yararlı kaynak seti</p>
<p class="mb-4"><a href="https://github.com/A3sal0n/CyberThreatHunting" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/A3sal0n/CyberThreatHunting &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/A3sal0n/CyberThreatHunting" target="_blank" class="text-blue-400 hover:underline">https://github.com/A3sal0n/CyberThreatHunting</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Tehdit Avı Projesi</p>
<p class="mb-4"><a href="https://www.threathunting.net/data-index" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.threathunting.net/data-index &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.threathunting.net/data-index" target="_blank" class="text-blue-400 hover:underline">https://www.threathunting.net/data-index</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Tehdit Avcısı Başucu Kitabı, tespit geliştirmeyi daha verimli hale getirmek amacıyla tespit mantığını, rakip ticari uygulamaları ve kaynakları paylaşan topluluk odaklı, açık kaynaklı bir projedir</p>
<p class="mb-4"><a href="https://github.com/OTRF/ThreatHunter-Playbook" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/OTRF/ThreatHunter-Playbook &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/OTRF/ThreatHunter-Playbook" target="_blank" class="text-blue-400 hover:underline">https://github.com/OTRF/ThreatHunter-Playbook</a></p>
`
  },
  "work-in-a-soc-finding-a-job-salary": {
    slug: "work-in-a-soc-finding-a-job-salary",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Maaş Araştırmaları",
    description: "Çeşitli işe alım uzmanları (İngiltere) maaş anketleri hazırlamaktadır. Bu rakamları şişirmenin onların çıkarına olduğu açık. YMMV vb.",
    originalPath: "/work-in-a-soc/finding-a-job/salary",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Çeşitli işe alım uzmanları (İngiltere) maaş anketleri hazırlamaktadır. Bu rakamları şişirmenin onların çıkarına olduğu açık. YMMV vb.</p>
<p class="mb-4"><a href="https://viaresource.com/wp-content/uploads/2022/02/Information-and-cyber-security-salary-guide.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://viaresource.com/wp-content/uploads/2022/02/Information-and-cyber-security-salary-guide.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://viaresource.com/wp-content/uploads/2022/02/Information-and-cyber-security-salary-guide.pdf" target="_blank" class="text-blue-400 hover:underline">https://viaresource.com/wp-content/uploads/2022/02/Information-and-cyber-security-salary-guide.pdf</a></p>
<p class="mb-4"><a href="https://www.barclaysimpson.com/resources/BSA%20Salary%20Guide%20v7.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.barclaysimpson.com/resources/BSA%20Salary%20Guide%20v7.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.barclaysimpson.com/resources/BSA%20Salary%20Guide%20v7.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.barclaysimpson.com/resources/BSA%20Salary%20Guide%20v7.pdf</a></p>
<p class="mb-4"><a href="https://intaso.co.uk/salary-calculator-tool/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://intaso.co.uk/salary-calculator-tool/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://intaso.co.uk/salary-calculator-tool/" target="_blank" class="text-blue-400 hover:underline">https://intaso.co.uk/salary-calculator-tool/</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Kendi bildirdiği maaşlar</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Infosec gelir anketi. Oldukça uluslararası</p>
<p class="mb-4"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfwJPoFoUhrQMpDv3fwa8ItcZHwriIjLDBkAiFalXXNp88bFA/viewform" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.google.com/forms/d/e/1FAIpQLSfwJPoFoUhrQMpDv3fwa8ItcZHwriIjLDBkAiFalXXNp88bFA/viewform &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfwJPoFoUhrQMpDv3fwa8ItcZHwriIjLDBkAiFalXXNp88bFA/viewform" target="_blank" class="text-blue-400 hover:underline">https://docs.google.com/forms/d/e/1FAIpQLSfwJPoFoUhrQMpDv3fwa8ItcZHwriIjLDBkAiFalXXNp88bFA/viewform</a></p>
<p class="mb-4"><a href="https://docs.google.com/spreadsheets/d/1TWvPQalmwl1sIS3n2eOU4KST4oJwcxtSfT8lMo9IgVM/edit#gid=691164905" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.google.com/spreadsheets/d/1TWvPQalmwl1sIS3n2eOU4KST4oJwcxtSfT8lMo9IgVM/edit#gid=691164905 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.google.com/spreadsheets/d/1TWvPQalmwl1sIS3n2eOU4KST4oJwcxtSfT8lMo9IgVM/edit#gid=691164905" target="_blank" class="text-blue-400 hover:underline">https://docs.google.com/spreadsheets/d/1TWvPQalmwl1sIS3n2eOU4KST4oJwcxtSfT8lMo9IgVM/edit#gid=691164905</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">Müzakere</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Bazı yararlı tavsiyeler</p>
<p class="mb-4"><a href="https://fearlesssalarynegotiation.com/articles/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://fearlesssalarynegotiation.com/articles/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://fearlesssalarynegotiation.com/articles/" target="_blank" class="text-blue-400 hover:underline">https://fearlesssalarynegotiation.com/articles/</a></p>
<p class="mb-4"><a href="https://fearlesssalarynegotiation.com/salary-expectations-interview-question/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://fearlesssalarynegotiation.com/salary-expectations-interview-question/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://fearlesssalarynegotiation.com/salary-expectations-interview-question/" target="_blank" class="text-blue-400 hover:underline">https://fearlesssalarynegotiation.com/salary-expectations-interview-question/</a></p>
`
  },
  "soc-soc-analyst-tools-regular-expressions": {
    slug: "soc-soc-analyst-tools-regular-expressions",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "RegEx",
    description: "Kopya Kağıdı",
    originalPath: "/soc/soc-analyst-tools/regular-expressions",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Kopya Kağıdı</p>
<p class="mb-4"><a href="https://dev.to/emmabostian/regex-cheat-sheet-2j2a" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://dev.to/emmabostian/regex-cheat-sheet-2j2a &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://dev.to/emmabostian/regex-cheat-sheet-2j2a" target="_blank" class="text-blue-400 hover:underline">https://dev.to/emmabostian/regex-cheat-sheet-2j2a</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Yararlı normal ifade oluşturucular</p>
<p class="mb-4"><a href="https://www.debuggex.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.debuggex.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.debuggex.com/" target="_blank" class="text-blue-400 hover:underline">https://www.debuggex.com/</a></p>
<p class="mb-4"><a href="https://regex101.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://regex101.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://regex101.com/" target="_blank" class="text-blue-400 hover:underline">https://regex101.com/</a></p>
<p class="mb-4"><a href="https://regexr.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://regexr.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://regexr.com/" target="_blank" class="text-blue-400 hover:underline">https://regexr.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Python'a özgü</p>
<p class="mb-4"><a href="https://pythex.org/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://pythex.org/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://pythex.org/" target="_blank" class="text-blue-400 hover:underline">https://pythex.org/</a></p>
`
  },
  "detection-use-cases-malware": {
    slug: "detection-use-cases-malware",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Kötü amaçlı yazılım",
    description: "Florian Roth'un AV etkinliği hile sayfası.",
    originalPath: "/detection-use-cases/malware",
    htmlContent: `<p class="mb-4"><a href="https://twitter.com/cyb3rops" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Florian Roth &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Florian Roth'un AV etkinliği hile sayfası.</p>
<p class="mb-4"><a href="https://www.nextron-systems.com/2022/02/06/antivirus-event-analysis-cheat-sheet-v1-9-0/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.nextron-systems.com/2022/02/06/antivirus-event-analysis-cheat-sheet-v1-9-0/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.nextron-systems.com/2022/02/06/antivirus-event-analysis-cheat-sheet-v1-9-0/" target="_blank" class="text-blue-400 hover:underline">https://www.nextron-systems.com/2022/02/06/antivirus-event-analysis-cheat-sheet-v1-9-0/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kötü amaçlı yazılım arkeoloji sitesinin tamamı inanılmaz derecede faydalıdır</p>
<p class="mb-4"><a href="https://www.malwarearchaeology.com/logging/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.malwarearchaeology.com/logging/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.malwarearchaeology.com/logging/" target="_blank" class="text-blue-400 hover:underline">https://www.malwarearchaeology.com/logging/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">AV şirketlerinin nesneleri nasıl adlandırdığına ilişkin kılavuz</p>
<p class="mb-4"><a href="https://www.gdatasoftware.com/blog/2019/08/35146-taming-the-mess-of-av-detection-names" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.gdatasoftware.com/blog/2019/08/35146-taming-the-mess-of-av-detection-names &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.gdatasoftware.com/blog/2019/08/35146-taming-the-mess-of-av-detection-names" target="_blank" class="text-blue-400 hover:underline">https://www.gdatasoftware.com/blog/2019/08/35146-taming-the-mess-of-av-detection-names</a></p>
<p class="mb-4"><a href="https://twitter.com/Marco_Ramilli" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Marco Ramilli &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Marco Ramilli'den Conti Fidye Yazılımı</p>
<p class="mb-4"><a href="https://marcoramilli.com/2021/11/07/conti-ransomware-cheat-sheet/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://marcoramilli.com/2021/11/07/conti-ransomware-cheat-sheet/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://marcoramilli.com/2021/11/07/conti-ransomware-cheat-sheet/" target="_blank" class="text-blue-400 hover:underline">https://marcoramilli.com/2021/11/07/conti-ransomware-cheat-sheet/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kötü amaçlı yazılımların yaygın olarak kullandığı dosya uzantıları</p>
<p class="mb-4"><a href="https://filesec.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://filesec.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://filesec.io/" target="_blank" class="text-blue-400 hover:underline">https://filesec.io/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kötü amaçlı yazılımlar tarafından yaygın olarak kullanılan Windows API çağrıları</p>
<p class="mb-4"><a href="https://malapi.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://malapi.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://malapi.io/" target="_blank" class="text-blue-400 hover:underline">https://malapi.io/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kötü amaçlı yazılımdan kaçınma teknikleri</p>
<p class="mb-4"><a href="https://search.unprotect.it/map/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://search.unprotect.it/map/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://search.unprotect.it/map/" target="_blank" class="text-blue-400 hover:underline">https://search.unprotect.it/map/</a></p>
`
  },
  "logging-windows-logging": {
    slug: "logging-windows-logging",
    category: "logging",
    categoryTr: "Log Yönetimi & Analiz",
    title: "Windows Günlüğü",
    description: "Windows 10 ve Windows Server 2016 güvenlik denetimi ve izleme referansı",
    originalPath: "/logging/windows-logging",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Windows 10 ve Windows Server 2016 güvenlik denetimi ve izleme referansı</p>
<p class="mb-4"><a href="https://www.microsoft.com/en-us/download/details.aspx?id=52630" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.microsoft.com/en-us/download/details.aspx?id=52630 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.microsoft.com/en-us/download/details.aspx?id=52630" target="_blank" class="text-blue-400 hover:underline">https://www.microsoft.com/en-us/download/details.aspx?id=52630</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Windows güvenlik denetimi etkinlikleri</p>
<p class="mb-4"><a href="https://www.microsoft.com/en-us/download/details.aspx?id=50034" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.microsoft.com/en-us/download/details.aspx?id=50034 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.microsoft.com/en-us/download/details.aspx?id=50034" target="_blank" class="text-blue-400 hover:underline">https://www.microsoft.com/en-us/download/details.aspx?id=50034</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Windows Güvenlik Günlüğündeki her şey</p>
<p class="mb-4"><a href="https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/Default.aspx" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/Default.aspx &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/Default.aspx" target="_blank" class="text-blue-400 hover:underline">https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/Default.aspx</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Çok yararlı günlük tutma hile sayfaları</p>
<p class="mb-4"><a href="https://www.malwarearchaeology.com/cheat-sheets" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.malwarearchaeology.com/cheat-sheets &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.malwarearchaeology.com/cheat-sheets" target="_blank" class="text-blue-400 hover:underline">https://www.malwarearchaeology.com/cheat-sheets</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">RDP</p>
<p class="mb-4"><a href="https://dfironthemountain.wordpress.com/2019/02/15/rdp-event-log-dfir/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://dfironthemountain.wordpress.com/2019/02/15/rdp-event-log-dfir/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://dfironthemountain.wordpress.com/2019/02/15/rdp-event-log-dfir/" target="_blank" class="text-blue-400 hover:underline">https://dfironthemountain.wordpress.com/2019/02/15/rdp-event-log-dfir/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">MITRE ATT&CK ile eşlenen Windows günlük örnekleri</p>
<p class="mb-4"><a href="https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES" target="_blank" class="text-blue-400 hover:underline">https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES</a></p>
<p class="mb-4"><a href="https://twitter.com/duzvik" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Den Luzvyk &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Den Luzvyk'in tweet'i güvenlik günlüğü olaylarını detaylandırıyor</p>
<p class="mb-4"><a href="https://twitter.com/duzvik/status/1319215738473820160?s=20" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://twitter.com/duzvik/status/1319215738473820160?s=20 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://twitter.com/duzvik/status/1319215738473820160?s=20" target="_blank" class="text-blue-400 hover:underline">https://twitter.com/duzvik/status/1319215738473820160?s=20</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NSA'nın Windows olaylarının günlüğe kaydedilmesi önerisi</p>
<p class="mb-4"><a href="https://github.com/nsacyber/Event-Forwarding-Guidance/tree/master/Events" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/nsacyber/Event-Forwarding-Guidance/tree/master/Events &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/nsacyber/Event-Forwarding-Guidance/tree/master/Events" target="_blank" class="text-blue-400 hover:underline">https://github.com/nsacyber/Event-Forwarding-Guidance/tree/master/Events</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Windows'un günlüğe kaydetme şekliyle ilgili tuhaflıklar hakkında kılavuz.</p>
<p class="mb-4"><a href="https://osdfir.blogspot.com/2021/10/common-misconceptions-about-windows.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://osdfir.blogspot.com/2021/10/common-misconceptions-about-windows.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://osdfir.blogspot.com/2021/10/common-misconceptions-about-windows.html" target="_blank" class="text-blue-400 hover:underline">https://osdfir.blogspot.com/2021/10/common-misconceptions-about-windows.html</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">İleri Savunmanın Windows Olay Günlüğü Referansı</p>
<p class="mb-4"><a href="https://www.forwarddefense.com/media/attachments/2021/05/15/windows-event-log-analyst-reference.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.forwarddefense.com/media/attachments/2021/05/15/windows-event-log-analyst-reference.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.forwarddefense.com/media/attachments/2021/05/15/windows-event-log-analyst-reference.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.forwarddefense.com/media/attachments/2021/05/15/windows-event-log-analyst-reference.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Windows Denetim günlüğünü yapılandırmak için en iyi yöntem</p>
<p class="mb-4"><a href="https://activedirectorypro.com/audit-policy-best-practices/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://activedirectorypro.com/audit-policy-best-practices/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://activedirectorypro.com/audit-policy-best-practices/" target="_blank" class="text-blue-400 hover:underline">https://activedirectorypro.com/audit-policy-best-practices/</a></p>
<p class="mb-4"><a href="https://twitter.com/alkhatib_tareq" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Tarık Alhatib &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">"Bu Siz Değilsiniz! Windows Güvenlik Günlükleri Anlamlı Değil". Tareq Alkhatib'den göz açıcı bir eser</p>
<p class="mb-4"><a href="https://medium.com/@tareq.alkhatib/its-not-you-windows-security-logs-don-t-make-sense-4e421a0bbd0" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/@tareq.alkhatib/its-not-you-windows-security-logs-don-t-make-sense-4e421a0bbd0 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/@tareq.alkhatib/its-not-you-windows-security-logs-don-t-make-sense-4e421a0bbd0" target="_blank" class="text-blue-400 hover:underline">https://medium.com/@tareq.alkhatib/its-not-you-windows-security-logs-don-t-make-sense-4e421a0bbd0</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Windows Olay Günlüğü İleticisi nasıl kurulur</p>
<p class="mb-4"><a href="https://adamtheautomator.com/windows-event-collector/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://adamtheautomator.com/windows-event-collector/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://adamtheautomator.com/windows-event-collector/" target="_blank" class="text-blue-400 hover:underline">https://adamtheautomator.com/windows-event-collector/</a></p>
`
  },
  "logging-government-advice": {
    slug: "logging-government-advice",
    category: "logging",
    categoryTr: "Log Yönetimi & Analiz",
    title: "Hükümet Tavsiyesi",
    description: "NCSC",
    originalPath: "/logging/government-advice",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">NCSC</p>
<p class="mb-4"><a href="https://www.ncsc.gov.uk/blog-post/what-exactly-should-we-be-logging" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ncsc.gov.uk/blog-post/what-exactly-should-we-be-logging &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ncsc.gov.uk/blog-post/what-exactly-should-we-be-logging" target="_blank" class="text-blue-400 hover:underline">https://www.ncsc.gov.uk/blog-post/what-exactly-should-we-be-logging</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Günlük kaydı kolaylaştırıldı projesi, kesinlikle hiçbir merkezi günlük kaydıyla başlıyorsanız faydalıdır.</p>
<p class="mb-4"><a href="https://www.ncsc.gov.uk/blog-post/logging-made-easy" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.ncsc.gov.uk/blog-post/logging-made-easy &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.ncsc.gov.uk/blog-post/logging-made-easy" target="_blank" class="text-blue-400 hover:underline">https://www.ncsc.gov.uk/blog-post/logging-made-easy</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">NSA</p>
<p class="mb-4"><a href="https://apps.nsa.gov/iaarchive/library/reports/spotting-the-adversary-with-windows-event-log-monitoring.cfm" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://apps.nsa.gov/iaarchive/library/reports/spotting-the-adversary-with-windows-event-log-monitoring.cfm &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://apps.nsa.gov/iaarchive/library/reports/spotting-the-adversary-with-windows-event-log-monitoring.cfm" target="_blank" class="text-blue-400 hover:underline">https://apps.nsa.gov/iaarchive/library/reports/spotting-the-adversary-with-windows-event-log-monitoring.cfm</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CISA</p>
<p class="mb-4"><a href="https://us-cert.cisa.gov/ncas/alerts/aa20-245a" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://us-cert.cisa.gov/ncas/alerts/aa20-245a &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://us-cert.cisa.gov/ncas/alerts/aa20-245a" target="_blank" class="text-blue-400 hover:underline">https://us-cert.cisa.gov/ncas/alerts/aa20-245a</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">OSB</p>
<p class="mb-4"><a href="https://www.cyber.gov.au/acsc/view-all-content/advice/guidelines-system-monitoring" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cyber.gov.au/acsc/view-all-content/advice/guidelines-system-monitoring &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cyber.gov.au/acsc/view-all-content/advice/guidelines-system-monitoring" target="_blank" class="text-blue-400 hover:underline">https://www.cyber.gov.au/acsc/view-all-content/advice/guidelines-system-monitoring</a></p>
`
  },
  "work-in-a-soc-learning-resources-malware-analysis": {
    slug: "work-in-a-soc-learning-resources-malware-analysis",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "Kötü Amaçlı Yazılım Analizi",
    description: "Harika kötü amaçlı yazılım analiz araçları ve kaynaklarının seçilmiş bir listesi",
    originalPath: "/work-in-a-soc/learning-resources/malware-analysis",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Harika kötü amaçlı yazılım analiz araçları ve kaynaklarının seçilmiş bir listesi</p>
<p class="mb-4"><a href="https://github.com/rshipp/awesome-malware-analysis" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/rshipp/awesome-malware-analysis &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/rshipp/awesome-malware-analysis" target="_blank" class="text-blue-400 hover:underline">https://github.com/rshipp/awesome-malware-analysis</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Kötü Amaçlı Yazılım Analizi araçları ve bağlantıları deposu</p>
<p class="mb-4"><a href="https://github.com/0x4143/malware-gems" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/0x4143/malware-gems &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/0x4143/malware-gems" target="_blank" class="text-blue-400 hover:underline">https://github.com/0x4143/malware-gems</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Eksiksiz bir kötü amaçlı yazılım analizi sınıfı</p>
<p class="mb-4"><a href="https://class.malware.re/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://class.malware.re/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://class.malware.re/" target="_blank" class="text-blue-400 hover:underline">https://class.malware.re/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Örnekler ve analiz alıştırmaları</p>
<p class="mb-4"><a href="https://github.com/jstrosch/malware-samples" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/jstrosch/malware-samples &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/jstrosch/malware-samples" target="_blank" class="text-blue-400 hover:underline">https://github.com/jstrosch/malware-samples</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">PE formatına derinlemesine bakış</p>
<p class="mb-4"><a href="https://0xrick.github.io/win-internals/pe1/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://0xrick.github.io/win-internals/pe1/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://0xrick.github.io/win-internals/pe1/" target="_blank" class="text-blue-400 hover:underline">https://0xrick.github.io/win-internals/pe1/</a></p>
`
  },
  "detection-use-cases-webshells": {
    slug: "detection-use-cases-webshells",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Web kabukları",
    description: "5 popüler web kabuğunu (Alfa, SharPyShell, Krypton, ASPXSpy ve TWOFACE) tespit etmeye yönelik Kaydedilmiş Gelecek kılavuzu",
    originalPath: "/detection-use-cases/webshells",
    htmlContent: `<p class="mb-4"><a href="https://recordedfuture.com" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Kaydedilen Gelecek &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">5 popüler web kabuğunu (Alfa, SharPyShell, Krypton, ASPXSpy ve TWOFACE) tespit etmeye yönelik Kaydedilmiş Gelecek kılavuzu</p>
<p class="mb-4"><a href="https://go.recordedfuture.com/hubfs/reports/mtp-2021-1214.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://go.recordedfuture.com/hubfs/reports/mtp-2021-1214.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://go.recordedfuture.com/hubfs/reports/mtp-2021-1214.pdf" target="_blank" class="text-blue-400 hover:underline">https://go.recordedfuture.com/hubfs/reports/mtp-2021-1214.pdf</a></p>
`
  },
  "soc-playbooks": {
    slug: "soc-playbooks",
    category: "soc",
    categoryTr: "SOC & Tehdit Avcılığı",
    title: "Başucu Kitapları",
    description: "Ayrıca bkz. Olay Müdahalesi",
    originalPath: "/soc/playbooks",
    htmlContent: `<p class="mb-4"><a href="/incident-response" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Olay Müdahalesi &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Ayrıca bkz. Olay Müdahalesi</p>
<p class="text-slate-400 mb-5 leading-relaxed">Gönye ATT&CK ile eşlendi</p>
<p class="mb-4"><a href="https://github.com/austinsonger/Incident-Playbook" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/austinsonger/Incident-Playbook &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/austinsonger/Incident-Playbook" target="_blank" class="text-blue-400 hover:underline">https://github.com/austinsonger/Incident-Playbook</a></p>
<p class="mb-4"><a href="https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards" target="_blank" class="text-blue-400 hover:underline">https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Farklı olay türlerine yönelik başucu kitapları</p>
<p class="mb-4"><a href="https://www.incidentresponse.com/playbooks/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.incidentresponse.com/playbooks/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.incidentresponse.com/playbooks/" target="_blank" class="text-blue-400 hover:underline">https://www.incidentresponse.com/playbooks/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Yararlı oyun kitapları kütüphanesi.</p>
<p class="mb-4"><a href="https://gitlab.com/syntax-ir/playbooks" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://gitlab.com/syntax-ir/playbooks &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://gitlab.com/syntax-ir/playbooks" target="_blank" class="text-blue-400 hover:underline">https://gitlab.com/syntax-ir/playbooks</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CACOA Projesi oyun kitaplarını standartlaştırmayı amaçlıyor</p>
<p class="mb-4"><a href="https://docs.oasis-open.org/cacao/security-playbooks/v1.0/security-playbooks-v1.0.html" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.oasis-open.org/cacao/security-playbooks/v1.0/security-playbooks-v1.0.html &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.oasis-open.org/cacao/security-playbooks/v1.0/security-playbooks-v1.0.html" target="_blank" class="text-blue-400 hover:underline">https://docs.oasis-open.org/cacao/security-playbooks/v1.0/security-playbooks-v1.0.html</a></p>
<p class="mb-4"><a href="https://us-cert.cisa.gov/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">CISA &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">CISA'nın başucu kitabı</p>
<p class="mb-4"><a href="https://www.cisa.gov/sites/default/files/publications/Federal_Government_Cybersecurity_Incident_and_Vulnerability_Response_Playbooks_508C.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.cisa.gov/sites/default/files/publications/Federal_Government_Cybersecurity_Incident_and_Vulnerability_Response_Playbooks_508C.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.cisa.gov/sites/default/files/publications/Federal_Government_Cybersecurity_Incident_and_Vulnerability_Response_Playbooks_508C.pdf" target="_blank" class="text-blue-400 hover:underline">https://www.cisa.gov/sites/default/files/publications/Federal_Government_Cybersecurity_Incident_and_Vulnerability_Response_Playbooks_508C.pdf</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Harika DFIR'ın başucu kitapları</p>
<p class="mb-4"><a href="https://awesomedfir.com/playbooks" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://awesomedfir.com/playbooks &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://awesomedfir.com/playbooks" target="_blank" class="text-blue-400 hover:underline">https://awesomedfir.com/playbooks</a></p>
<p class="mb-4"><a href="https://frsecure.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">FRSecure &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">FRSecure'un taktik kitapları</p>
<p class="mb-4"><a href="https://frsecure.com/blog/incident-response-playbooks/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://frsecure.com/blog/incident-response-playbooks/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://frsecure.com/blog/incident-response-playbooks/" target="_blank" class="text-blue-400 hover:underline">https://frsecure.com/blog/incident-response-playbooks/</a></p>
<p class="mb-4"><a href="https://www.guardsight.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Koruma Görüşü &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Guardsight'ın taktik kitapları</p>
<p class="mb-4"><a href="https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards" target="_blank" class="text-blue-400 hover:underline">https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Microsoft'un Fidye Yazılımlarına Yaklaşımı</p>
<p class="mb-4"><a href="https://docs.microsoft.com/en-us/security/compass/human-operated-ransomware" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://docs.microsoft.com/en-us/security/compass/human-operated-ransomware &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://docs.microsoft.com/en-us/security/compass/human-operated-ransomware" target="_blank" class="text-blue-400 hover:underline">https://docs.microsoft.com/en-us/security/compass/human-operated-ransomware</a></p>
`
  },
  "work-in-a-soc-learning-resources-edr": {
    slug: "work-in-a-soc-learning-resources-edr",
    category: "work-in-a-soc",
    categoryTr: "SOC Operasyonları & Kariyer",
    title: "EDR",
    description: "Wazuh, EDR ile uygulamalı deneyim kazanmayı faydalı kılan ücretsiz ve açık kaynaklı bir güvenlik platformudur",
    originalPath: "/work-in-a-soc/learning-resources/edr",
    htmlContent: `<p class="text-slate-400 mb-5 leading-relaxed">Wazuh, EDR ile uygulamalı deneyim kazanmayı faydalı kılan ücretsiz ve açık kaynaklı bir güvenlik platformudur</p>
<p class="mb-4"><a href="https://wazuh.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://wazuh.com/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://wazuh.com/" target="_blank" class="text-blue-400 hover:underline">https://wazuh.com/</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Limacharlie, iki EDR sensörünün ücretsiz kurulumuna olanak tanıyan ticari bir EDR ürünüdür</p>
<p class="mb-4"><a href="https://www.limacharlie.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.limacharlie.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.limacharlie.io/" target="_blank" class="text-blue-400 hover:underline">https://www.limacharlie.io/</a></p>
`
  },
  "detection-use-cases-projects": {
    slug: "detection-use-cases-projects",
    category: "detection-use-cases",
    categoryTr: "Tespit Senaryoları",
    title: "Projeler",
    description: "\"Sigma, ilgili günlük olaylarını basit bir şekilde tanımlamanıza olanak tanıyan genel ve açık bir imza formatıdır.\" Her ne kadar alışılmışın dışında kurallar...",
    originalPath: "/detection-use-cases/projects",
    htmlContent: `<h3 class="text-lg font-bold mt-6 mb-3 text-white">SİGMA</h3>
<p class="text-slate-400 mb-5 leading-relaxed">"Sigma, ilgili günlük olaylarını basit bir şekilde tanımlamanıza olanak tanıyan genel ve açık bir imza formatıdır." Her ne kadar alışılmışın dışında kuralların bireysel bir ortam için ayarlama gerektirmesi muhtemel olsa da, son derece faydalıdır.</p>
<p class="mb-4"><a href="https://github.com/SigmaHQ/sigma" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/SigmaHQ/sigma &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/SigmaHQ/sigma" target="_blank" class="text-blue-400 hover:underline">https://github.com/SigmaHQ/sigma</a></p>
<p class="mb-4"><a href="https://medium.com/malware-buddy/security-infographics-9c4d3bd891ef#5920" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://medium.com/malware-buddy/security-infographics-9c4d3bd891ef#5920 &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://medium.com/malware-buddy/security-infographics-9c4d3bd891ef#5920" target="_blank" class="text-blue-400 hover:underline">https://medium.com/malware-buddy/security-infographics-9c4d3bd891ef#5920</a></p>
<p class="mb-4"><a href="https://twitter.com/cyb3rops" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Florian Roth &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Florian Roth'un SIGMA hakkındaki sunumu</p>
<p class="mb-4"><a href="https://github.com/Neo23x0/Talks/blob/master/Sigma_Hall_of_Fame_20211022.pdf" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://github.com/Neo23x0/Talks/blob/master/Sigma_Hall_of_Fame_20211022.pdf &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://github.com/Neo23x0/Talks/blob/master/Sigma_Hall_of_Fame_20211022.pdf" target="_blank" class="text-blue-400 hover:underline">https://github.com/Neo23x0/Talks/blob/master/Sigma_Hall_of_Fame_20211022.pdf</a></p>
<p class="mb-4"><a href="https://socprime.com/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">SOC Prime &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">SOC Prime, sigma kuralları için farklı formatlara dönüştürücü sağlar</p>
<p class="mb-4"><a href="https://uncoder.io/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://uncoder.io/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://uncoder.io/" target="_blank" class="text-blue-400 hover:underline">https://uncoder.io/</a></p>
<p class="mb-4"><a href="https://www.networkdefense.co/courses/sigma/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">Learnsigmarules.com &rarr;</a></p>
<p class="text-slate-400 mb-5 leading-relaxed">Bir kurs sunan Learnsigmarules.com'dan Sigma kuralları yazmak için yardımcı sayfalar.</p>
<p class="mb-4"><a href="https://drive.google.com/file/d/1nayvP3m8GD8cxV_nrk6459mHDV2xaqFB/view" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://drive.google.com/file/d/1nayvP3m8GD8cxV_nrk6459mHDV2xaqFB/view &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://drive.google.com/file/d/1nayvP3m8GD8cxV_nrk6459mHDV2xaqFB/view" target="_blank" class="text-blue-400 hover:underline">https://drive.google.com/file/d/1nayvP3m8GD8cxV_nrk6459mHDV2xaqFB/view</a></p>
<h3 class="text-lg font-bold mt-6 mb-3 text-white">MaGMa</h3>
<p class="text-slate-400 mb-5 leading-relaxed">Hollanda Ödemeler Birliği'nin MaGMa Kullanım Senaryosu Çerçevesi (UCF), kullanım senaryosu yönetimi ve idaresine yönelik bir çerçeve ve araçtır</p>
<p class="mb-4"><a href="https://www.betaalvereniging.nl/en/safety/magma/" target="_blank" class="text-blue-400 hover:text-blue-300 hover:underline font-medium inline-flex items-center gap-1">https://www.betaalvereniging.nl/en/safety/magma/ &rarr;</a></p>
<p class="mb-4 font-mono text-sm break-all"><a href="https://www.betaalvereniging.nl/en/safety/magma/" target="_blank" class="text-blue-400 hover:underline">https://www.betaalvereniging.nl/en/safety/magma/</a></p>
`
  },
};