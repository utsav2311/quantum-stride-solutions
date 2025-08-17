import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Al Danah", "Abu Dhabi", "United Arab Emirates"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+971 558488759"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Sat-Thu: 9:00 AM - 6:00 PM"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@quantumuae.ae"]
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Youtube, name: "YouTube", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-medical-light/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/5 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary/3 rounded-full animate-float animation-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 hover-scale">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up opacity-0 animation-delay-300">
            Ready to start your journey? Contact us today to schedule your consultation
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-scale-in opacity-0 animation-delay-500"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 stagger-animation">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="text-center hover-lift border-border/50 group relative overflow-hidden">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300">
                    <IconComponent className="text-primary w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors duration-300">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-muted-foreground mb-1 group-hover:text-foreground/80 transition-colors duration-300">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6 animate-fade-in opacity-0 animation-delay-800">
            Follow us on social media for updates and patient success stories
          </p>
          <div className="flex justify-center space-x-4 stagger-animation">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Button 
                  key={index} 
                  variant="ghost" 
                  size="sm" 
                  className="hover-lift group relative overflow-hidden"
                  asChild
                >
                  <a href={social.href} className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    {social.name}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </Button>
              );
            })}
          </div>
        </div>

        {/* Floating Contact CTA */}
        <div className="mt-16 text-center animate-scale-in opacity-0 animation-delay-1200">
          <Card className="max-w-md mx-auto hover-glow border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Need Immediate Assistance?</h3>
              <p className="text-muted-foreground mb-4">Our team is ready to help you</p>
              <Button variant="medical" size="lg" className="w-full hover-lift animate-pulse-slow">
                Call Now: +971 558488759
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;