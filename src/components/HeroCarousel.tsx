import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import heroMedical from "@/assets/hero-medical.jpg";

import clinicBackground from "@/assets/clinic-background.jpg";
import rehabilitationBackground from "@/assets/rehabilitation-background.jpg";
import workshopBackground from "@/assets/workshop-background.jpg";
import researchBackground from "@/assets/research-background.jpg";

const slides = [
  {
    image: heroMedical,
    eyebrow: "MOBILITY IS",
    title: "FREEDOM",
    titleAccent: "",
    subtitle: "And You Deserve Both — Custom-made solutions for kids & adults.",
    cta: "Book Your Appointment",
  },
  {
    image: clinicBackground,
    eyebrow: "INNOVATIVE SOLUTIONS THAT",
    title: "FIT",
    titleAccent: "Perfectly",
    subtitle: "Precision-crafted, scan-to-build orthotics tailored to your body.",
    cta: "Book Your Scan Now",
  },
  {
    image: rehabilitationBackground,
    eyebrow: "INNOVATIVE SOLUTIONS THAT",
    title: "PERFORM",
    titleAccent: "Exceptionally",
    subtitle: "Engineered for movement, built for the life you want to live.",
    cta: "Book Your Scan Now",
  },
  {
    image: workshopBackground,
    eyebrow: "INNOVATIVE SOLUTIONS THAT",
    title: "FEEL",
    titleAccent: "Natural",
    subtitle: "Next-gen prosthetics designed around comfort, control and confidence.",
    cta: "Book Your Scan Now",
  },
  {
    image: researchBackground,
    eyebrow: "RESEARCH &",
    title: "INNOVATION",
    titleAccent: "",
    subtitle: "Leading the future of prosthetic and orthotic technology.",
    cta: "Discover More",
  },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5500, stopOnInteraction: false })]
  );

  return (
    <section className="relative h-screen overflow-hidden bg-xtreme-dark">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide h-full flex-none w-full relative">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Cinematic dark overlay — xtremity-inspired */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

              <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-16 lg:px-28">
                <div className="max-w-4xl w-full">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-[0.3em] text-white/80 mb-3 md:mb-6 animate-fade-in font-sans">
                    {slide.eyebrow}
                  </p>
                  <h1 className="font-playfair font-bold text-white leading-[0.95] mb-5 md:mb-8 animate-slide-up">
                    <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight whitespace-nowrap">
                      {slide.title}
                    </span>
                    {slide.titleAccent && (
                      <span className="block text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl italic font-light text-accent mt-2 whitespace-nowrap">
                        {slide.titleAccent}
                      </span>
                    )}
                  </h1>
                  <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/85 mb-6 md:mb-10 max-w-2xl leading-relaxed animate-fade-in font-light">
                    {slide.subtitle}
                  </p>
                  <div className="flex items-center gap-4 animate-scale-in">
                    <Button
                      size="lg"
                      asChild
                      className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-base font-semibold tracking-wide shadow-2xl hover:shadow-accent/40 transition-all"
                    >
                      <Link to="/book-appointment">{slide.cta}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className="w-10 h-[3px] bg-white/30 hover:bg-accent transition-colors duration-300"
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
