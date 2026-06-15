import Navbar from "../../components/Navbar";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import DashboardPreview from "../../components/dashboardPreview/DashboardPreview";
import Workflow from "../../components/workflow/Workflow";
import StatsSection from "../../components/StatsSection/StatsSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import TechnologyShowcase from "../../components/TechnologyShowcase/TechnologyShowcase";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";



const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <Workflow />
      <StatsSection /> 
      <Testimonials />
      <TechnologyShowcase />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;