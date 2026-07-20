import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/prosthetic-arm.jpg";

const CosmeticProsthetics = () => (
  <ServiceDetailPage
    title="Cosmetic Prosthetics"
    tagline="Prosthetics"
    description="Lifelike silicone restorations for fingers, hands, feet and facial features — hand-painted to match skin tone, freckles and nail detail."
    path="/services/cosmetic-prosthetics"
    image={img}
    features={["Silicone Fingers", "Partial Hand Restorations", "Toe Prostheses", "Facial Prosthetics"]}
    conditions={[
      { title: "Finger & Partial Hand Loss", description: "Hand-sculpted silicone digits with vein and fingerprint detail." },
      { title: "Toe & Foot Restorations", description: "Cosmetic toe fillers that restore balance and footwear fit." },
      { title: "Facial Prosthetics", description: "Ear, nose and orbital prostheses retained by adhesive or implants." },
      { title: "Passive Cosmetic Arms", description: "Lightweight cosmetic arms designed for social and dress-wear needs." },
    ]}
  />
);
export default CosmeticProsthetics;
