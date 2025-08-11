const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/e5a83eab-625b-4d9c-803e-cd8d42658144.png" 
                alt="Quantum Medical Logo" 
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-xl font-bold">Quantum Medical</h3>
                <p className="text-xs text-primary-foreground/80">Prosthetics & Orthotics</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering lives through advanced prosthetic and orthotic solutions. 
              Your mobility, our mission.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Custom Prosthetics</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Orthotic Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consultations</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Repairs & Adjustments</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Our Services</a></li>
              <li><a href="#appointment" className="hover:text-accent transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Al Danah</p>
              <p>Abu Dhabi</p>
              <p>United Arab Emirates</p>
              <p className="mt-3">📞 +971 558488759</p>
              <p>✉️ info@quantumuae.ae</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">© 2025 Quantum Medical. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>;
};
export default Footer;