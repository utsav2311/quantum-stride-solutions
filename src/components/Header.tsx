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
      { label: "Spine & Back Braces", to: "/services/spine-back-braces" },
      { label: "Upper Limb Orthotics", to: "/services/upper-limb-orthotics" },
      { label: "Lower Limb Orthotics", to: "/services/lower-limb-orthotics" },
      { label: "Custom Orthotic Insoles & Footwear", to: "/services/custom-orthotic-insoles" },
    ],
  },
  {
    label: "Prosthetics",
    children: [
      { label: "Lower Limb Prosthetics", to: "/services/lower-limb-prosthetics" },
      { label: "Upper Limb Prosthetics", to: "/services/upper-limb-prosthetics" },
      { label: "Sockets & Liners", to: "/services/sockets-liners" },
      { label: "Silicone Restoration", to: "/services/silicone-restoration" },
      { label: "Sports Prosthetics", to: "/services/sports-prosthetics" },
      { label: "Cosmetic Prosthetics", to: "/services/cosmetic-prosthetics" },
    ],
  },
  {
    label: "Pediatric Care",
    children: [
      { label: "Pediatric Prosthetics", to: "/services/pediatric-prosthetics" },
      { label: "Cranial Orthoses", to: "/services/cranial-orthoses" },
      { label: "Scoliosis Bracing", to: "/services/scoliosis-bracing" },
    ],
  },
  {
    label: "Mobility & Seating System",
    children: [
      { label: "Walker Canes & Crutches", to: "/services/walker-canes-crutches" },
      { label: "Custom Seating", to: "/services/custom-seating" },
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
            <div className="min-w-0 hidden sm:block">
              <span className={titleClasses}>Quantum Medical</span>
              <p className={subtitleClasses}>Prosthetics & Orthotics</p>
            </div>
          </Link>
          
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 stagger-children">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className={`${navLinkClasses} inline-flex items-center gap-1 text-sm 2xl:text-[15px] font-medium whitespace-nowrap group-hover:text-accent py-2`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 min-w-[280px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50"
                  >
                    <div className="bg-background border border-border/60 rounded-xl shadow-medical overflow-hidden">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.to}
                          className="block px-5 py-3 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 border-b border-border/40 last:border-b-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} to={item.to!} className={`${navLinkClasses} text-sm 2xl:text-[15px] font-medium whitespace-nowrap py-2`}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          
          <div className="flex items-center gap-2 sm:gap-4">
            <Button 
              variant="medical" 
              size="sm"
              className="hidden xl:flex animate-slide-right animation-delay-400 hover-lift hover:animate-glow transition-all duration-300"
              asChild
            >
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="xl:hidden" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] overflow-y-auto">
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) =>
                    item.children ? (
                      <Accordion key={item.label} type="single" collapsible>
                        <AccordionItem value={item.label} className="border-b border-border/40">
                          <AccordionTrigger className="text-base font-medium hover:text-primary py-3">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col gap-1 pl-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  to={child.to}
                                  onClick={() => setIsOpen(false)}
                                  className="py-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={item.label}
                        to={item.to!}
                        className="nav-link text-foreground hover:text-primary transition-all duration-300 text-base py-3 border-b border-border/40"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
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