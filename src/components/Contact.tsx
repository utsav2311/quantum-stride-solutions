import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Al Danah", "Abu Dhabi", "United Arab Emirates"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+971 55 848 8759"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Sat-Thu: 9:00 AM - 6:00 PM"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@quantumuae.ae"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Youtube, name: "YouTube", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">
            Get In Touch
          </p>
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6">
            Let's <span className="italic text-accent">connect</span>.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ready to start your journey? Reach out and our clinical team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16 max-w-7xl">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="group border-border/60 hover:border-accent transition-all duration-500 hover:-translate-y-1 hover:shadow-xl bg-card"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 mb-5">
                    <Icon className="text-accent group-hover:text-accent-foreground w-6 h-6 transition-colors duration-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl items-stretch">
          <Card className="border-border/60 bg-card">
            <CardContent className="p-8 md:p-10">
              <p className="text-xs tracking-[0.3em] text-accent font-semibold mb-3 uppercase">
                Follow Us
              </p>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Stories from the clinic.
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Updates, patient milestones and behind-the-scenes glimpses from our team.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="group border-border/60 hover:border-accent hover:text-accent"
                      asChild
                    >
                      <a href={social.href} className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {social.name}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
            <CardContent className="p-8 md:p-10 relative z-10 flex flex-col h-full">
              <p className="text-xs tracking-[0.3em] text-accent font-semibold mb-3 uppercase">
                Immediate Assistance
              </p>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Speak with our team <span className="italic text-accent">today</span>.
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have an urgent question or need a same-week consultation? We're one call away.
              </p>
              <Button variant="medical" size="lg" className="mt-auto">
                Call Now: +971 55 848 8759
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
