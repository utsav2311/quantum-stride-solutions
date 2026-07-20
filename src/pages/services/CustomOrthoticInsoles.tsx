import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/custom-orthotics-service.jpg";

const CustomOrthoticInsoles = () => (
  <ServiceDetailPage
    title="Custom Orthotic Insoles & Footwear"
    tagline="Orthotics"
    description="Digitally scanned, custom-milled insoles and therapeutic footwear that address foot pain, gait abnormalities and diabetic foot risk."
    path="/services/custom-orthotic-insoles"
    image={img}
    features={["3D Scanned Insoles", "Diabetic Footwear", "Sports Orthoses", "Pediatric Insoles"]}
    conditions={[
      { title: "Plantar Fasciitis", description: "Contoured insoles with heel cushioning and arch support for lasting relief." },
      { title: "Diabetic Foot Care", description: "Pressure-mapped inserts and protective footwear to reduce ulcer risk." },
      { title: "Flat Feet & Overpronation", description: "Corrective insoles that realign the foot and reduce knee / hip strain." },
      { title: "Sports Performance", description: "Activity-specific orthoses for running, court sports and cycling." },
    ]}
  />
);
export default CustomOrthoticInsoles;
