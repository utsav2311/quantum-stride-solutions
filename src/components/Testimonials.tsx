import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Six months after my fitting, I ran my first 5K. The team didn't just build me a leg — they gave me my life back.",
    name: "Arjun Mehta",
    role: "Lower-limb prosthesis · Mumbai",
  },
  {
    quote: "The precision of the scan-to-fit process was extraordinary. My orthotic felt right on day one and only better since.",
    name: "Priya Sharma",
    role: "Custom orthotics · Delhi",
  },
  {
    quote: "From consultation to aftercare, everything felt personal. I've recommended UtsavWorld to every family I know.",
    name: "Ravi Kulkarni",
    role: "Upper-limb prosthesis · Pune",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">Patient Stories</p>
          <h2 className="font-serif text-4xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
            Trusted by people who now <em className="italic text-primary">move freely.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-soft transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-6 group-hover:text-primary/60 transition-colors" />
              <p className="text-lg leading-relaxed text-foreground font-light">
                "{t.quote}"
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex text-primary mb-2">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-primary" />
                  ))}
                </div>
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
