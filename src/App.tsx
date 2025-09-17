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
import Background3D from "@/components/Background3D";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <Background3D /> */}
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
