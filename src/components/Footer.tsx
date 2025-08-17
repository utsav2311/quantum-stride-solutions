import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full animate-float animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 stagger-animation">
          <div className="hover-lift">
            <div className="flex items-center space-x-2 mb-4 group">
              <img 
                src="/lovable-uploads/e5a83eab-625b-4d9c-803e-cd8d42658144.png" 
                alt="Quantum Medical Logo" 
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors duration-300">Quantum Medical</h3>
                <p className="text-xs text-primary-foreground/80">Prosthetics & Orthotics</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering lives through advanced prosthetic and orthotic solutions.
            </p>
          </div>
          
          <div className="hover-lift">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Custom Prosthetics</a></li>
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Orthotic Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Consultations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Repairs & Adjustments</a></li>
            </ul>
          </div>
          
          <div className="hover-lift">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#appointment" className="hover:text-accent transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="hover-lift">
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <div>
                  <p>Al Danah, Abu Dhabi</p>
                  <p>United Arab Emirates</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <p>+971 558488759</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <p>info@quantumuae.ae</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center animate-fade-in opacity-0 animation-delay-1000">
          <p className="text-sm text-primary-foreground/60">© 2025 Quantum Medical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;