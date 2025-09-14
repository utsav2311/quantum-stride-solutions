import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import consultationImage from "@/assets/consultation-service.jpg";
import prostheticArmImage from "@/assets/prosthetic-arm.jpg";
import orthoticBraceImage from "@/assets/orthotic-brace.jpg";
import prostheticProfessionalImage from "@/assets/prosthetic-professional.jpg";

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Appointment request:", formData);
    
    toast({
      title: "Appointment Request Submitted",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="appointment" className="py-20 bg-background relative overflow-hidden">
      {/* Corner Images Holding the Form */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Corner */}
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20 animate-float z-20">
          <img 
            src={consultationImage} 
            alt="Medical consultation" 
            className="w-full h-full object-cover rounded-full transform rotate-12 hover:rotate-6 transition-transform duration-700"
          />
        </div>
        
        {/* Top Right Corner */}
        <div className="absolute top-10 right-10 w-36 h-36 opacity-25 animate-float animation-delay-500 z-20">
          <img 
            src={prostheticArmImage} 
            alt="Prosthetic arm" 
            className="w-full h-full object-cover rounded-full transform -rotate-12 hover:-rotate-6 transition-transform duration-700"
          />
        </div>
        
        {/* Bottom Left Corner */}
        <div className="absolute bottom-10 left-10 w-40 h-28 opacity-20 animate-float animation-delay-1000 z-20">
          <img 
            src={orthoticBraceImage} 
            alt="Orthotic brace" 
            className="w-full h-full object-cover rounded-lg transform rotate-6 hover:rotate-3 transition-transform duration-700"
          />
        </div>
        
        {/* Bottom Right Corner */}
        <div className="absolute bottom-10 right-10 w-38 h-32 opacity-25 animate-float animation-delay-700 z-20">
          <img 
            src={prostheticProfessionalImage} 
            alt="Prosthetic professional" 
            className="w-full h-full object-cover rounded-lg transform -rotate-6 hover:-rotate-3 transition-transform duration-700"
          />
        </div>
        
        {/* Connecting Lines/Frames Effect */}
        <div className="absolute top-16 left-16 w-20 h-1 bg-gradient-to-r from-primary/30 to-transparent animate-pulse-slow"></div>
        <div className="absolute top-16 left-16 w-1 h-20 bg-gradient-to-b from-primary/30 to-transparent animate-pulse-slow animation-delay-200"></div>
        
        <div className="absolute top-16 right-16 w-20 h-1 bg-gradient-to-l from-primary/30 to-transparent animate-pulse-slow animation-delay-400"></div>
        <div className="absolute top-16 right-16 w-1 h-20 bg-gradient-to-b from-primary/30 to-transparent animate-pulse-slow animation-delay-600"></div>
        
        <div className="absolute bottom-16 left-16 w-20 h-1 bg-gradient-to-r from-primary/30 to-transparent animate-pulse-slow animation-delay-800"></div>
        <div className="absolute bottom-16 left-16 w-1 h-20 bg-gradient-to-t from-primary/30 to-transparent animate-pulse-slow animation-delay-1000"></div>
        
        <div className="absolute bottom-16 right-16 w-20 h-1 bg-gradient-to-l from-primary/30 to-transparent animate-pulse-slow animation-delay-1200"></div>
        <div className="absolute bottom-16 right-16 w-1 h-20 bg-gradient-to-t from-primary/30 to-transparent animate-pulse-slow animation-delay-1400"></div>
      </div>

      {/* Additional Background Images (existing) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Medical consultation background */}
        <div className="absolute top-20 left-10 w-48 h-32 opacity-10 animate-float">
          <img 
            src={consultationImage} 
            alt="Medical consultation" 
            className="w-full h-full object-cover rounded-lg transform rotate-12"
          />
        </div>
        
        {/* Prosthetic arm image */}
        <div className="absolute top-40 right-20 w-40 h-40 opacity-15 animate-float animation-delay-700">
          <img 
            src={prostheticArmImage} 
            alt="Prosthetic arm" 
            className="w-full h-full object-cover rounded-full transform -rotate-6"
          />
        </div>
        
        {/* Orthotic brace image */}
        <div className="absolute bottom-32 left-20 w-36 h-48 opacity-12 animate-float animation-delay-1400">
          <img 
            src={orthoticBraceImage} 
            alt="Orthotic brace" 
            className="w-full h-full object-cover rounded-lg transform rotate-6"
          />
        </div>
        
        {/* Professional consultation image */}
        <div className="absolute bottom-20 right-10 w-44 h-28 opacity-10 animate-float animation-delay-500">
          <img 
            src={prostheticProfessionalImage} 
            alt="Prosthetic professional" 
            className="w-full h-full object-cover rounded-lg transform -rotate-12"
          />
        </div>
        
        {/* Animated background shapes */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full animate-float animation-delay-200"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/5 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary/3 rounded-full animate-float animation-delay-300"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-medical-teal/5 rounded-full animate-pulse-slow animation-delay-800"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-medical-blue/5 rounded-full animate-float animation-delay-1200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 hover-scale">Book Your Appointment</h2>
            <p className="text-xl text-muted-foreground animate-slide-up opacity-0 animation-delay-300">
              Take the first step towards better mobility and independence
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full animate-scale-in opacity-0 animation-delay-500"></div>
          </div>

          <Card className="shadow-card border-border/50 hover-lift animate-scale-in opacity-0 animation-delay-700 relative overflow-hidden group backdrop-blur-sm bg-background/95">
            {/* Enhanced card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl text-primary">Schedule a Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you to confirm your appointment
              </CardDescription>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6 stagger-animation">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Service Needed *</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the service you need" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prosthetics">Custom Prosthetics</SelectItem>
                      <SelectItem value="orthotics">Orthotic Solutions</SelectItem>
                      <SelectItem value="consultation">Initial Consultation</SelectItem>
                      <SelectItem value="repair">Repair/Adjustment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Preferred Time</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12:00 PM - 5:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5:00 PM - 7:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your specific needs or any questions you have..."
                    rows={4}
                  />
                </div>

                <Button type="submit" variant="medical" size="lg" className="w-full">
                  Submit Appointment Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;