import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggeredGrid, ParticleSystem } from "@/components/animations";
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
    <section id="services" className="pt-24 pb-24 md:pb-32 bg-background relative overflow-hidden">
      <ParticleSystem count={12} className="opacity-20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <AnimatedSection animation="slide-up" duration="slow" className="max-w-4xl mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">What We Do</p>
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05] text-foreground">
            Solutions that <span className="italic text-accent">move with you</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Comprehensive prosthetic and orthotic care, custom-built around your body and your life.
          </p>
        </AnimatedSection>

        <StaggeredGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl" staggerDelay={120} animation="slide-up">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border border-border/60 bg-card rounded-2xl hover:border-accent/60 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative overflow-hidden h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 text-xs tracking-widest text-accent font-semibold bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                  0{index + 1}
                </span>
              </div>

              <CardHeader className="relative z-10 pb-3">
                <CardTitle className="text-2xl font-playfair text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <span aria-hidden>→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
};

export default Services;

