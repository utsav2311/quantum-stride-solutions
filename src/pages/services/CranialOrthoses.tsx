import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/orthotic-brace.jpg";

const CranialOrthoses = () => (
  <ServiceDetailPage
    title="Cranial Orthoses"
    tagline="Pediatric Care"
    description="Custom cranial remolding helmets that gently guide infant head shape correction for plagiocephaly, brachycephaly and scoliocephaly during the rapid growth window."
    path="/services/cranial-orthoses"
    image={img}
    features={["3D Scan Fitting", "Lightweight Shell", "Breathable Liner", "Growth Monitoring"]}
    conditions={[
      { title: "Plagiocephaly", description: "Corrective helmets for flattening on one side of the infant's head." },
      { title: "Brachycephaly", description: "Remolding therapy for broad, flattened back-of-head presentations." },
      { title: "Scaphocephaly", description: "Post-surgical helmets following sagittal synostosis correction." },
      { title: "Growth Tracking", description: "Regular scans and adjustments through the treatment cycle." },
    ]}
  />
);
export default CranialOrthoses;
