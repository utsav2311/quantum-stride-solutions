import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import { useEffect, useState } from "react";
import heroPatient from "@/assets/hero-patient.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const heroImages = [
  { src: heroPatient, alt: "Patient walking confidently with a custom prosthetic device" },
  { src: hero1, alt: "Young man walking outdoors with a modern prosthetic leg at golden hour" },
  { src: hero2, alt: "Prosthetist fitting a custom prosthetic limb in a modern clinic" },
  { src: hero3, alt: "Craftsman precision-shaping a custom orthotic brace in the workshop" },
  { src: hero4, alt: "Smiling child with a colorful pediatric prosthetic giving a thumbs up" },
  { src: hero5, alt: "Athlete running on a track with a sport running-blade prosthetic" },
];


const HeroPremium = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed carousel background */}
      <div className="absolute inset-0">
        {heroImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            width={1920}
            height={1080}
            loading={i === 0 ? undefined : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-16 lg:pb-24 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/70 backdrop-blur text-sm text-muted-foreground animate-fade-in">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="font-medium">ISO 13485 Certified · 15+ Years of Care</span>
            </div>

            <h1 className="font-display font-bold text-[3.25rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] leading-[1.02] tracking-tight text-foreground animate-slide-up">
              Restoring <span className="text-primary">Mobility</span>.
              <br />
              Transforming <span className="text-accent">Lives</span>.
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed font-light animate-fade-in animation-delay-300">
              Advanced prosthetic & orthotic solutions in Dubai with
              personalized care, world-class technology, and a team that
              walks every step with you.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2 animate-fade-in animation-delay-500">
              <Button
                asChild
                size="lg"
                className="group h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover shadow-medical hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-base font-semibold"
              >
                <Link to="/book-appointment">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <a
                href="tel:+919999999999"
                className="group inline-flex items-center gap-3 h-14 px-6 rounded-full border border-border/60 bg-card/40 backdrop-blur hover:border-primary/40 hover:bg-primary/5 transition-all text-foreground font-medium"
              >
                <span className="w-9 h-9 rounded-full bg-primary/10 grid place-items-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </span>
                Talk to a Specialist
              </a>
            </div>

            {/* Trust row */}
            <div className="pt-8 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border/60 animate-fade-in animation-delay-700">
              <div className="pt-6 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[0,1,2,3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-primary/10" />
                  ))}
                </div>
                <div className="ml-2">
                  <div className="flex text-primary">
                    {[...Array(5)].map((_,i) => <Star key={i} className="w-3.5 h-3.5 fill-primary" />)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">Rated 4.9 by 500+ patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="lg:col-span-5 relative hidden lg:block animate-scale-in">
            <div className="absolute bottom-0 left-0 bg-card/80 border border-border/60 rounded-2xl shadow-soft p-5 w-56 backdrop-blur">
              <p className="text-4xl font-serif text-foreground leading-none">98<span className="text-primary">%</span></p>
              <p className="text-sm text-muted-foreground mt-2">Patient satisfaction across fittings in 2025.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-6 bg-primary" : "w-1.5 bg-background/70 hover:bg-background"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroPremium;
