import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/slide-spinal-brace.jpg";

const SpineBackBraces = () => (
  <ServiceDetailPage
    title="Spine & Back Braces"
    tagline="Orthotics"
    description="Custom spinal orthoses designed to correct alignment, offload injured segments, and provide comfortable long-term support for scoliosis, kyphosis, and post-surgical recovery."
    path="/services/spine-back-braces"
    image={img}
    features={["TLSO Braces", "LSO Support", "Scoliosis Correction", "Cervical Collars"]}
    conditions={[
      { title: "Scoliosis Bracing", description: "Boston, Rigo-Chêneau and Milwaukee style bracing tailored to curve type and growth stage." },
      { title: "Kyphosis Support", description: "Postural extension orthoses for adolescent and adult kyphosis." },
      { title: "Post-Surgical Stabilization", description: "Rigid TLSO / LSO bracing to protect fusion or fracture repair sites." },
      { title: "Chronic Low Back Pain", description: "Semi-rigid lumbar supports for pain relief and activity return." },
    ]}
  />
);
export default SpineBackBraces;
