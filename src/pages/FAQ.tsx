import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const FAQPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Help Center</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl text-foreground leading-[1.05]">
          Frequently asked <span className="text-primary">questions</span>.
        </h1>
      </div>
    </section>
    <FAQSection />
    <Footer />
  </div>
);

export default FAQPage;
