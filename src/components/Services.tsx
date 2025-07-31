import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import prosthetics from "@/assets/prosthetics-service.jpg";
import orthotics from "@/assets/orthotics-service.jpg";
import consultation from "@/assets/consultation-service.jpg";

const Services = () => {
  const services = [
    {
      title: "Lower Limb Prosthetics",
      description: "Advanced below-knee and above-knee prosthetic solutions with microprocessor-controlled components for natural movement.",
      image: prosthetics,
      features: ["Below-knee prosthetics", "Above-knee prosthetics", "Microprocessor knees", "Sports prosthetics"]
    },
    {
      title: "Upper Limb Prosthetics",
      description: "Innovative arm and hand prosthetics including myoelectric devices for precise control and functionality.",
      image: prosthetics,
      features: ["Myoelectric arms", "Body-powered prosthetics", "Partial hand prosthetics", "Activity-specific devices"]
    },
    {
      title: "Custom Orthotics",
      description: "Personalized orthotic devices to support, align, and improve function of movable parts of the body.",
      image: orthotics,
      features: ["Spinal orthotics", "Lower limb braces", "Upper limb supports", "Pediatric orthotics"]
    },
    {
      title: "Repair & Maintenance",
      description: "Comprehensive repair services and regular maintenance to ensure optimal performance of your devices.",
      image: consultation,
      features: ["Emergency repairs", "Routine maintenance", "Component upgrades", "Warranty services"]
    },
    {
      title: "Medical Equipments",
      description: "Wholesale Trading of Medical Equipment. Medical and Laboratories Equipments and Apparatuses Installation, Maintenance and Repairing.",
      image: consultation,
      features: ["Medical equipment trading", "Laboratory equipment", "Installation services", "Expert repair services"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 transform hover:scale-105 transition-all duration-300">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive prosthetic and orthotic care tailored to your unique needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-border/50 animate-fade-in opacity-0`} style={{animationDelay: `${index * 200 + 300}ms`}}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;