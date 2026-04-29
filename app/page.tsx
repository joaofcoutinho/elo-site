import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BannerSlide } from "@/components/sections/BannerSlide";
import { SocialProof } from "@/components/sections/SocialProof";
import { About } from "@/components/sections/About";
import { Metrics } from "@/components/sections/Metrics";
import { Services } from "@/components/sections/Services";
import { HubBenefits } from "@/components/sections/HubBenefits";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { WhyUs } from "@/components/sections/WhyUs";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <BannerSlide />
        <SocialProof />
        <About />
        <Metrics />
        <Services />
        <HubBenefits />
        <TargetAudience />
        <WhyUs />
        <BlogPreview />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
