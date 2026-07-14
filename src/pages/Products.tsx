import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "Artificial Legs", desc: "Lightweight lower-limb prosthetics with carbon-fiber sockets.", icon: "🦿" },
  { name: "Artificial Hands", desc: "Myoelectric and mechanical upper-limb solutions.", icon: "✋" },
  { name: "Microprocessor Knees", desc: "Smart knee joints that adapt to your gait in real time.", icon: "🧠" },
  { name: "Orthopedic Shoes", desc: "Custom therapeutic footwear for diabetic and post-surgical needs.", icon: "👟" },
  { name: "Braces & Supports", desc: "Spinal, knee, ankle and wrist orthoses.", icon: "🩹" },
  { name: "Wheelchairs", desc: "Manual and powered wheelchairs, custom seating.", icon: "♿" },
  { name: "Pediatric Devices", desc: "Growth-adjustable prosthetics designed for children.", icon: "🧒" },
  { name: "Custom Insoles", desc: "3D-scanned foot orthotics for daily comfort.", icon: "👣" },
];

const Products = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Product Catalog</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6">
          Devices engineered for <span className="text-primary">every</span> life stage.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our full range of prosthetic, orthotic and mobility products.</p>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((p, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 hover:shadow-soft transition-all">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 grid place-items-center text-3xl mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">{p.icon}</div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full h-12 px-8">
            <Link to="/book-appointment">Request a fitting <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Products;
