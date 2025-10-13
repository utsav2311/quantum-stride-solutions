import { Card, CardContent } from "@/components/ui/card";
import workshopBackground from "@/assets/workshop-background.jpg";
import rehabilitationBackground from "@/assets/rehabilitation-background.jpg";
import { FloatingElements, TextReveal } from "@/components/animations";

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
      {/* Enhanced Background Elements */}
      <FloatingElements count={10} />
      
      {/* Animated Floating Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/5 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/3 rounded-full animate-float animation-delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-accent/4 rounded-full animate-float animation-delay-700"></div>
      </div>
      
      {/* Background Images with Enhanced Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center animate-floating-horizontal" style={{backgroundImage: `url(${workshopBackground})`}}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center animate-wave animation-delay-1000" style={{backgroundImage: `url(${rehabilitationBackground})`}}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-16 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <TextReveal stagger delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-fade-in transform hover:scale-105 transition-all duration-300">
                About Quantum Medical
              </h2>
            </TextReveal>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over vast experience in the field of prosthetics and orthotics, 
              Quantum Medical has been at the forefront of innovative mobility 
              solutions. Our state-of-the-art facility combines traditional 
              craftsmanship with cutting-edge technology.
            </p>
            
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8"></div>
            
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
              <Card key={index} className={`group hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-border/50 animate-fade-in opacity-0 transform hover:rotate-2 hover:scale-105 hover:shadow-2xl hover-glow relative overflow-hidden`} style={{animationDelay: `${index * 150 + 500}ms`}}>
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300 group-hover:animate-elastic-bounce animate-floating-horizontal">
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