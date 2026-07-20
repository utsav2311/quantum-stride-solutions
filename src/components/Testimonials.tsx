import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection, StaggeredGrid } from "@/components/animations";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I'm very satisfied with the cranial helmet treatment we received. The clinician was professional, patient and clearly experienced — every step of the process was explained and we felt comfortable throughout. The results have been excellent and I'd definitely recommend this clinic to other parents seeking cranial helmet therapy.",
    name: "Anzhela Bolotova",
  },
  {
    quote:
      "We came in to take measurements for my son's helmet, and the experience was excellent. The team was extremely helpful and took the time to explain everything clearly and patiently — very professional, reassuring and never rushed. We truly appreciated the care and attention to detail.",
    name: "Hessa Almansoori",
  },
];

const Testimonials = () => (
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection animation="slide-up" duration="slow" className="max-w-3xl mb-16 text-center mx-auto">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Our Satisfied Clients</p>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
          Stories from our <span className="italic text-accent">patients</span>.
        </h2>
      </AnimatedSection>

      <StaggeredGrid className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto" staggerDelay={150} animation="slide-up">
        {testimonials.map((t, i) => (
          <Card key={i} className="border-border/60 hover:border-accent transition-all duration-500 hover:-translate-y-1 hover:shadow-xl bg-card">
            <CardContent className="p-8">
              <Quote className="w-10 h-10 text-accent mb-4" />
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <p className="text-sm font-semibold text-foreground">— {t.name}</p>
            </CardContent>
          </Card>
        ))}
      </StaggeredGrid>
    </div>
  </section>
);

export default Testimonials;
