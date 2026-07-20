import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

export interface ServiceDetailPageProps {
  title: string;
  tagline: string;
  description: string;
  path: string;
  image: string;
  features: string[];
  conditions: { title: string; description: string }[];
  seoDescription?: string;
}

const ServiceDetailPage = ({
  title,
  tagline,
  description,
  path,
  image,
  features,
  conditions,
  seoDescription,
}: ServiceDetailPageProps) => {
  return (
    <div className="min-h-screen">
      <Seo
        title={`${title} — Quantum Medical`}
        description={seoDescription ?? description.slice(0, 155)}
        path={path}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          name: title,
          description,
          provider: {
            "@type": "MedicalBusiness",
            name: "Quantum Medical",
            url: "https://quantum-stride-solutions.lovable.app/",
          },
        }}
      />
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm tracking-[0.3em] text-accent font-bold mb-4 uppercase">
                  {tagline}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  {title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <Link to="/book-appointment">Schedule Consultation</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-96 object-cover rounded-lg shadow-medical"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-lg border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions / Details */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                Key Details
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {conditions.map((c, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{c.title}</h3>
                      <p className="text-muted-foreground">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation with our specialists to explore the right {title.toLowerCase()} solution for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/book-appointment">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Call Us Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
