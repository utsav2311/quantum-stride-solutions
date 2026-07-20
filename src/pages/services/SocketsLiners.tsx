import ServiceDetailPage from "@/components/ServiceDetailPage";
import img from "@/assets/prosthetic-professional.jpg";

const SocketsLiners = () => (
  <ServiceDetailPage
    title="Sockets & Liners"
    tagline="Prosthetics"
    description="Custom-fabricated prosthetic sockets and silicone liners engineered for a precise, comfortable and secure interface between the residual limb and the prosthesis."
    path="/services/sockets-liners"
    image={img}
    features={["Custom Sockets", "Silicone Liners", "Suction Suspension", "Pressure Relief"]}
    conditions={[
      { title: "Transtibial Sockets", description: "Total surface bearing and PTB sockets shaped from digital or plaster casts." },
      { title: "Transfemoral Sockets", description: "Ischial containment and MAS designs tuned for stability and comfort." },
      { title: "Silicone & Gel Liners", description: "Cushioning liners that reduce shear, manage volume and protect skin." },
      { title: "Suspension Solutions", description: "Pin-lock, suction, vacuum and lanyard systems matched to your activity." },
    ]}
  />
);
export default SocketsLiners;
