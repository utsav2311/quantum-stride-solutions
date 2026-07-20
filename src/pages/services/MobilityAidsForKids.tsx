import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/slide-wheelchair.jpg";

const MobilityAidsForKids = () => (
  <ServiceDetailPage
    title="Mobility Aids for Kids"
    tagline="Pediatric Care"
    description="Standers, gait trainers, pediatric wheelchairs and seating systems that empower children to explore, learn and play at every stage of development."
    path="/services/mobility-aids-for-kids"
    image={img}
    features={["Pediatric Wheelchairs", "Gait Trainers", "Standing Frames", "Activity Chairs"]}
    conditions={[
      { title: "Gait Training", description: "Posterior and anterior gait trainers to build strength and coordination." },
      { title: "Postural Support", description: "Adaptive seating that promotes head control, alignment and engagement." },
      { title: "Weight Bearing", description: "Prone, supine and upright standers to support bone and hip health." },
      { title: "Play & Learning", description: "Activity chairs sized for classroom, home and therapy settings." },
    ]}
  />
);
export default MobilityAidsForKids;
