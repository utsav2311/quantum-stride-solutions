import { AnimatedSection, StaggeredGrid } from "@/components/animations";
import { Scan, Factory, Sparkles, Printer, ShieldCheck, Lightbulb } from "lucide-react";

const items = [
  {
    icon: <Scan className="w-8 h-8" />,
    title: "Fully digital precision",
    desc: "3D scanning + CAD/CAM for unmatched accuracy. In-house from start to finish.",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "End-to-end in-house manufacturing",
    desc: "Faster delivery, zero outsourcing delays.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Truly custom-designed devices",
    desc: "Tailored to anatomy, lifestyle and goals.",
  },
  {
    icon: <Printer className="w-8 h-8" />,
    title: "Cutting-edge 3D printing",
    desc: "Lightweight, durable and high-performance outcomes.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Consistent quality control",
    desc: "Rigorous testing at every step.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovative design philosophy",
    desc: "Blending technology, comfort and functionality.",
  },
];

const WhyChooseUs = () => (
  <section className="py-24 md:py-32 bg-xtreme-dark text-white relative overflow-hidden">
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection animation="slide-up" duration="slow" className="max-w-3xl mb-16">
        <p className="text-sm tracking-[0.3em] text-accent font-bold mb-4 uppercase">Why Choose Us</p>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-4">
          Leading the future of <span className="italic text-accent">custom mobility</span>.
        </h2>
      </AnimatedSection>

      <StaggeredGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={100} animation="slide-up">
        {items.map((it, i) => (
          <div
            key={i}
            className="group border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 hover:border-accent/60 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-14 h-14 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-500">
              {it.icon}
            </div>
            <h3 className="font-playfair text-xl font-extrabold mb-3">{it.title}</h3>
            <p className="text-white/65 leading-relaxed text-sm">{it.desc}</p>
          </div>
        ))}
      </StaggeredGrid>
    </div>
  </section>
);

export default WhyChooseUs;
