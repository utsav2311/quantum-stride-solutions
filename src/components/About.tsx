import { Card, CardContent } from "@/components/ui/card";
import { TextReveal } from "@/components/animations";
import { Target, Compass } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Our Vision",
      description:
        "To be the definitive Clinical Performance Authority — known not for the device, but for the guaranteed, measurable outcome achieved through technological precision and proactive patient partnership.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Our Mission",
      description:
        "To restore, enhance and sustain our patients’ functional potential by integrating global-gold-standard clinical expertise with additive manufacturing precision and a proactive, outcome-driven partnership model.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-7">
            <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">
              Welcome to Quantum Medical
            </p>
            <TextReveal stagger delay={150}>
              <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8">
                Advanced <span className="italic text-accent">prosthetic</span> &<br />
                <span className="italic text-accent">orthotic</span> care.
              </h2>
            </TextReveal>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl">
              Quantum Medical offers prosthetic and orthotic solutions for hospitals, clinics and rehabilitation partners — providing advanced care for kids and adults using GAIT analysis, CAD/CAM systems and 3D printing to create custom devices that deliver superior comfort, accuracy and durability.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-foreground/80 text-lg max-w-2xl">
              "Each step forward is supported by thoughtful engineering and genuine care."
            </blockquote>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {pillars.map((f, i) => (
              <Card
                key={i}
                className="group border-border/60 hover:border-accent transition-all duration-500 hover:-translate-y-1 hover:shadow-xl bg-card"
              >
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-500">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
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
