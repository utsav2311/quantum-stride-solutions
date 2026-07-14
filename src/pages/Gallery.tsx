import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import heroPatient from "@/assets/hero-patient.jpg";

const images = [
  { src: heroPatient, alt: "Patient walking confidently", tag: "Rehabilitation" },
  { src: hero1, alt: "Modern prosthetic leg outdoors", tag: "Fittings" },
  { src: hero2, alt: "Prosthetist fitting a limb", tag: "Clinic" },
  { src: hero3, alt: "Craftsman shaping an orthotic", tag: "Workshop" },
  { src: hero4, alt: "Child with pediatric prosthetic", tag: "Pediatric" },
  { src: hero5, alt: "Athlete on running blade", tag: "Sports" },
];

const Gallery = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Gallery</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
          Inside our <span className="text-primary">clinic</span> and workshop.
        </h1>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl border border-border ${i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`}>
              <img src={img.src} alt={img.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-background/85 backdrop-blur text-xs font-semibold text-foreground opacity-0 group-hover:opacity-100 transition-opacity">{img.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Gallery;
