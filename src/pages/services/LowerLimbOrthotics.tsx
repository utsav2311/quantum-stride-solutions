import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/orthotics-service.jpg";

const LowerLimbOrthotics = () => (
  <ServiceDetailPage
    title="Lower Limb Orthotics"
    tagline="Orthotics"
    description="AFOs, KAFOs and knee orthoses that improve gait, prevent falls and support patients with neurological, orthopedic or post-surgical needs."
    path="/services/lower-limb-orthotics"
    image={img}
    features={["AFO Bracing", "KAFO Systems", "Knee Braces", "Drop-Foot Solutions"]}
    conditions={[
      { title: "Drop Foot", description: "Custom AFOs and carbon fiber dynamic braces for clearance and push-off." },
      { title: "Post-Polio & Neuromuscular", description: "KAFO bracing with locking or stance-control knee joints." },
      { title: "Ligament Instability", description: "Functional knee braces for ACL, PCL and multi-ligament injuries." },
      { title: "Osteoarthritis Offloading", description: "Unloader knee braces designed to reduce compartmental pain." },
    ]}
  />
);
export default LowerLimbOrthotics;
