import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggeredGrid } from "@/components/animations";
import { Stethoscope, Cpu, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: "Clinical Pathway",
    points: [
      "Rapid assessment of needs",
      "Functional & gait evaluation",
      "Prescription of optimal device",
      "Clear guidance before fabrication",
    ],
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Digital Workflow",
    points: [
      "High-accuracy 3D scanning",
      "CAD/CAM-based design",
      "Digital fit verification",
      "Fast in-house fabrication",
    ],
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Quality & Compliance",
    points: [
      "Rigorous fit checks",
      "Structural & material validation",
      "Standards-aligned review",
      "Final clinical approval",
    ],
  },
];

const HowWeWork = () => (
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection animation="slide-up" duration="slow" className="max-w-3xl mb-16">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">How We Work</p>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-4">
          An <span className="italic text-accent">all-inclusive</span> approach.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          From first assessment to final clinical approval — every stage is engineered for precision and comfort.
        </p>
      </AnimatedSection>

      <StaggeredGrid className="grid md:grid-cols-3 gap-6" staggerDelay={120} animation="slide-up">
        {steps.map((s, i) => (
          <Card key={i} className="border-border/60 hover:border-accent transition-all duration-500 hover:-translate-y-2 hover:shadow-xl bg-card">
            <CardContent className="p-8">
              <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-start text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </StaggeredGrid>
    </div>
  </section>
);

export default HowWeWork;
