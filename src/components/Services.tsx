import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggeredGrid, MicroInteraction, ParticleSystem, TextReveal, FloatingElements } from "@/components/animations";
import prosthetics from "@/assets/prosthetics-service.jpg";
import prostheticProfessional from "@/assets/prosthetic-professional.jpg";
import orthotics from "@/assets/orthotics-service.jpg";
import consultation from "@/assets/consultation-service.jpg";
import repairMaintenance from "@/assets/repair-maintenance-service.jpg";
import lowerLimbProsthetics from "@/assets/lower-limb-prosthetics.jpg";
import upperLimbProsthetics from "@/assets/upper-limb-prosthetics.jpg";
import customOrthotics from "@/assets/custom-orthotics-service.jpg";
import researchBackground from "@/assets/research-background.jpg";

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
    <section id="services" className="py-24 md:py-32 bg-medical-light/30 relative overflow-hidden">
      {/* Particle System */}
      <ParticleSystem count={30} />
      
      {/* Enhanced Floating Elements */}
      <FloatingElements count={15} />
      
      {/* Research Background Overlay with Animation */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-cover bg-center animate-floating-horizontal" style={{backgroundImage: `url(${researchBackground})`}}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
      
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-morphing" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/5 rounded-full animate-floating-horizontal" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-primary/3 rounded-full animate-wave" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-accent/4 rounded-full animate-pulse-slow" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <AnimatedSection animation="fade-in" className="text-center mb-20 md:mb-24">
          <TextReveal stagger delay={200}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 animate-floating-horizontal">Our Services</h2>
          </TextReveal>
          <TextReveal delay={600}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive prosthetic and orthotic care tailored to your unique needs
            </p>
          </TextReveal>
          <div className="mt-10 w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-scale-in opacity-0 animation-delay-800"></div>
        </AnimatedSection>
        
        <StaggeredGrid 
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-7xl mx-auto"
          animation="scale-in"
          staggerDelay={150}
        >
          {services.map((service, index) => (
            <MicroInteraction key={index} type="lift" intensity="normal">
              <Card className="group hover:shadow-card transition-all duration-700 border-border/50 relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 hover:rotate-1 hover:scale-105 hover-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden rounded-t-lg group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 animate-floating-horizontal"
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
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 transform group-hover:scale-125 transition-transform duration-300 group-hover:animate-elastic-bounce"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.link} className="block">
                    <Button variant="magnetic" className="w-full group/btn relative overflow-hidden">
                      <span className="relative z-10 group-hover/btn:animate-wave">Learn More</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </MicroInteraction>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
};

export default Services;