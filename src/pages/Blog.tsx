import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  { title: "Choosing your first prosthetic: what to expect", date: "March 2026", excerpt: "A step-by-step guide for new amputees preparing for their first custom device.", tag: "Guide" },
  { title: "Diabetic foot care in the UAE climate", date: "February 2026", excerpt: "Practical daily care tips for protecting your feet in Dubai's heat.", tag: "Wellness" },
  { title: "How microprocessor knees are changing rehab", date: "January 2026", excerpt: "The science behind smart knee joints and who benefits most.", tag: "Technology" },
  { title: "Pediatric prosthetics: helping kids thrive", date: "December 2025", excerpt: "Design considerations and emotional support strategies for young patients.", tag: "Pediatric" },
];

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Blog</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05]">
          Insights on <span className="text-primary">mobility</span>, health and innovation.
        </h1>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {posts.map((p, i) => (
            <article key={i} className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-all">
              <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">{p.tag}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
              </div>
              <h3 className="font-display font-semibold text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{p.excerpt}</p>
              <Link to="#" className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                Read article <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Blog;
