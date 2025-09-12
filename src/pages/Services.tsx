import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  Settings, 
  Users, 
  Award, 
  Clock, 
  Shield,
  Wrench,
  HeartHandshake,
  Target,
  Zap
} from "lucide-react";

// Import service images
import prosthetics from "@/assets/prosthetics-service.jpg";
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
      link: "/services/lower-limb-prosthetics",
      category: "Prosthetics",
      duration: "4-8 weeks",
      expertise: "Advanced"
    },
    {
      title: "Upper Limb Prosthetics",
      description: "Innovative arm and hand prosthetics including myoelectric devices for precise control and functionality.",
      image: upperLimbProsthetics,
      features: ["Myoelectric arms", "Body-powered prosthetics", "Partial hand prosthetics", "Activity-specific devices"],
      link: "/services/upper-limb-prosthetics",
      category: "Prosthetics",
      duration: "3-6 weeks",
      expertise: "Advanced"
    },
    {
      title: "Custom Orthotics",
      description: "Personalized orthotic devices to support, align, and improve function of movable parts of the body.",
      image: customOrthotics,
      features: ["Spinal orthotics", "Lower limb braces", "Upper limb supports", "Pediatric orthotics"],
      link: "/services/custom-orthotics",
      category: "Orthotics",
      duration: "2-4 weeks",
      expertise: "Standard"
    },
    {
      title: "Repair & Maintenance",
      description: "Comprehensive repair services and regular maintenance to ensure optimal performance of your devices.",
      image: repairMaintenance,
      features: ["Emergency repairs", "Routine maintenance", "Component upgrades", "Warranty services"],
      link: "/services/repair-maintenance",
      category: "Support",
      duration: "1-3 days",
      expertise: "Standard"
    },
    {
      title: "Medical Equipments",
      description: "Wholesale Trading of Medical Equipment. Medical and Laboratories Equipments and Apparatuses Installation, Maintenance and Repairing.",
      image: consultation,
      features: ["Medical equipment trading", "Laboratory equipment", "Installation services", "Expert repair services"],
      link: "/services/medical-equipments",
      category: "Equipment",
      duration: "Varies",
      expertise: "Professional"
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Excellence",
      description: "Board-certified prosthetists and orthotists with decades of experience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Patient-Centered Care",
      description: "Individualized treatment plans tailored to your unique needs and lifestyle"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Latest Technology",
      description: "State-of-the-art materials and cutting-edge manufacturing techniques"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for all devices and services"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "Efficient processes ensuring you get your device when you need it"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Comprehensive follow-up care and adjustment services"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Comprehensive assessment of your needs, medical history, and lifestyle requirements",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Custom Design",
      description: "Precise measurements and 3D modeling to create your personalized device",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Manufacturing",
      description: "Expert craftsmanship using premium materials and advanced techniques",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Fitting & Training",
      description: "Professional fitting with comprehensive training and adjustment",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      step: 5,
      title: "Follow-up Care",
      description: "Ongoing support, maintenance, and adjustments as needed",
      icon: <HeartHandshake className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${researchBackground})`}}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-lg px-4 py-2">
              Comprehensive Healthcare Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-up">
              From advanced prosthetics to custom orthotics, we provide complete solutions for enhanced mobility and independence
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 bg-medical-light/30">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-700 hover:-translate-y-3 border-border/50 animate-fade-in opacity-0 relative overflow-hidden hover:shadow-2xl hover:shadow-primary/10" style={{animationDelay: `${index * 150}ms`}}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90">
                      {service.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl text-primary group-hover:text-primary/90 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <Badge variant={service.expertise === "Advanced" ? "default" : "secondary"}>
                      {service.expertise}
                    </Badge>
                  </div>
                  <CardDescription className="text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/70 transition-all duration-300">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 transform group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.link}>
                    <Button className="w-full transform hover:scale-105 transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Quantum Medical</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expertise, technology, and compassion to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50" style={{animationDelay: `${index * 100}ms`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 md:py-24 bg-medical-light/20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach ensuring the best possible outcome for every patient
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent hidden lg:block"></div>
            
            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12 gap-6`}>
                  <div className="flex-1 lg:text-right text-center">
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mr-4">
                          {step.icon}
                        </div>
                        <Badge variant="default" className="px-4 py-2">
                          Step {step.step}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-semibold text-primary mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </Card>
                  </div>
                  
                  <div className="hidden lg:flex w-12 h-12 bg-primary text-white rounded-full items-center justify-center font-bold text-lg z-10 border-4 border-background">
                    {step.step}
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-primary/20 to-accent/20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experts and take the first step towards enhanced mobility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;