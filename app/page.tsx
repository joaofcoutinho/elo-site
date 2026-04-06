import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { About } from "@/components/sections/About";
import { Metrics } from "@/components/sections/Metrics";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <About />
        <Metrics />
        <Services />
        <WhyUs />
        <BlogPreview />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
