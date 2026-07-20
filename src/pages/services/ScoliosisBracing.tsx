import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/slide-spinal-brace.jpg";

const ScoliosisBracing = () => (
  <ServiceDetailPage
    title="Scoliosis Bracing"
    tagline="Pediatric Care"
    description="Custom scoliosis braces — Boston, Rigo-Chêneau and nighttime designs — engineered to halt curve progression during your child's growth years."
    path="/services/scoliosis-bracing"
    image={img}
    features={["Boston Brace", "Rigo-Chêneau", "Providence Nighttime", "3D CAD Design"]}
    conditions={[
      { title: "Adolescent Idiopathic Scoliosis", description: "Full-time TLSO bracing tuned to Cobb angle and skeletal maturity." },
      { title: "Early Onset Scoliosis", description: "Growth-friendly bracing paired with pediatric orthopedic care." },
      { title: "Nighttime Bracing", description: "Providence-style overcorrection braces worn only during sleep." },
      { title: "Progress Monitoring", description: "In-brace X-ray reviews and adjustments to keep correction on track." },
    ]}
  />
);
export default ScoliosisBracing;
