import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Printer, Cpu, ScanLine, Layers, Zap, Bot } from "lucide-react";

const tech = [
  { icon: Printer, title: "3D Printing", desc: "Rapid, precise fabrication of sockets and custom components using medical-grade polymers." },
  { icon: Cpu, title: "CAD/CAM Design", desc: "Computer-aided design and manufacturing for perfect, repeatable fits every time." },
  { icon: ScanLine, title: "Digital Scanning", desc: "Contactless 3D scanning captures anatomy in seconds — no more messy plaster casts." },
  { icon: Layers, title: "Carbon Fiber", desc: "Lightweight, high-strength carbon-fiber prosthetics for athletes and active users." },
  { icon: Bot, title: "Microprocessor Knees", desc: "AI-driven knee joints that learn your gait and adapt to terrain in real time." },
  { icon: Zap, title: "Myoelectric Hands", desc: "Muscle-signal controlled hands with individually powered fingers." },
];

const Technology = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Technology</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6">
          Where craftsmanship meets <span className="text-primary">innovation</span>.
        </h1>
        <p className="text-lg text-muted-foreground">The same tools trusted by leading rehabilitation centers worldwide — right here in Dubai.</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tech.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent grid place-items-center mb-5 shadow-medical">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">{t.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Technology;
