import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { ProblemSolution } from "@/components/problem-solution";
import { FeatureGrid } from "@/components/feature-grid";
import { TechnicalSpecs } from "@/components/technical-specs";
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
      <UseCases />
      <Comparison />
      <ClusterLinks />
      <Footer />
    </main>
  );
}
