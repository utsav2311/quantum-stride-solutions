import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  MessageSquare,
  HeartHandshake,
  Shield,
  Zap,
  Users
} from "lucide-react";

// Import images
import clinicBackground from "@/assets/clinic-background.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: [
        "123 Healthcare Boulevard",
        "Medical District, MD 12345",
        "United States"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: [
        "Main: (555) 123-4567",
        "Emergency: (555) 987-6543",
        "Fax: (555) 123-4568"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "info@quantummedical.com",
        "appointments@quantummedical.com",
        "support@quantummedical.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 3:00 PM",
        "Sunday: Emergency Only"
      ]
    }
  ];

  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Appointment",
      description: "Book your consultation or follow-up appointment with our specialists",
      action: "Book Now"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "General Inquiry",
      description: "Get answers to your questions about our services and treatments",
      action: "Ask Question"
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Patient Support",
      description: "Access ongoing support for your device care and maintenance",
      action: "Get Support"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Insurance Verification",
      description: "Verify your insurance coverage and understand your benefits",
      action: "Check Coverage"
    }
  ];

  const departments = [
    {
      name: "Prosthetics Department",
      phone: "(555) 123-4567 ext. 101",
      email: "prosthetics@quantummedical.com",
      specialist: "Dr. Sarah Johnson"
    },
    {
      name: "Orthotics Department",
      phone: "(555) 123-4567 ext. 102",
      email: "orthotics@quantummedical.com",
      specialist: "Michael Chen, CO"
    },
    {
      name: "Repair Services",
      phone: "(555) 123-4567 ext. 103",
      email: "repairs@quantummedical.com",
      specialist: "Technical Team"
    },
    {
      name: "Billing & Insurance",
      phone: "(555) 123-4567 ext. 104",
      email: "billing@quantummedical.com",
      specialist: "Finance Department"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center animate-floating-slow" style={{backgroundImage: `url(${clinicBackground})`}}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-lg px-4 py-2">
              Get In Touch
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-up">
              We're here to help you on your journey to enhanced mobility and independence
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl text-primary mb-2">Send Us a Message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-base font-medium">First Name</Label>
                      <Input id="firstName" className="mt-2" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-base font-medium">Last Name</Label>
                      <Input id="lastName" className="mt-2" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">Email</Label>
                      <Input id="email" type="email" className="mt-2" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">Phone</Label>
                      <Input id="phone" className="mt-2" placeholder="Enter your phone number" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-base font-medium">Subject</Label>
                    <Input id="subject" className="mt-2" placeholder="What is this regarding?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-base font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      className="mt-2 min-h-[120px]" 
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="consent" className="mt-1" />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground">
                      I consent to being contacted by Quantum Medical regarding my inquiry and understand that my information will be handled according to the privacy policy.
                    </Label>
                  </div>
                  
                  <Button size="lg" className="w-full text-lg py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 md:py-24 bg-medical-light/30">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the option that best describes what you need assistance with
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 cursor-pointer group animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Department Contacts</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reach out directly to the department that can best assist you
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-primary">{dept.name}</CardTitle>
                  <CardDescription className="text-lg">Specialist: {dept.specialist}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-red-500/10 to-orange-500/10">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <Card className="max-w-4xl mx-auto p-8 border-red-200 bg-red-50/50">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-full mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Emergency Contact</h2>
              <p className="text-lg text-red-700 mb-6 max-w-2xl mx-auto">
                If you have a device malfunction or urgent medical concern related to your prosthetic or orthotic device, contact us immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="destructive" size="lg" className="px-8 py-4 text-lg">
                  Emergency: (555) 987-6543
                </Button>
                <p className="text-sm text-red-600">Available 24/7</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;