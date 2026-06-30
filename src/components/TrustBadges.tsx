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
    <section className="bg-xtreme-dark text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto">
          {badges.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/15 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-500">
                <Icon className="w-9 h-9" />
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-extrabold mb-3 leading-tight tracking-tight text-white">
                {title}
              </h3>
              <p className="text-white/65 leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
