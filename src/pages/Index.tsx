import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Services from "@/components/Services";
import MedicalDevices3D from "@/components/MedicalDevices3D";
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
      <MedicalDevices3D />
      <About />
      <AppointmentForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
