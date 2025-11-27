import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BusinessUnits from "@/components/BusinessUnits";
import NewsSection from "@/components/NewsSection";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <BusinessUnits />
      <NewsSection />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
