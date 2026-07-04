import Header from "@/components/Header";
import HeroPremium from "@/components/HeroPremium";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ScrollProgressBar } from "@/components/animations/ScrollProgressBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const MoreLink = ({ to, label }: { to: string; label: string }) => (
  <div className="container mx-auto px-6 lg:px-8 -mt-8 mb-16 flex justify-center">
    <Button variant="outline" asChild className="group rounded-full h-12 px-6">
      <Link to={to}>
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen relative bg-background">
      <ScrollProgressBar color="gradient" />
      <div className="relative">
        <Header transparent />
        <HeroPremium />
      </div>
      <ClientLogos />
      <Services />
      <MoreLink to="/services" label="View All Services" />
      <Achievements />
      <About />
      <MoreLink to="/about" label="Learn More About Us" />
      <Testimonials />
      <AppointmentForm />
      <MoreLink to="/book-appointment" label="Full Appointment Form" />
      <Contact />
      <MoreLink to="/contact" label="Visit Contact Page" />
      <Footer />
    </div>
  );
};

export default Index;
