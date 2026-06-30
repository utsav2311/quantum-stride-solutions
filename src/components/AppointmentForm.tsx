import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "@/components/animations";
import { CheckCircle, Shield, Lock, ArrowRight } from "lucide-react";

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
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    console.log("Appointment request:", formData);
    
    toast({
      title: "Appointment Request Submitted",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });

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

  const inputClass = "w-full px-4 py-3 rounded-xl bg-muted/50 border border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary transition-all duration-200";

  return (
    <section id="appointment" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">
            Book Your Visit
          </p>
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground leading-[1.05]">
            Ready for your <span className="italic text-accent">next step</span>?
          </h2>
        </div>

        <AnimatedSection animation="scale-in" duration="normal" className="max-w-5xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-xl border border-border/60 shadow-2xl shadow-primary/10 overflow-hidden rounded-3xl">

            <div className="flex flex-col lg:flex-row">
              {/* Left info panel */}
              <div className="lg:w-2/5 bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <div className="h-1 w-14 bg-accent mb-8 rounded-full"></div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-playfair">
                    Ready for your next step?
                  </h2>
                  <p className="text-primary-foreground/70 text-sm md:text-base leading-relaxed">
                    Our specialists are dedicated to restoring your mobility with precision-engineered prosthetics and orthotics.
                  </p>
                </div>

                <div className="relative z-10 mt-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">Certified</p>
                      <p className="text-sm text-primary-foreground/80">Clinical excellence</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/50">Secure</p>
                      <p className="text-sm text-primary-foreground/80">Confidential data handling</p>
                    </div>
                  </div>
                </div>

                {/* Abstract wave overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100" stroke="currentColor" fill="transparent" strokeWidth="0.5" />
                    <path d="M0 80 C 30 20 60 20 100 80" stroke="currentColor" fill="transparent" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>

              {/* Right form panel */}
              <CardContent className="lg:w-3/5 p-8 md:p-12">
                <div className="mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-playfair">Book Your Appointment</h1>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Fill out the form below and our clinical team will contact you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Enter your first name"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Needed *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className={inputClass}>
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

                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2 md:col-span-2">
                      <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Preferred Time</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger className={inputClass}>
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
                    <Label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your specific needs or any questions you have..."
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group bg-primary text-primary-foreground hover:bg-primary-hover rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300 py-6 text-base font-semibold"
                  >
                    <span>Submit Appointment Request</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <p className="text-center text-xs text-muted-foreground mt-6 flex items-center justify-center gap-2">
                  <Lock className="w-3.5 h-3.5" />
                  Your information is handled with clinical confidentiality.
                </p>
              </CardContent>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AppointmentForm;
