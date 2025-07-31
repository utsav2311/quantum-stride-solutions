import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      details: ["123 Medical Center Drive", "Healthcare Plaza, Suite 200", "Cityville, ST 12345"]
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["Main: (555) 123-4567", "Emergency: (555) 123-4568", "Fax: (555) 123-4569"]
    },
    {
      icon: "⏰",
      title: "Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 3:00 PM", "Sunday: Closed"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@quantummedical.com", "appointments@quantummedical.com", "support@quantummedical.com"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-medical-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey? Contact us today to schedule your consultation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className="text-4xl mb-2">{info.icon}</div>
                <CardTitle className="text-xl text-primary">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-sm text-muted-foreground mb-1">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Follow us on social media for updates and patient success stories
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="sm">Facebook</Button>
            <Button variant="ghost" size="sm">Instagram</Button>
            <Button variant="ghost" size="sm">LinkedIn</Button>
            <Button variant="ghost" size="sm">YouTube</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;