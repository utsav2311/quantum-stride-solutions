import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";
import clinicBackground from "@/assets/clinic-background.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Multiple Layers */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${clinicBackground})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-accent/90"></div>
        {/* Additional overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in opacity-0 animation-delay-300">
            Advanced <span className="animate-pulse text-red-300">Prosthetics</span>
            <br />
            & <span className="animate-pulse animation-delay-500 text-red-300">Orthotics</span> Care
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-0 animation-delay-700">Empowering mobility and independence through cutting-edge prosthetic and orthotic devices. Our expert team provides personalized care and innovative solutions for enhanced quality of life.</p>
          
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
              
              
            </div>
            <div className="text-center animate-fade-in opacity-0 animation-delay-1400 transform hover:scale-110 transition-all duration-300">
              
              
            </div>
            <div className="text-center animate-fade-in opacity-0 animation-delay-1600 transform hover:scale-110 transition-all duration-300">
              
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;