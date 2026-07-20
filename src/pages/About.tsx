import Seo from "@/components/Seo";
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
import ceoPortrait from "@/assets/rahul-kashyap-ceo.png.asset.json";
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
      <Seo
        title="About Quantum Medical — Our Clinical Team & Mission"
        description="Meet the prosthetists, orthotists, and researchers behind Quantum Medical. 15+ years delivering personalized mobility care and innovative device design."
        path="/about"
      />
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
          <div className="max-w-4xl mx-auto">
            <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">
              Our Story
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6 animate-fade-in break-words">
              About <span className="italic text-accent">Quantum Medical</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Dedicated to transforming lives through innovative prosthetic and orthotic solutions.
            </p>
          </div>

        </div>
      </section>

      {/* Our Clinical Experts */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-accent leading-[1.1]">
              Our Clinical Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Portrait on orange background */}
            <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: "200ms" }}>
              <div className="relative rounded-2xl overflow-hidden bg-accent shadow-2xl aspect-[4/5] max-w-md mx-auto group">
                <img
                  src={ceoPortrait.url}
                  alt="Mr. Rahul Kashyap — Founder & Director, Certified Orthotist & Prosthetist"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="animate-fade-in space-y-5 order-2 lg:order-1">
              <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Mr. Rahul Kashyap
              </h3>
              <p className="text-base md:text-lg font-semibold text-foreground">
                Founder &amp; Director | Certified Orthotist &amp; Prosthetist (CPO)
              </p>
              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  Rahul Kashyap is a DHA- and DOH-licensed and accredited Certified Orthotist &amp; Prosthetist with nearly a decade of diverse clinical experience in orthotics and prosthetics. He earned his bachelor's degree from the prestigious All India Institute of Physical Medicine &amp; Rehabilitation (AIIPMR), Mumbai.
                </p>
                <p>
                  Following graduation, he began his professional journey with Ottobock, gaining advanced technical exposure before completing his structured residency training. Since moving to the UAE in 2014, Rahul has practiced across multiple leading healthcare facilities, building extensive expertise in managing complex orthotic and prosthetic cases with a strong focus on clinical precision and functional outcomes.
                </p>
                <div>
                  <p className="font-semibold text-foreground mb-3">Areas of Clinical Expertise:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Scoliosis bracing (pattern-specific management)</li>
                    <li>Cranial orthoses for head deformities</li>
                    <li>Neuromuscular orthotic management</li>
                    <li>Lower extremity prosthetic rehabilitation</li>
                  </ul>
                </div>
                <p>
                  Under his leadership, Xtremity has established a strong B2B clinical presence in Dubai and is now expanding structured partnerships across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-24 bg-medical-light/30">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">What Guides Us</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-4">Our <span className="italic text-accent">values</span>.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
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
            <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">The People</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-4">Meet our <span className="italic text-accent">team</span>.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals dedicated to your care and success.
            </p>
          </div>

          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="relative">
                  <img src={member.image} alt={`${member.role} at Quantum Medical, specialist in ${member.specialization}`} className="w-full h-64 object-cover" />
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
            <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Milestones</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-4">Our <span className="italic text-accent">achievements</span>.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and patient satisfaction.
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
            <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Recognized For</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-4">Certifications & <span className="italic text-accent">accreditations</span>.</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality is recognized by leading healthcare organizations.
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
            <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Our Mission</p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1] mb-8">Built for <span className="italic text-accent">movement</span>. Engineered for <span className="italic text-accent">life</span>.</h2>
            <blockquote className="border-l-4 border-accent pl-6 py-2 italic text-foreground/80 text-xl md:text-2xl text-left max-w-3xl mx-auto mb-8">
              "To empower individuals with mobility challenges by providing innovative, personalized prosthetic and orthotic solutions that restore independence, enhance quality of life, and inspire confidence in every step forward."
            </blockquote>
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