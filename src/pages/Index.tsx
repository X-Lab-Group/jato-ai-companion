import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import DocsCTA from "@/components/DocsCTA";
import FAQSection from "@/components/FAQSection";
import JatoFooter from "@/components/JatoFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <PricingSection />
        <DocsCTA />
        <FAQSection />
      </main>
      <JatoFooter />
    </div>
  );
};

export default Index;
