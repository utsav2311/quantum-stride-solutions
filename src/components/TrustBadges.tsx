import { Cpu, HeartHandshake, ShieldCheck } from "lucide-react";

const badges = [
  {
    icon: Cpu,
    title: "Next-Gen Technology",
    desc: "Non-invasive body scans, CAD/CAM modeling and 3D printing.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Care",
    desc: "Hundreds of patients walking, running and living freely again.",
  },
  {
    icon: ShieldCheck,
    title: "Multidisciplinary Approach",
    desc: "DOH & DHA certified clinicians working as one team for you.",
  },
];

const TrustBadges = () => {
  return (
    <section className="bg-secondary/40 py-20 md:py-24 relative overflow-hidden border-y border-border/50">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">
            Why Quantum
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
            Care that <span className="italic text-accent">moves</span> with you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-6xl mx-auto">
          {badges.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-500">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-3 leading-tight text-foreground">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
