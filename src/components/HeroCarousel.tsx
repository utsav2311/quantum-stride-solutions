import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import hero images
import heroMedical from "@/assets/hero-medical.jpg";
import clinicBackground from "@/assets/clinic-background.jpg";
import rehabilitationBackground from "@/assets/rehabilitation-background.jpg";
import workshopBackground from "@/assets/workshop-background.jpg";
import researchBackground from "@/assets/research-background.jpg";
const slides = [{
  image: heroMedical,
  title: "Advanced Prosthetics & Orthotics Care",
  subtitle: "Empowering mobility and independence through cutting-edge technology",
  cta: "Schedule Consultation"
}, {
  image: clinicBackground,
  title: "Expert Clinical Assessment",
  subtitle: "Professional evaluation and personalized treatment planning",
  cta: "Book Assessment"
}, {
  image: rehabilitationBackground,
  title: "Comprehensive Rehabilitation",
  subtitle: "Complete support throughout your recovery journey",
  cta: "Learn More"
}, {
  image: workshopBackground,
  title: "Custom Manufacturing",
  subtitle: "Precision-crafted devices tailored to your unique needs",
  cta: "View Services"
}, {
  image: researchBackground,
  title: "Innovation & Research",
  subtitle: "Leading the future of prosthetic and orthotic technology",
  cta: "Discover More"
}];
const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30
  }, [Autoplay({
    delay: 5000,
    stopOnInteraction: false
  })]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return <section className="relative h-[85vh] overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => <div key={index} className="embla__slide flex-none w-full relative">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
            backgroundImage: `url(${slide.image})`
          }}>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-primary/30"></div>
              </div>
              
              <div className="relative z-10 h-full flex items-center justify-center px-12 lg:px-32 xl:px-40 2xl:px-48 py-16 lg:py-32 xl:py-40 md:px-24 md:py-28">
                <div className="w-full max-w-7xl mx-auto text-center">
                  <div className="w-full">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in font-playfair">
                      {slide.title.split(' ').map((word, i) => <span key={i} className={i === 1 || i === 2 ? "text-accent-foreground bg-accent/20 px-3 rounded-lg" : ""}>
                          {word}{' '}
                        </span>)}
                    </h1>
                    
                    <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-light">
                      {slide.subtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
                      <Button variant="appointment" size="lg" className="hover-lift transition-all duration-300 text-lg px-8 py-4">
                        {slide.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white border-white/30" onClick={scrollPrev}>
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white border-white/30" onClick={scrollNext}>
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => <button key={index} className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-colors duration-300" onClick={() => emblaApi?.scrollTo(index)} />)}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce cursor-pointer z-20" onClick={() => document.getElementById('services')?.scrollIntoView({
      behavior: 'smooth'
    })}>
        <p className="text-xs animate-pulse-slow">Scroll Down</p>
      </div>
    </section>;
};
export default HeroCarousel;