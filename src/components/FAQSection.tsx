import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/animations";

const faqs = [
  { q: "How long does it take to make a custom prosthetic?", a: "Most custom prosthetics are ready within 2–4 weeks after your initial fitting. Complex microprocessor-controlled devices may take 4–6 weeks." },
  { q: "Do you accept insurance?", a: "Yes. We work with most major UAE health insurers including Daman, ADNIC, MetLife, AXA, Cigna and more. Our team assists with pre-approvals." },
  { q: "Do you provide pediatric prosthetics?", a: "Absolutely. We specialise in lightweight, growth-adjustable pediatric prosthetics with colourful designs children love." },
  { q: "How much does a prosthetic limb cost in Dubai?", a: "Pricing depends on the type, technology and materials. We provide a transparent quote after your free assessment — many devices are fully or partially insurance-covered." },
  { q: "How often should a prosthesis be replaced?", a: "Adult prosthetics typically last 3–5 years. Pediatric devices are adjusted or replaced more frequently as the child grows." },
  { q: "Do you offer home visits or follow-up support?", a: "Yes. We provide lifetime follow-up care, adjustments, and home visits across Dubai for patients with limited mobility." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 max-w-6xl mx-auto">
          <div className="lg:col-span-5">
            <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">FAQ</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight mb-6">
              Questions we hear <span className="text-primary">every day</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Straight answers about timelines, insurance, pediatric care and long-term support.
              Can't find your question? Our specialists are one call away.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {faqs.map((f, i) => (
              <AnimatedSection key={i} animation="fade-in" delay={i * 40}>
                <div className={`border rounded-2xl transition-all ${open === i ? "border-primary/40 bg-secondary/50 shadow-soft" : "border-border hover:border-primary/30"}`}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                    aria-expanded={open === i}
                  >
                    <span className="font-semibold text-foreground text-base md:text-lg">{f.q}</span>
                    <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
