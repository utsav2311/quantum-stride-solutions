import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    <section id="services" className="py-20 bg-medical-light/30 relative overflow-hidden">
      {/* Research Background Overlay */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${researchBackground})`}}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/5 rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-primary/3 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 transform hover:scale-105 transition-all duration-300">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive prosthetic and orthotic care tailored to your unique needs
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-fade-in" style={{animationDelay: '500ms'}}></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-card transition-all duration-700 hover:-translate-y-3 border-border/50 animate-fade-in opacity-0 relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10`} style={{animationDelay: `${index * 150 + 400}ms`}}>
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating Icon Animation */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-t-lg group">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-[120%] h-48 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 -mx-[10%] filter group-hover:brightness-110"
                />
                
                {/* Image Overlay Effect */}
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
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/70 transition-all duration-300" style={{transitionDelay: `${featureIndex * 50}ms`}}>
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 transform group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to={service.link}>
                  <Button className="w-full transform hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn">
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
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