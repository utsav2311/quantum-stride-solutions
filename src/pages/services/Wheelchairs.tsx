import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/slide-wheelchair.jpg";

const Wheelchairs = () => (
  <ServiceDetailPage
    title="Wheelchairs"
    tagline="Mobility & Seating System"
    description="Manual, powered and sport wheelchairs configured to your body, lifestyle and terrain — with pressure-relieving cushions and postural support built in."
    path="/services/wheelchairs"
    image={img}
    features={["Manual Chairs", "Power Wheelchairs", "Sport Chairs", "Tilt-in-Space"]}
    conditions={[
      { title: "Everyday Mobility", description: "Lightweight folding and rigid frames for home, work and travel." },
      { title: "Power Mobility", description: "Rear, mid and front-wheel drive power chairs with programmable controls." },
      { title: "Tilt & Recline", description: "Pressure-relief systems for full-time users with complex postural needs." },
      { title: "Sport & Recreation", description: "Court, road and off-road chairs tuned for performance." },
    ]}
  />
);
export default Wheelchairs;
