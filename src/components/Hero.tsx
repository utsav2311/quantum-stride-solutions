import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";
import clinicBackground from "@/assets/clinic-background.jpg";
import { ChevronDown } from "lucide-react";
import { ParticleSystem, FloatingElements, TextReveal } from "@/components/animations";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle System */}
      <ParticleSystem count={20} />
      
      {/* Enhanced Floating Elements */}
      <FloatingElements count={12} />
      
      {/* Additional Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full animate-morphing animation-delay-0"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full animate-floating-horizontal animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-primary/5 rounded-full animate-wave animation-delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-accent/8 rounded-full animate-pulse-slow animation-delay-800"></div>
      </div>

      {/* Background Image with Multiple Layers */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-scale-in" style={{
        backgroundImage: `url(${clinicBackground})`
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-accent/90"></div>
        {/* Additional overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-primary/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <TextReveal stagger delay={300}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced <span className="animate-elastic-bounce text-accent-foreground bg-accent/20 px-2 rounded inline-block hover-scale">Prosthetics</span>
              <br />
              & <span className="animate-elastic-bounce animation-delay-500 text-accent-foreground bg-accent/20 px-2 rounded inline-block hover-scale">Orthotics</span> Care
            </h1>
          </TextReveal>
          
          <TextReveal delay={700}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Empowering mobility and independence through cutting-edge prosthetic and orthotic devices. Our expert team provides personalized care and innovative solutions for enhanced quality of life.
            </p>
          </TextReveal>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in opacity-0 animation-delay-1000">
            <Button variant="appointment" size="lg" className="hover-lift hover:animate-glow transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10">Schedule Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover-lift transition-all duration-300">
              Learn More
            </Button>
          </div>
          
          {/* Enhanced Stats with More Animations */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center hover-scale group transform hover:rotate-1 transition-all duration-500">
              <div className="text-4xl font-bold text-accent-foreground mb-2 group-hover:animate-elastic-bounce animate-wave">500+</div>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Happy Patients</p>
            </div>
            <div className="text-center hover-scale group transform hover:-rotate-1 transition-all duration-500">
              <div className="text-4xl font-bold text-accent-foreground mb-2 group-hover:animate-elastic-bounce animate-floating-horizontal animation-delay-300">15+</div>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Years Experience</p>
            </div>
            <div className="text-center hover-scale group transform hover:rotate-1 transition-all duration-500">
              <div className="text-4xl font-bold text-accent-foreground mb-2 group-hover:animate-elastic-bounce animate-morphing animation-delay-600">100%</div>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">Custom Solutions</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-floating-horizontal cursor-pointer group"
           onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown size={32} className="hover:text-white transition-colors duration-300 group-hover:animate-elastic-bounce animate-wave" />
        <p className="text-xs mt-2 animate-pulse-slow group-hover:text-white transition-colors duration-300">Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;