import Seo from "@/components/Seo";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import About from "@/components/About";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";
import TrustBadges from "@/components/TrustBadges";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { ScrollProgressBar } from "@/components/animations/ScrollProgressBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MoreLink = ({ to, label }: { to: string; label: string }) => (
  <div className="container mx-auto px-4 -mt-6 mb-12 flex justify-center">
    <Button variant="outline" asChild className="group">
      <Link to={to}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Seo
        title="Quantum Medical — Advanced Prosthetics & Orthotics"
        description="Custom prosthetic and orthotic care for kids and adults, built with GAIT analysis, CAD/CAM and 3D printing for superior comfort, accuracy and durability."
        path="/"
      />
      <ScrollProgressBar color="gradient" />
      <Background3D />
      <div className="relative">
        <Header transparent />
        <HeroCarousel />
      </div>
      <TrustBadges />
      <About />
      <Services />
      <MoreLink to="/services" label="View All Services" />
      <HowWeWork />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentForm />
      <MoreLink to="/book-appointment" label="Full Appointment Form" />
      <FAQ />
      <Contact />
      <MoreLink to="/contact" label="Visit Contact Page" />
      <Footer />
    </div>
  );
};

export default Index;
