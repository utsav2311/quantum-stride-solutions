import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/prosthetic-arm.jpg";

const SiliconeRestoration = () => (
  <ServiceDetailPage
    title="Silicone Restoration"
    tagline="Prosthetics"
    description="Hyper-realistic silicone restorations hand-painted to match your skin tone, veins and fingerprints — restoring appearance, confidence and everyday function."
    path="/services/silicone-restoration"
    image={img}
    features={["Fingers & Partial Hands", "Full Hand Restorations", "Toe & Foot Prostheses", "Facial Prosthetics"]}
    conditions={[
      { title: "Digit Restoration", description: "Individually sculpted silicone fingers with lifelike nails and skin detail." },
      { title: "Partial & Full Hand", description: "Passive silicone hands that restore symmetry and social confidence." },
      { title: "Toe & Foot Cosmetics", description: "Custom toe fillers and foot restorations that improve balance and footwear fit." },
      { title: "Ear, Nose & Orbital", description: "Facial prostheses retained by medical adhesive or osseointegrated implants." },
    ]}
  />
);
export default SiliconeRestoration;
