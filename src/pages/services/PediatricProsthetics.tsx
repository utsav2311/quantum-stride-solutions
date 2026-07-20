import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/prosthetic-professional.jpg";

const PediatricProsthetics = () => (
  <ServiceDetailPage
    title="Pediatric Prosthetics"
    tagline="Pediatric Care"
    description="Adjustable, lightweight prostheses designed for growing children — with playful designs and components that adapt from crawling to competing."
    path="/services/pediatric-prosthetics"
    image={img}
    features={["Growth-Adjustable Sockets", "Activity Feet", "Myoelectric Hands", "Custom Cover Art"]}
    conditions={[
      { title: "Congenital Limb Differences", description: "First fittings from as early as 6 months of age when developmentally ready." },
      { title: "Traumatic Amputation", description: "Rapid rehabilitation prostheses that keep pace with school and play." },
      { title: "Growth Accommodation", description: "Modular sockets and components sized up as your child grows." },
      { title: "Sport & Play", description: "Running feet, swim attachments and everyday activity legs and arms." },
    ]}
  />
);
export default PediatricProsthetics;
