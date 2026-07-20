import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/clinic-background.jpg";

const WalkersStandingFrames = () => (
  <ServiceDetailPage
    title="Walkers & Standing Frames"
    tagline="Mobility & Seating System"
    description="Rollators, gait trainers and standing frames that support weight-bearing, balance training and safe daily ambulation for children and adults."
    path="/services/walkers-standing-frames"
    image={img}
    features={["Rollators", "Gait Trainers", "Standing Frames", "Parallel Bars"]}
    conditions={[
      { title: "Balance & Stability", description: "Four-wheel rollators and posterior walkers for confident everyday walking." },
      { title: "Rehabilitation", description: "Adjustable gait trainers used across neuro and ortho rehab programs." },
      { title: "Weight-Bearing Therapy", description: "Prone, supine and upright standers for bone density and circulation." },
      { title: "Home & Clinic Setups", description: "Parallel bars and support rails configured for your space." },
    ]}
  />
);
export default WalkersStandingFrames;
