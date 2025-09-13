import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import About from "@/components/About";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Header />
      <HeroCarousel />
      <Services />
      <About />
      <AppointmentForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
