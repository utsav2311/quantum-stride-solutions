import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/prosthetic-leg.jpg";

const SportsProsthetics = () => (
  <ServiceDetailPage
    title="Sports Prosthetics"
    tagline="Prosthetics"
    description="High-performance running blades, swim legs and activity-specific prosthetic components engineered for athletes at every level."
    path="/services/sports-prosthetics"
    image={img}
    features={["Running Blades", "Swim Prostheses", "Cycling Attachments", "Multi-Sport Sockets"]}
    conditions={[
      { title: "Recreational Running", description: "Energy-storing blades matched to your weight class and pace." },
      { title: "Competitive Athletics", description: "Custom sockets and category-specific blades for track and field." },
      { title: "Water Sports", description: "Corrosion-resistant swim legs and boards attachments." },
      { title: "Cycling & Gym", description: "Interchangeable feet and adapters for cardio and strength training." },
    ]}
  />
);
export default SportsProsthetics;
