import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: "🔬",
      title: "Advanced Technology",
      description: "Using cutting-edge 3D printing, CAD design, and the latest materials in prosthetics and orthotics."
    },
    {
      icon: "👨‍⚕️",
      title: "Expert Team",
      description: "Certified prosthetists and orthotists with decades of combined experience and ongoing education."
    },
    {
      icon: "🎯",
      title: "Personalized Care",
      description: "Every device is custom-designed and fitted to your unique anatomy and lifestyle needs."
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description: "Comprehensive follow-up care, adjustments, and maintenance to ensure optimal performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Advancing Lives Through Innovation
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Quantum Medical, we believe that mobility is a fundamental right. Our mission is to provide 
              world-class prosthetic and orthotic solutions that not only restore function but enhance quality of life.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience serving our community, we've helped hundreds of individuals 
              regain their independence and confidence. Our state-of-the-art facility combines traditional 
              craftsmanship with modern technology to deliver unparalleled results.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Certified by the American Board for Certification</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Accredited facility with latest safety standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Insurance accepted and financial assistance available</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;