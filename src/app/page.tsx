import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { ProblemSolution } from "@/components/problem-solution";
import { FeatureGrid } from "@/components/feature-grid";
import { TechnicalSpecs } from "@/components/technical-specs";
import CostCalculator from "@/components/cost-calculator";
import { UseCases } from "@/components/use-cases";
import { Comparison } from "@/components/comparison";
import { ClusterLinks } from "@/components/cluster-links";
import { Footer } from "@/components/footer";
import { JsonLd, productSchema } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start bg-background">
      <JsonLd data={productSchema} />
      <Hero />
      <TrustStrip />
      <ProblemSolution />
      <FeatureGrid />
      <TechnicalSpecs />

      <section className="py-20 bg-slate-950 border-y border-slate-900 overflow-hidden relative">
        <div className="container mx-auto px-4 mb-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Maliyet <span className="text-blue-500">Tasarruf Hesaplayıcı</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            ACKLog'un %80'e varan sıkıştırma teknolojisi ile donanım ve lisans maliyetlerinizi ne kadar düşürebileceğinizi şimdi hesaplayın.
          </p>
        </div>
        <CostCalculator />
      </section>

      <UseCases />
      <Comparison />
      <ClusterLinks />
      <Footer />
    </main>
  );
}
