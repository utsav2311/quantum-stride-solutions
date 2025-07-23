import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-medical.jpg";
import prostheticHand from "/lovable-uploads/86c9166c-7952-42e8-a5b5-8afa61b68b5b.png";
import prostheticLeg from "@/assets/prosthetic-leg.jpg";
import prostheticArm from "@/assets/prosthetic-arm.jpg";
import orthoticBrace from "@/assets/orthotic-brace.jpg";

const Hero = () => {
  const prostheticImages = [
    {
      src: prostheticHand,
      alt: "Advanced prosthetic hand demonstrating precision grip",
      badge: "Precision Technology",
    },
    {
      src: prostheticLeg,
      alt: "Advanced prosthetic leg with carbon fiber components",
      badge: "Mobility Solutions",
    },
    {
      src: prostheticArm,
      alt: "Sophisticated prosthetic arm with robotic hand",
      badge: "Advanced Robotics",
    },
    {
      src: orthoticBrace,
      alt: "Modern orthotic foot brace with advanced materials",
      badge: "Comfort & Support",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced <span className="text-accent">Prosthetics</span>
            <br />
            & <span className="text-accent">Orthotics</span> Care
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering lives through cutting-edge prosthetic and orthotic solutions. 
            Experience the future of mobility and independence.
          </p>
          
          {/* Featured Prosthetic Carousel */}
          <div className="mb-8">
            <Carousel 
              className="w-full max-w-xs md:max-w-md mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                })
              ]}
            >
              <CarouselContent>
                {prostheticImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-48 md:h-60 object-cover rounded-lg shadow-lg border-4 border-white/20"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {image.badge}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-white/10 border-white/30 text-white hover:bg-white/20" />
              <CarouselNext className="bg-white/10 border-white/30 text-white hover:bg-white/20" />
            </Carousel>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="appointment" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-white/80">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
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