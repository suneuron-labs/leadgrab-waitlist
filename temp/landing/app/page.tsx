import { FaqSection } from "@/components/faq-section";
import { FeatureShowcase } from "@/components/feature-showcase";
import { Footer } from "@/components/footer";
import { LandingShell } from "@/components/landing-shell";
import { PricingTable } from "@/components/pricing-table";
import { WhyUsGrid } from "@/components/why-us-grid";

export default function Home() {
  return (
    <>
      <LandingShell>
        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 pb-12">
          <WhyUsGrid />
          <FeatureShowcase />
          <PricingTable />
          <FaqSection />
        </main>
      </LandingShell>

      <Footer />
    </>
  );
}
