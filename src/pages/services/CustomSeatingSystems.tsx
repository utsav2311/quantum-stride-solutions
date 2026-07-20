import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/rehabilitation-background.jpg";

const CustomSeatingSystems = () => (
  <ServiceDetailPage
    title="Custom Seating Systems"
    tagline="Mobility & Seating System"
    description="Molded backs, contoured cushions and postural support systems that manage pressure, stabilize posture and unlock function in wheelchair users."
    path="/services/custom-seating-systems"
    image={img}
    features={["Molded Seating", "Pressure Cushions", "Lateral Supports", "Head & Neck Support"]}
    conditions={[
      { title: "Pressure Management", description: "Air, foam and hybrid cushions matched to your pressure-mapping results." },
      { title: "Complex Postural Needs", description: "Custom contoured backs for scoliosis, kyphosis and pelvic obliquity." },
      { title: "Head & Trunk Control", description: "Lateral, medial and head supports for stability and endurance." },
      { title: "Simulator Assessments", description: "Trial-based fittings to confirm the right system before you commit." },
    ]}
  />
);
export default CustomSeatingSystems;
