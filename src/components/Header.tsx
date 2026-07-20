import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type NavItem = {
  label: string;
  to?: string;
  children?: { label: string; to: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Orthotics",
    children: [
      { label: "Spine & Back Braces", to: "/services/custom-orthotics" },
      { label: "Upper Limb Orthotics", to: "/services/custom-orthotics" },
      { label: "Lower Limb Orthotics", to: "/services/custom-orthotics" },
      { label: "Custom Orthotic Insoles & Footwear", to: "/services/custom-orthotics" },
    ],
  },
  {
    label: "Prosthetics",
    children: [
      { label: "Upper Limb Prosthetics", to: "/services/upper-limb-prosthetics" },
      { label: "Lower Limb Prosthetics", to: "/services/lower-limb-prosthetics" },
      { label: "Sports Prosthetics", to: "/services/lower-limb-prosthetics" },
      { label: "Cosmetic Prosthetics", to: "/services/upper-limb-prosthetics" },
    ],
  },
  {
    label: "Pediatric Care",
    children: [
      { label: "Pediatric Orthotics", to: "/services/custom-orthotics" },
      { label: "Pediatric Prosthetics", to: "/services/lower-limb-prosthetics" },
      { label: "Mobility Aids for Kids", to: "/services/medical-equipments" },
    ],
  },
  {
    label: "Mobility & Seating System",
    children: [
      { label: "Wheelchairs", to: "/services/medical-equipments" },
      { label: "Custom Seating Systems", to: "/services/medical-equipments" },
      { label: "Walkers & Standing Frames", to: "/services/medical-equipments" },
    ],
  },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const headerClasses = transparent
    ? "bg-transparent absolute top-0 left-0 right-0 z-50 animate-slide-up"
    : "bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 animate-slide-up";

  const titleClasses = transparent
    ? "text-lg sm:text-2xl font-bold text-white hover:text-white/80 transition-colors duration-300 truncate drop-shadow-lg"
    : "text-lg sm:text-2xl font-bold text-primary hover:text-primary/80 transition-colors duration-300 truncate";

  const subtitleClasses = transparent
    ? "text-[10px] sm:text-xs text-white/80 truncate drop-shadow"
    : "text-[10px] sm:text-xs text-muted-foreground truncate";

  const navLinkClasses = transparent
    ? "nav-link text-white hover:text-accent transition-all duration-300 drop-shadow"
    : "nav-link text-foreground hover:text-primary transition-all duration-300";

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 animate-slide-left animation-delay-200 group min-w-0">
            <div className="relative flex-shrink-0 transition-all duration-300 group-hover:scale-105">
              <img 
                src="/quantum-logo.png"
                alt="Quantum Medical Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-lg"
              />
            </div>
            <div className="min-w-0">
              <span className={titleClasses}>Quantum Medical</span>
              <p className={subtitleClasses}>Prosthetics & Orthotics</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 stagger-children">
            <Link to="/" className={navLinkClasses}>Home</Link>
            <Link to="/services" className={navLinkClasses}>Services</Link>
            <Link to="/about" className={navLinkClasses}>About</Link>
            <Link to="/contact" className={navLinkClasses}>Contact</Link>
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
                <Button variant="ghost" size="sm" className="md:hidden" aria-label="Open menu">
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