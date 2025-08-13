import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Package, Settings, Truck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import consultation from "@/assets/consultation-service.jpg";

const MedicalEquipments = () => {
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
                  Medical Equipment Trading
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Wholesale trading of medical equipment, laboratory apparatus, and comprehensive installation, maintenance, and repair services for healthcare facilities.
                </p>
                <Button size="lg" className="mr-4">
                  Request Quote
                </Button>
                <Button variant="outline" size="lg">
                  View Catalog
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src={consultation} 
                  alt="Medical Equipment Trading"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Trading Services</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-card rounded-lg border">
                <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Medical Equipment Trading</h3>
                <p className="text-muted-foreground">Wholesale distribution of quality medical devices and equipment.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg border">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Laboratory Equipment</h3>
                <p className="text-muted-foreground">Complete laboratory apparatus and testing equipment solutions.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg border">
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Installation Services</h3>
                <p className="text-muted-foreground">Professional installation and setup of medical equipment.</p>
              </div>
              
              <div className="text-center p-6 bg-card rounded-lg border">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Expert Repair Services</h3>
                <p className="text-muted-foreground">Specialized maintenance and repair for all equipment types.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Equipment Categories</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Diagnostic Equipment</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    X-ray machines
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Ultrasound systems
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    ECG machines
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    CT scanners
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Laboratory Equipment</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Microscopes
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Centrifuges
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Analyzers
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Incubators
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Therapeutic Equipment</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Physiotherapy devices
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Rehabilitation equipment
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Mobility aids
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Exercise equipment
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Surgical Equipment</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Operating tables
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Surgical lights
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Anesthesia machines
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Sterilization equipment
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Patient Monitoring</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Vital signs monitors
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Pulse oximeters
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Blood pressure monitors
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Cardiac monitors
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-card rounded-lg border">
                <h3 className="font-semibold text-lg mb-4">Hospital Furniture</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Hospital beds
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Wheelchairs
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Medical trolleys
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    Storage solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Service Process</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Consultation</h3>
                <p className="text-muted-foreground">Understanding your specific equipment needs and requirements.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">Procurement</h3>
                <p className="text-muted-foreground">Sourcing quality equipment from trusted manufacturers worldwide.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Installation</h3>
                <p className="text-muted-foreground">Professional installation and setup by certified technicians.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-lg mb-2">Support</h3>
                <p className="text-muted-foreground">Ongoing maintenance, training, and technical support services.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Equip Your Facility?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a consultation and quote on medical equipment for your healthcare facility or laboratory.
            </p>
            <div className="space-x-4">
              <Button size="lg">Request Quote</Button>
              <Button variant="outline" size="lg">Contact Sales Team</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MedicalEquipments;