import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import orthotics from "@/assets/orthotics-service.jpg";

const CustomOrthotics = () => {
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
                  Custom Orthotics
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Personalized orthotic devices designed to support, align, and improve function of movable parts of the body for enhanced mobility and comfort.
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
                  src={orthotics} 
                  alt="Custom Orthotics"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Orthotic Solutions</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                "Spinal orthotics",
                "Lower limb braces",
                "Upper limb supports",
                "Pediatric orthotics"
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

        {/* Conditions Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Conditions We Treat</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Spinal Conditions</h3>
                      <p className="text-muted-foreground">Scoliosis, kyphosis, and other spinal deformities requiring support.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Foot & Ankle</h3>
                      <p className="text-muted-foreground">Plantar fasciitis, flat feet, and diabetic foot complications.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Knee Injuries</h3>
                      <p className="text-muted-foreground">Ligament injuries, arthritis, and post-surgical support.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Neurological Conditions</h3>
                      <p className="text-muted-foreground">Stroke, cerebral palsy, and muscular dystrophy support.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Upper Extremity</h3>
                      <p className="text-muted-foreground">Carpal tunnel, tennis elbow, and repetitive strain injuries.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Pediatric Conditions</h3>
                      <p className="text-muted-foreground">Growth-related deformities and developmental delays.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Sports Injuries</h3>
                      <p className="text-muted-foreground">Athletic performance enhancement and injury prevention.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Chronic Pain</h3>
                      <p className="text-muted-foreground">Support devices for long-term pain management.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Fitting Process</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Assessment</h3>
                <p className="text-muted-foreground">Comprehensive evaluation of your condition and mobility needs.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">Custom Design</h3>
                <p className="text-muted-foreground">3D scanning and custom design tailored to your specific anatomy.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Fitting & Training</h3>
                <p className="text-muted-foreground">Professional fitting with comprehensive usage training and follow-up care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and learn more about our custom orthotic solutions.
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

export default CustomOrthotics;