import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MedicalDevices3D from "@/components/MedicalDevices3D";
import About from "@/components/About";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
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
