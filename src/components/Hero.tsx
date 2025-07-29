import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-medical.jpg";
import slideHand from "@/assets/slide-prosthetic-hand.jpg";
import slideFoot from "@/assets/slide-prosthetic-foot.jpg";
import slideSpinal from "@/assets/slide-spinal-brace.jpg";
import slideWheelchair from "@/assets/slide-wheelchair.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/90"></div>
      </div>
      
      {/* Auto-Sliding Product Carousel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 md:w-48 h-32 md:h-48">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1">
                <div className="animate-[float_6s_ease-in-out_infinite] opacity-30 hover:opacity-50 transition-opacity duration-300">
                  <img 
                    src={slideHand} 
                    alt="Prosthetic Hand" 
                    className="w-full h-full object-contain transform rotate-12"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1">
                <div className="animate-[float_6s_ease-in-out_infinite] opacity-30 hover:opacity-50 transition-opacity duration-300">
                  <img 
                    src={slideFoot} 
                    alt="Prosthetic Foot" 
                    className="w-full h-full object-contain transform rotate-12"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="absolute top-1/3 right-10 w-28 md:w-40 h-28 md:h-40">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1">
                <div className="animate-[float_8s_ease-in-out_infinite_reverse] opacity-25 hover:opacity-45 transition-opacity duration-300">
                  <img 
                    src={slideSpinal} 
                    alt="Spinal Brace" 
                    className="w-full h-full object-contain transform -rotate-12"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1">
                <div className="animate-[float_8s_ease-in-out_infinite_reverse] opacity-25 hover:opacity-45 transition-opacity duration-300">
                  <img 
                    src={slideWheelchair} 
                    alt="Wheelchair" 
                    className="w-full h-full object-contain transform -rotate-12"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="absolute bottom-1/4 left-1/4 w-20 md:w-32 h-20 md:h-32">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full h-full"
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1">
                <div className="animate-[float_10s_ease-in-out_infinite] opacity-20 hover:opacity-40 transition-opacity duration-300">
                  <img 
                    src={slideHand} 
                    alt="Medical Device" 
                    className="w-full h-full object-contain transform rotate-6"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1">
                <div className="animate-[float_10s_ease-in-out_infinite] opacity-20 hover:opacity-40 transition-opacity duration-300">
                  <img 
                    src={slideFoot} 
                    alt="Medical Device" 
                    className="w-full h-full object-contain transform rotate-6"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in opacity-0 animation-delay-300">
            Advanced <span className="text-accent animate-pulse">Prosthetics</span>
            <br />
            & <span className="text-accent animate-pulse animation-delay-500">Orthotics</span> Care
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0 animation-delay-700">
            Empowering lives through cutting-edge prosthetic and orthotic solutions. 
            Experience the future of mobility and independence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in opacity-0 animation-delay-1000">
            <Button variant="appointment" size="lg" className="transform hover:scale-105 transition-all duration-300">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in opacity-0 animation-delay-1200 transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-white/80">Patients Served</div>
            </div>
            <div className="text-center animate-fade-in opacity-0 animation-delay-1400 transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in opacity-0 animation-delay-1600 transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;