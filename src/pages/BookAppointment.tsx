import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { CalendarIcon, Clock, MapPin, Phone, Mail, FileText, User, Heart } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';


const BookAppointment = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    serviceType: '',
    appointmentType: '',
    preferredTime: '',
    medicalHistory: '',
    currentCondition: '',
    previousDevices: '',
    insuranceProvider: '',
    referralSource: '',
    emergencyContact: '',
    emergencyPhone: '',
    specialRequirements: '',
    consentToTreatment: false,
    privacyPolicy: false
  });

  const { toast } = useToast();

  const serviceTypes = [
    'Upper Limb Prosthetics',
    'Lower Limb Prosthetics', 
    'Custom Orthotics',
    'Medical Equipment',
    'Repair & Maintenance',
    'Consultation Only'
  ];

  const appointmentTypes = [
    'Initial Consultation',
    'Follow-up Visit',
    'Fitting Appointment',
    'Adjustment/Repair',
    'Progress Check'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consentToTreatment || !formData.privacyPolicy) {
      toast({
        title: "Please accept all required terms",
        description: "You must consent to treatment and privacy policy to proceed.",
        variant: "destructive"
      });
      return;
    }

    if (!date) {
      toast({
        title: "Please select a date",
        description: "You must select an appointment date to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('appointments').insert({
        full_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        date_of_birth: formData.dateOfBirth || null,
        gender: 'Not specified',
        appointment_date: format(date, 'yyyy-MM-dd'),
        appointment_time: formData.preferredTime,
        appointment_type: formData.appointmentType,
        preferred_location: 'Main Clinic',
        medical_condition: formData.currentCondition,
        previous_devices: formData.previousDevices ? true : false,
        previous_devices_details: formData.previousDevices,
        current_medications: formData.medicalHistory,
        emergency_contact_name: formData.emergencyContact,
        emergency_contact_relationship: 'Not specified',
        emergency_contact_phone: formData.emergencyPhone,
        special_requests: formData.specialRequirements,
        consent_treatment: formData.consentToTreatment,
        consent_privacy: formData.privacyPolicy,
        consent_contact: true,
      });

      if (error) throw error;

      toast({
        title: "Appointment Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        serviceType: '',
        appointmentType: '',
        preferredTime: '',
        medicalHistory: '',
        currentCondition: '',
        previousDevices: '',
        insuranceProvider: '',
        referralSource: '',
        emergencyContact: '',
        emergencyPhone: '',
        specialRequirements: '',
        consentToTreatment: false,
        privacyPolicy: false
      });
      setDate(undefined);
    } catch (error: any) {
      console.error('Error submitting appointment:', error);
      toast({
        title: "Error",
        description: "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="bg-background relative overflow-hidden pt-20">

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-playfair">
            Book Your <span className="text-accent">Appointment</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards improved mobility and independence. Our comprehensive appointment booking ensures we have all the information needed to provide you with the best possible care.
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover-lift animate-scale-in opacity-0 animation-delay-200">
            <CardContent className="pt-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Quick Scheduling</h3>
              <p className="text-muted-foreground">Book your appointment in just a few minutes</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover-lift animate-scale-in opacity-0 animation-delay-400">
            <CardContent className="pt-6">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Personalized Care</h3>
              <p className="text-muted-foreground">Tailored treatment plans for your unique needs</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover-lift animate-scale-in opacity-0 animation-delay-600">
            <CardContent className="pt-6">
              <User className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Certified professionals with years of experience</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Appointment Form */}
        <Card className="max-w-4xl mx-auto shadow-lg animate-scale-in opacity-0 animation-delay-800">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-primary">Appointment Details</CardTitle>
            <CardDescription className="text-lg">
              Please fill out all required information to help us prepare for your visit
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <User className="h-6 w-6" />
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input 
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <CalendarIcon className="h-6 w-6" />
                  Appointment Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Service Type *</Label>
                    <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                      <SelectTrigger className="transition-all duration-300 focus:scale-105">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((service) => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Appointment Type *</Label>
                    <Select value={formData.appointmentType} onValueChange={(value) => handleInputChange('appointmentType', value)}>
                      <SelectTrigger className="transition-all duration-300 focus:scale-105">
                        <SelectValue placeholder="Select appointment type" />
                      </SelectTrigger>
                      <SelectContent>
                        {appointmentTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Preferred Date *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal transition-all duration-300 focus:scale-105",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="p-3 pointer-events-auto"
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Preferred Time *</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger className="transition-all duration-300 focus:scale-105">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Medical Information
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentCondition">Current Condition/Reason for Visit *</Label>
                    <Textarea 
                      id="currentCondition"
                      value={formData.currentCondition}
                      onChange={(e) => handleInputChange('currentCondition', e.target.value)}
                      placeholder="Please describe your current condition and what you hope to achieve from this appointment..."
                      className="min-h-[100px] transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="medicalHistory">Relevant Medical History</Label>
                    <Textarea 
                      id="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                      placeholder="Please include any relevant medical conditions, surgeries, or treatments..."
                      className="min-h-[80px] transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="previousDevices">Previous Prosthetic/Orthotic Experience</Label>
                    <Textarea 
                      id="previousDevices"
                      value={formData.previousDevices}
                      onChange={(e) => handleInputChange('previousDevices', e.target.value)}
                      placeholder="Have you used prosthetics or orthotics before? Please describe your experience..."
                      className="min-h-[80px] transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                      <Input 
                        id="insuranceProvider"
                        value={formData.insuranceProvider}
                        onChange={(e) => handleInputChange('insuranceProvider', e.target.value)}
                        placeholder="Insurance company name"
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="referralSource">How did you hear about us?</Label>
                      <Input 
                        id="referralSource"
                        value={formData.referralSource}
                        onChange={(e) => handleInputChange('referralSource', e.target.value)}
                        placeholder="Doctor referral, online, friend, etc."
                        className="transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                  <Phone className="h-6 w-6" />
                  Emergency Contact
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                    <Input 
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                    <Input 
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                      className="transition-all duration-300 focus:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requirements */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="specialRequirements">Special Requirements or Accommodations</Label>
                  <Textarea 
                    id="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    placeholder="Do you need wheelchair access, interpreter services, or any other accommodations?"
                    className="min-h-[80px] transition-all duration-300 focus:scale-105"
                  />
                </div>
              </div>

              {/* Consent and Privacy */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-primary">Consent & Privacy</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="consentToTreatment"
                      checked={formData.consentToTreatment}
                      onCheckedChange={(checked) => handleInputChange('consentToTreatment', checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="consentToTreatment" className="text-sm leading-relaxed">
                      I consent to treatment and authorize the healthcare provider to examine, treat, and provide care as deemed necessary. I understand the nature of my condition and the proposed treatment. *
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="privacyPolicy"
                      checked={formData.privacyPolicy}
                      onCheckedChange={(checked) => handleInputChange('privacyPolicy', checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="privacyPolicy" className="text-sm leading-relaxed">
                      I have read and agree to the Privacy Policy and consent to the collection, use, and disclosure of my personal health information for treatment, payment, and healthcare operations. *
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full text-lg py-6 hover-lift animate-glow"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  We'll contact you within 24 hours to confirm your appointment details.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="hover-lift animate-scale-in opacity-0 animation-delay-1000">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Need Immediate Assistance?</CardTitle>
              <CardDescription>Contact us directly for urgent appointments or questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Phone className="h-8 w-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
                <div className="space-y-2">
                  <Mail className="h-8 w-8 text-accent mx-auto" />
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-muted-foreground">appointments@example.com</p>
                </div>
                <div className="space-y-2">
                  <MapPin className="h-8 w-8 text-primary mx-auto" />
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-muted-foreground">123 Medical Center Dr<br />Healthcare City, HC 12345</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookAppointment;