import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services3D from "@/components/Services3D";
import About from "@/components/About";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services3D />
      <About />
      <AppointmentForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
