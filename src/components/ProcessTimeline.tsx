import { AnimatedSection } from "@/components/animations";
import { Stethoscope, ClipboardCheck, ScanLine, Cog, Ruler, Activity, HeartPulse } from "lucide-react";

const steps = [
  { icon: Stethoscope, title: "Consultation", desc: "Free initial consultation with certified specialists to understand your needs." },
  { icon: ClipboardCheck, title: "Assessment", desc: "Comprehensive clinical & biomechanical assessment tailored to your lifestyle." },
  { icon: ScanLine, title: "Digital Scanning", desc: "3D scanning and CAD modelling for a precise, repeatable fit." },
  { icon: Cog, title: "Manufacturing", desc: "In-house fabrication using carbon fiber, silicone and premium components." },
  { icon: Ruler, title: "Fitting", desc: "Precision fitting sessions with real-time adjustments for comfort." },
  { icon: Activity, title: "Rehabilitation", desc: "Guided gait training and physiotherapy to help you move naturally." },
  { icon: HeartPulse, title: "Follow-up Care", desc: "Lifelong support with regular reviews, tune-ups and upgrades." },
];

const ProcessTimeline = () => (
  <section id="process" className="py-24 md:py-32 bg-secondary/40 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Our Process</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
          A clear path from <span className="text-primary">consultation</span> to <span className="text-accent">confidence</span>.
        </h2>
        <p className="text-lg text-muted-foreground">Every patient follows a proven seven-step journey designed for lasting results.</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-transparent" />
        <div className="space-y-10 md:space-y-16">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isLeft = i % 2 === 0;
            return (
              <AnimatedSection key={i} animation={isLeft ? "slide-right" : "slide-left"} delay={i * 60}>
                <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${isLeft ? "" : "md:[direction:rtl]"}`}>
                  <div className={`md:[direction:ltr] ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                    <div className="inline-flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-bold">{i + 1}</span>
                      <h3 className="text-2xl font-display font-semibold text-foreground">{s.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-md md:ml-auto">{s.desc}</p>
                  </div>
                  <div className="hidden md:flex md:[direction:ltr] justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent grid place-items-center shadow-medical">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessTimeline;
