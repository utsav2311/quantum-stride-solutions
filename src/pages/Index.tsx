import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import About from "@/components/About";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";
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
      <ScrollProgressBar color="gradient" />
      <Background3D />
      <Header />
      <HeroCarousel />
      <Services />
      <MoreLink to="/services" label="View All Services" />
      <About />
      <MoreLink to="/about" label="Learn More About Us" />
      <AppointmentForm />
      <MoreLink to="/book-appointment" label="Full Appointment Form" />
      <Contact />
      <MoreLink to="/contact" label="Visit Contact Page" />
      <Footer />
    </div>
  );
};

export default Index;
