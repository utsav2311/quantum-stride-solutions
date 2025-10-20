import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Heart, Target, Lightbulb, Shield, Globe, Calendar, CheckCircle, Star } from "lucide-react";

// Import images
import prostheticProfessional from "@/assets/prosthetic-professional.jpg";
import researchBackground from "@/assets/research-background.jpg";
import clinicBackground from "@/assets/clinic-background.jpg";
const About = () => {
  const values = [{
    icon: <Heart className="w-8 h-8" />,
    title: "Compassionate Care",
    description: "We treat every patient with empathy, understanding their unique challenges and providing personalized support throughout their journey."
  }, {
    icon: <Target className="w-8 h-8" />,
    title: "Excellence in Service",
    description: "Our commitment to excellence drives us to continuously improve our techniques, technologies, and patient outcomes."
  }, {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation & Research",
    description: "We stay at the forefront of prosthetic and orthotic technology, investing in research and development for better solutions."
  }, {
    icon: <Shield className="w-8 h-8" />,
    title: "Quality Assurance",
    description: "Every device we create undergoes rigorous testing and quality control to ensure safety, durability, and optimal performance."
  }];
  const team = [{
    name: "",
    role: "Chief Prosthetist",
    credentials: "CPO, PhD",
    experience: "15+ years",
    specialization: "Lower Limb Prosthetics",
    image: prostheticProfessional
  }, {
    name: "",
    role: "Senior Orthotist",
    credentials: "CO, MSc",
    experience: "12+ years",
    specialization: "Spinal Orthotics",
    image: prostheticProfessional
  }, {
    name: "",
    role: "Research Director",
    credentials: "PhD, CPO",
    experience: "18+ years",
    specialization: "Myoelectric Prosthetics",
    image: prostheticProfessional
  }];
  const achievements = [{
    number: "2,500+",
    description: "Patients Served",
    icon: <Users className="w-6 h-6" />
  }, {
    number: "15+",
    description: "Years of Excellence",
    icon: <Calendar className="w-6 h-6" />
  }, {
    number: "98%",
    description: "Patient Satisfaction",
    icon: <Star className="w-6 h-6" />
  }, {
    number: "50+",
    description: "Healthcare Partners",
    icon: <Globe className="w-6 h-6" />
  }];
  const certifications = ["ABC Certified Facility", "ISO 9001:2015 Quality Management", "FDA Approved Manufacturing", "AOPA Member Organization", "Joint Commission Accredited", "Medicare & Medicaid Approved"];
  return <div className="min-h-screen relative">
      <Background3D />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${clinicBackground})`
        }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90"></div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 text-lg px-4 py-2">
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 animate-fade-in">
              About Quantum Medical
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-slide-up">
              Dedicated to transforming lives through innovative prosthetic and orthotic solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2008, Quantum Medical began with a simple yet powerful mission: to restore independence and improve quality of life for individuals requiring prosthetic and orthotic care. What started as a small clinic has grown into a leading healthcare facility serving thousands of patients across the region.
                </p>
                <p>Our founder, Dr. Rahul Kashyap, recognized the need for more personalized, technology-driven solutions in the prosthetics and orthotics field. With a background in biomedical engineering and over 15 years of clinical experience, she assembled a team of dedicated professionals who share her vision of excellence in patient care.</p>
                <p>
                  Today, we continue to push the boundaries of what's possible in prosthetic and orthotic technology, while never losing sight of the human element that makes our work so meaningful. Every device we create represents hope, independence, and the possibility of a better tomorrow.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={prostheticProfessional} alt="Our professional team" className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24 bg-medical-light/30">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to your care and success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="relative">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge variant="secondary">{member.credentials}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-lg">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Experience:</span>
                      <span className="text-sm text-foreground">{member.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Specialization:</span>
                      <span className="text-sm text-foreground">{member.specialization}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and patient satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-full mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <p className="text-muted-foreground">{achievement.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Certifications & Accreditations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality is recognized by leading healthcare organizations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => <Card key={index} className="p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="text-foreground font-medium">{cert}</div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-24 bg-medical-light/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url(${researchBackground})`
        }}></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Our Mission</h2>
            <div className="text-2xl md:text-3xl text-muted-foreground leading-relaxed mb-8 italic">
              "To empower individuals with mobility challenges by providing innovative, personalized prosthetic and orthotic solutions that restore independence, enhance quality of life, and inspire confidence in every step forward."
            </div>
            <Button size="lg" className="px-8 py-4 text-lg">
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;