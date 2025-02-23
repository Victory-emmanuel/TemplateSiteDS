import FeatureSection from "../components/Home/FeatureSection";
import HeroSection from "../components/Home/HeroSection";
import CategorySection from "../components/Home/CategorySection";
import OurBestWorkSection from "../components/Home/OurBestWorkSection";
import ProcessSection from "../components/Home/ProcessSection";
import FaqSection from "../components/Home/FaqSection";
import PricingSection from "../components/Home/PricingSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <CategorySection />
      <PricingSection />
      <OurBestWorkSection />
      <ProcessSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
