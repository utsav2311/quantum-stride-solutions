import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/clinic-background.jpg";

const WalkerCanesCrutches = () => (
  <ServiceDetailPage
    title="Walker Canes & Crutches"
    tagline="Mobility & Seating System"
    description="Walkers, canes, crutches and rollators fitted to your height, strength and lifestyle — for safe daily walking, rehabilitation and long-term independence."
    path="/services/walker-canes-crutches"
    image={img}
    features={["Rollators & Walkers", "Forearm Crutches", "Underarm Crutches", "Adjustable Canes"]}
    conditions={[
      { title: "Post-Surgical Recovery", description: "Short-term walking aids for hip, knee and lower limb surgeries." },
      { title: "Balance & Stability", description: "Four-wheel rollators and quad canes for confident everyday walking." },
      { title: "Long-Term Ambulation", description: "Forearm crutches sized and tuned for daily use over years." },
      { title: "Height & Grip Fitting", description: "Precise adjustment for wrist alignment, comfort and injury prevention." },
    ]}
  />
);
export default WalkerCanesCrutches;
