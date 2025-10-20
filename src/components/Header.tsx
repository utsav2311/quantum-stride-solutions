import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          
          <div className="flex items-center gap-4">
            <Button 
              variant="medical" 
              size="sm"
              className="hidden md:flex animate-slide-right animation-delay-400 hover-lift hover:animate-glow transition-all duration-300"
              asChild
            >
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link 
                    to="/" 
                    className="nav-link text-foreground hover:text-primary transition-all duration-300 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/services" 
                    className="nav-link text-foreground hover:text-primary transition-all duration-300 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/about" 
                    className="nav-link text-foreground hover:text-primary transition-all duration-300 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="nav-link text-foreground hover:text-primary transition-all duration-300 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Button 
                    variant="medical" 
                    size="sm"
                    className="w-full mt-4"
                    asChild
                  >
                    <Link to="/book-appointment" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;