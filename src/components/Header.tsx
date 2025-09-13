import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 animate-slide-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-slide-left animation-delay-200">
            <img 
              src="/lovable-uploads/e5a83eab-625b-4d9c-803e-cd8d42658144.png" 
              alt="Quantum Medical Logo" 
              className="w-12 h-12 hover-scale transition-all duration-300"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300">Quantum Medical</h1>
              <p className="text-xs text-muted-foreground">Prosthetics & Orthotics</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 stagger-children">
            <Link to="/" className="nav-link text-foreground hover:text-primary transition-all duration-300">Home</Link>
            <Link to="/services" className="nav-link text-foreground hover:text-primary transition-all duration-300">Services</Link>
            <Link to="/about" className="nav-link text-foreground hover:text-primary transition-all duration-300">About</Link>
            <Link to="/contact" className="nav-link text-foreground hover:text-primary transition-all duration-300">Contact</Link>
          </nav>
          
          <Button 
            variant="medical" 
            size="sm"
            className="animate-slide-right animation-delay-400 hover-lift hover:animate-glow transition-all duration-300"
            onClick={() => {
              const appointmentSection = document.getElementById('appointment');
              if (appointmentSection) {
                appointmentSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;