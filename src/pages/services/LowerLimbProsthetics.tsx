import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

const LowerLimbProsthetics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <Link to="/#services" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Lower Limb Prosthetics
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Advanced below-knee and above-knee prosthetic solutions with microprocessor-controlled components for natural movement and enhanced mobility.
                </p>
                <Button size="lg" className="mr-4">
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/2ffe22c2-3a59-4bd1-bcc7-6858ceb7c5c3.png" 
                  alt="Lower Limb Prosthetics"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Lower Limb Solutions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Below-knee prosthetics",
                "Above-knee prosthetics", 
                "Microprocessor knees",
                "Sports prosthetics"
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Benefits of Our Lower Limb Prosthetics</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Natural Movement</h3>
                      <p className="text-muted-foreground">Advanced microprocessor technology provides smooth, natural gait patterns.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Comfort & Fit</h3>
                      <p className="text-muted-foreground">Custom-fitted sockets ensure maximum comfort for daily wear.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Durability</h3>
                      <p className="text-muted-foreground">High-quality materials built to withstand daily activities.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Enhanced Mobility</h3>
                      <p className="text-muted-foreground">Improved stability and control for various terrains and activities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Professional Support</h3>
                      <p className="text-muted-foreground">Ongoing care and adjustments from certified prosthetists.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Insurance Coverage</h3>
                      <p className="text-muted-foreground">We work with most insurance providers for coverage options.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and learn more about our lower limb prosthetic solutions.
            </p>
            <div className="space-x-4">
              <Button size="lg">Schedule Consultation</Button>
              <Button variant="outline" size="lg">Call Us Today</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LowerLimbProsthetics;