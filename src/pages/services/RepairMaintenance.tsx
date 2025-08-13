import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Shield, Wrench, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import consultation from "@/assets/consultation-service.jpg";

const RepairMaintenance = () => {
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
                  Repair & Maintenance
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Comprehensive repair services and regular maintenance to ensure optimal performance of your prosthetic and orthotic devices.
                </p>
                <Button size="lg" className="mr-4">
                  Schedule Service
                </Button>
                <Button variant="outline" size="lg">
                  Emergency Repair
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src={consultation} 
                  alt="Repair & Maintenance"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Maintenance Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-card rounded-lg border">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Emergency Repairs</h3>
                <p className="text-muted-foreground">Quick fixes for urgent issues to minimize downtime.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg border">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Routine Maintenance</h3>
                <p className="text-muted-foreground">Regular check-ups to prevent problems before they occur.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg border">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Component Upgrades</h3>
                <p className="text-muted-foreground">Latest technology upgrades for improved performance.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg border">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Warranty Services</h3>
                <p className="text-muted-foreground">Full warranty coverage and support services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Services */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">24/7 Emergency Support</h2>
              <p className="text-xl text-muted-foreground mb-12">
                We understand that device failures can happen at any time. That's why we offer emergency repair services to get you back on your feet quickly.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-card rounded-lg border">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Same-Day Service</h3>
                  <p className="text-muted-foreground">Most emergency repairs completed within 24 hours.</p>
                </div>
                
                <div className="p-6 bg-card rounded-lg border">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Mobile Repair</h3>
                  <p className="text-muted-foreground">On-site repairs available for urgent situations.</p>
                </div>
                
                <div className="p-6 bg-card rounded-lg border">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Loaner Devices</h3>
                  <p className="text-muted-foreground">Temporary devices available during major repairs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Maintenance Plans</h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    Annual inspection
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    Basic cleaning & adjustment
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    Wear assessment
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Choose Plan</Button>
              </div>
              
              <div className="p-6 bg-primary text-primary-foreground rounded-lg border-2 border-primary">
                <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
                <div className="mb-4 px-3 py-1 bg-primary-foreground/20 rounded-full text-sm text-center">Most Popular</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    Bi-annual inspections
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    Priority repair service
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    Component upgrades
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 mr-2" />
                    24/7 support hotline
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">Choose Plan</Button>
              </div>
              
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Complete Care</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    Quarterly inspections
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    Unlimited repairs
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    Free component replacement
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    Personal care coordinator
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Choose Plan</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Need Repair or Maintenance?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait for small issues to become big problems. Contact us today to schedule maintenance or emergency repair service.
            </p>
            <div className="space-x-4">
              <Button size="lg">Schedule Service</Button>
              <Button variant="outline" size="lg">Emergency Hotline</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RepairMaintenance;