import Navbar       from "@/components/Navbar";
import HeroSection   from "@/components/HeroSection";
import BackedBy      from "@/components/BackedBy";
import InvestSection from "@/components/InvestSection";
import WhySection    from "@/components/WhySection";
import CTABanner     from "@/components/CTABanner";
import HowItWorks    from "@/components/HowItWorks";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-wu-gradient">
      {/* Ambient orbs */}
      <div className="pointer-events-none fixed -top-32 -right-20 w-[520px] h-[520px] rounded-full bg-blue-400/30 blur-3xl" />
      <div className="pointer-events-none fixed bottom-40 -left-20 w-96 h-96 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="pointer-events-none fixed top-1/2 right-1/4 w-72 h-72 rounded-full bg-blue-200/35 blur-3xl" />

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <BackedBy />
        <InvestSection />
        <WhySection />
        <CTABanner />
        <HowItWorks />
        <Footer />
      </div>
    </main>
  );
}
