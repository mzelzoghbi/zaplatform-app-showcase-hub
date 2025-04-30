
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AppShowcase from "@/components/AppShowcase";
import FeaturedApp from "@/components/FeaturedApp";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AppShowcase />
        <FeaturedApp />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
