import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/orthotic-brace.jpg";

const PediatricOrthotics = () => (
  <ServiceDetailPage
    title="Pediatric Orthotics"
    tagline="Pediatric Care"
    description="Growth-friendly bracing for children — spinal, lower and upper limb orthoses designed for comfort, adjustability and playful daily wear."
    path="/services/pediatric-orthotics"
    image={img}
    features={["Pediatric AFOs", "Scoliosis Bracing", "SMOs & DAFOs", "Cranial Helmets"]}
    conditions={[
      { title: "Cerebral Palsy", description: "AFOs and SMOs tuned to tone patterns and developmental milestones." },
      { title: "Idiopathic Scoliosis", description: "Boston and Rigo-Chêneau style braces for growing spines." },
      { title: "Plagiocephaly", description: "Cranial remolding helmets for early infant head-shape correction." },
      { title: "Toe Walking & Gait Issues", description: "Dynamic AFOs that guide heel-strike and normalize gait." },
    ]}
  />
);
export default PediatricOrthotics;
