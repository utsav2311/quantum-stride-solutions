import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookAppointment from "./pages/BookAppointment";
import LowerLimbProsthetics from "./pages/services/LowerLimbProsthetics";
import UpperLimbProsthetics from "./pages/services/UpperLimbProsthetics";
import CustomOrthotics from "./pages/services/CustomOrthotics";
import RepairMaintenance from "./pages/services/RepairMaintenance";
import MedicalEquipments from "./pages/services/MedicalEquipments";
import SpineBackBraces from "./pages/services/SpineBackBraces";
import UpperLimbOrthotics from "./pages/services/UpperLimbOrthotics";
import LowerLimbOrthotics from "./pages/services/LowerLimbOrthotics";
import CustomOrthoticInsoles from "./pages/services/CustomOrthoticInsoles";
import SportsProsthetics from "./pages/services/SportsProsthetics";
import CosmeticProsthetics from "./pages/services/CosmeticProsthetics";
import PediatricOrthotics from "./pages/services/PediatricOrthotics";
import PediatricProsthetics from "./pages/services/PediatricProsthetics";
import MobilityAidsForKids from "./pages/services/MobilityAidsForKids";
import Wheelchairs from "./pages/services/Wheelchairs";
import CustomSeatingSystems from "./pages/services/CustomSeatingSystems";
import WalkersStandingFrames from "./pages/services/WalkersStandingFrames";
import SocketsLiners from "./pages/services/SocketsLiners";
import SiliconeRestoration from "./pages/services/SiliconeRestoration";
import CranialOrthoses from "./pages/services/CranialOrthoses";
import ScoliosisBracing from "./pages/services/ScoliosisBracing";
import Background3D from "@/components/Background3D";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingCallButton from "@/components/FloatingCallButton";
import SocialSidebar from "@/components/SocialSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <Background3D /> */}
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/services/lower-limb-prosthetics" element={<LowerLimbProsthetics />} />
          <Route path="/services/upper-limb-prosthetics" element={<UpperLimbProsthetics />} />
          <Route path="/services/custom-orthotics" element={<CustomOrthotics />} />
          <Route path="/services/repair-maintenance" element={<RepairMaintenance />} />
          <Route path="/services/medical-equipments" element={<MedicalEquipments />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/services/spine-back-braces" element={<SpineBackBraces />} />
          <Route path="/services/upper-limb-orthotics" element={<UpperLimbOrthotics />} />
          <Route path="/services/lower-limb-orthotics" element={<LowerLimbOrthotics />} />
          <Route path="/services/custom-orthotic-insoles" element={<CustomOrthoticInsoles />} />
          <Route path="/services/sports-prosthetics" element={<SportsProsthetics />} />
          <Route path="/services/cosmetic-prosthetics" element={<CosmeticProsthetics />} />
          <Route path="/services/pediatric-orthotics" element={<PediatricOrthotics />} />
          <Route path="/services/pediatric-prosthetics" element={<PediatricProsthetics />} />
          <Route path="/services/mobility-aids-for-kids" element={<MobilityAidsForKids />} />
          <Route path="/services/wheelchairs" element={<Wheelchairs />} />
          <Route path="/services/custom-seating-systems" element={<CustomSeatingSystems />} />
          <Route path="/services/walkers-standing-frames" element={<WalkersStandingFrames />} />
          <Route path="/services/sockets-liners" element={<SocketsLiners />} />
          <Route path="/services/silicone-restoration" element={<SiliconeRestoration />} />
          <Route path="/services/cranial-orthoses" element={<CranialOrthoses />} />
          <Route path="/services/scoliosis-bracing" element={<ScoliosisBracing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        <FloatingCallButton />
        <SocialSidebar />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
