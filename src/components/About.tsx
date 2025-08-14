import { Card, CardContent } from "@/components/ui/card";
import workshopBackground from "@/assets/workshop-background.jpg";
import rehabilitationBackground from "@/assets/rehabilitation-background.jpg";

const About = () => {
  const features = [
    {
      icon: "👨‍⚕️",
      title: "Certified Professionals",
      description: "Department of Head (DOH) certified clinician and Dubai Health Authority (DHA) certified clinician"
    },
    {
      icon: "🔬",
      title: "Advanced Technology",
      description: "3D scanning and CAD/CAM manufacturing"
    },
    {
      icon: "💙",
      title: "Patient-Centered Care",
      description: "Personalized treatment plans and ongoing support"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center" style={{backgroundImage: `url(${workshopBackground})`}}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center" style={{backgroundImage: `url(${rehabilitationBackground})`}}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 transform hover:scale-105 transition-all duration-300">
              About Quantum Medical
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over vast experience in the field of prosthetics and orthotics, 
              Quantum Medical has been at the forefront of innovative mobility 
              solutions. Our state-of-the-art facility combines traditional 
              craftsmanship with cutting-edge technology.
            </p>
            
            {/* Additional background image for credibility */}
            <div className="relative p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/20 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg"></div>
              <p className="relative text-muted-foreground italic">
                "Our commitment to excellence ensures every patient receives personalized care and the most advanced prosthetic and orthotic solutions available."
              </p>
            </div>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className={`group hover:shadow-card transition-all duration-500 hover:-translate-y-1 border-border/50 animate-fade-in opacity-0 transform hover:rotate-1 hover:shadow-2xl`} style={{animationDelay: `${index * 150 + 500}ms`}}>
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