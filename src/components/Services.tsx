import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import lowerLimbProsthetics from "@/assets/lower-limb-prosthetics.jpg";
import upperLimbProsthetics from "@/assets/upper-limb-prosthetics.jpg";
import customOrthotics from "@/assets/custom-orthotics-service.jpg";
import repairMaintenance from "@/assets/repair-maintenance-service.jpg";
import consultation from "@/assets/consultation-service.jpg";

const Services = () => {
  const services = [
    {
      title: "Lower Limb Prosthetics",
      description: "Advanced below-knee and above-knee prosthetic solutions with microprocessor-controlled components for natural movement.",
      image: lowerLimbProsthetics,
      features: ["Below-knee prosthetics", "Above-knee prosthetics", "Microprocessor knees", "Sports prosthetics"],
      link: "/services/lower-limb-prosthetics"
    },
    {
      title: "Upper Limb Prosthetics",
      description: "Innovative arm and hand prosthetics including myoelectric devices for precise control and functionality.",
      image: upperLimbProsthetics,
      features: ["Myoelectric arms", "Body-powered prosthetics", "Partial hand prosthetics", "Activity-specific devices"],
      link: "/services/upper-limb-prosthetics"
    },
    {
      title: "Custom Orthotics",
      description: "Personalized orthotic devices to support, align, and improve function of movable parts of the body.",
      image: customOrthotics,
      features: ["Spinal orthotics", "Lower limb braces", "Upper limb supports", "Pediatric orthotics"],
      link: "/services/custom-orthotics"
    },
    {
      title: "Repair & Maintenance",
      description: "Comprehensive repair services and regular maintenance to ensure optimal performance of your devices.",
      image: repairMaintenance,
      features: ["Emergency repairs", "Routine maintenance", "Component upgrades", "Warranty services"],
      link: "/services/repair-maintenance"
    },
    {
      title: "Medical Equipments",
      description: "Wholesale Trading of Medical Equipment. Medical and Laboratories Equipments and Apparatuses Installation, Maintenance and Repairing.",
      image: consultation,
      features: ["Medical equipment trading", "Laboratory equipment", "Installation services", "Expert repair services"],
      link: "/services/medical-equipments"
    }
  ];

  return (
    <section id="services" className="pt-0 pb-24 md:pb-32 bg-medical-light/30 relative">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">Our Services</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive prosthetic and orthotic care tailored to your unique needs
          </p>
          <div className="mt-10 w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group border-border/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/70 transition-all duration-300">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to={service.link} className="block">
                  <Button className="w-full relative overflow-hidden">
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
