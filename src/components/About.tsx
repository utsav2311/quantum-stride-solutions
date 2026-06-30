import { Card, CardContent } from "@/components/ui/card";
import { TextReveal } from "@/components/animations";

const About = () => {
  const features = [
    {
      icon: "👨‍⚕️",
      title: "Certified Professionals",
      description: "DOH and DHA certified clinicians with decades of combined experience.",
    },
    {
      icon: "🔬",
      title: "Advanced Technology",
      description: "3D scanning and CAD/CAM manufacturing for a perfect, repeatable fit.",
    },
    {
      icon: "💙",
      title: "Patient-Centered Care",
      description: "Personalized treatment plans and ongoing support for life beyond the clinic.",
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
              About Quantum Medical
            </p>
            <TextReveal stagger delay={150}>
              <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8">
                Built for <span className="italic text-accent">movement</span>.<br />
                Engineered for <span className="italic text-accent">life</span>.
              </h2>
            </TextReveal>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl">
              With years of experience in prosthetics and orthotics, Quantum Medical
              combines traditional craftsmanship with the most advanced scan-to-build
              technology available — so every device fits the person, not the other way around.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-foreground/80 text-lg max-w-2xl">
              "Every patient walks out with more than a device — they walk out with confidence."
            </blockquote>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {features.map((f, i) => (
              <Card
                key={i}
                className="group border-border/60 hover:border-accent transition-all duration-500 hover:-translate-y-1 hover:shadow-xl bg-card"
              >
                <CardContent className="p-6 flex items-start gap-5">
                  <div className="text-3xl shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
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
