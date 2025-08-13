import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

const UpperLimbProsthetics = () => {
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
                  Upper Limb Prosthetics
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Innovative arm and hand prosthetics including myoelectric devices for precise control and functionality in daily activities.
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
                  src="/lovable-uploads/c6c4c140-87fd-44cb-b595-e9333b4a947b.png" 
                  alt="Upper Limb Prosthetics"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Upper Limb Solutions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Myoelectric arms",
                "Body-powered prosthetics",
                "Partial hand prosthetics",
                "Activity-specific devices"
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

        {/* Technology Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Advanced Myoelectric Technology</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Intuitive Control</h3>
                      <p className="text-muted-foreground">Control prosthetic movements using muscle signals for natural operation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Multiple Grip Patterns</h3>
                      <p className="text-muted-foreground">Various grip configurations for different activities and objects.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Sensory Feedback</h3>
                      <p className="text-muted-foreground">Advanced models include tactile feedback for enhanced control.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Waterproof Options</h3>
                      <p className="text-muted-foreground">Water-resistant designs for swimming and water activities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Long Battery Life</h3>
                      <p className="text-muted-foreground">Extended operation time with quick charging capabilities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Customizable Settings</h3>
                      <p className="text-muted-foreground">Personalized controls and sensitivity adjustments.</p>
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
              Contact us today to schedule a consultation and learn more about our upper limb prosthetic solutions.
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

export default UpperLimbProsthetics;