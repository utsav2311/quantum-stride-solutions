import { Award, Users, Target, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "12,400+", label: "Devices fitted since 2010" },
  { icon: Target, value: "98%", label: "First-fit success rate" },
  { icon: Globe, value: "27", label: "Cities served across India" },
  { icon: Award, value: "15+", label: "Years of specialized care" },
];

const certifications = [
  "ISO 13485:2016",
  "CE Marked Components",
  "RCI Registered Clinicians",
  "FDA-Cleared Technologies",
];

const Achievements = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">By the Numbers</p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl leading-[1.05] tracking-tight text-foreground mb-6">
              Measurable outcomes, <em className="italic text-primary">certified</em> craft.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Every device we deliver is backed by clinical rigor, international standards, and a team of specialists who refuse to compromise on fit or finish.
            </p>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground font-medium hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/30 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <p className="font-serif text-5xl text-foreground leading-none tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
