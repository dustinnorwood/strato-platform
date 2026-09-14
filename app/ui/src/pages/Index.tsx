import { usePageTitle } from "@/hooks/usePageTitle";
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import SiteFooter from '../components/SiteFooter';

const Index = () => {
  usePageTitle("STRATO | Where Stability Meets Opportunity");


  return (
    <div className="min-h-screen relative bg-background">
      <Navbar />
      <Hero />
      
      <SiteFooter />
    </div>
  );
};

export default Index;
