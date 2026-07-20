import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/orthotic-brace.jpg";

const UpperLimbOrthotics = () => (
  <ServiceDetailPage
    title="Upper Limb Orthotics"
    tagline="Orthotics"
    description="Shoulder, elbow, wrist and hand orthoses that stabilize joints, protect healing tissues and restore functional movement after injury or neurological events."
    path="/services/upper-limb-orthotics"
    image={img}
    features={["Wrist-Hand Orthoses", "Elbow Braces", "Shoulder Slings", "Dynamic Splints"]}
    conditions={[
      { title: "Post-Stroke Recovery", description: "Static and dynamic splinting to manage tone and support functional retraining." },
      { title: "Carpal Tunnel & RSI", description: "Wrist supports engineered for daytime function and nighttime rest." },
      { title: "Tendon & Ligament Injuries", description: "Protective bracing that guides safe healing and staged return to activity." },
      { title: "Arthritis Management", description: "Custom-fit thumb spicas and hand orthoses to relieve joint stress." },
    ]}
  />
);
export default UpperLimbOrthotics;
