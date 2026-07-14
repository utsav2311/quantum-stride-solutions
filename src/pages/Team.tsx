import Header from "@/components/Header";
import Footer from "@/components/Footer";

const team = [
  { name: "Dr. Ahmed Al Marzooqi", role: "Chief Prosthetist", credentials: "ISPO Certified · 20+ years" },
  { name: "Sarah Mahmoud", role: "Senior Orthotist", credentials: "DHA Licensed · Pediatric specialist" },
  { name: "Rajiv Kumar", role: "Rehabilitation Lead", credentials: "PhD Biomechanics" },
  { name: "Dr. Layla Hassan", role: "Physiotherapist", credentials: "MSc Sports Rehab" },
  { name: "Marco Rossi", role: "CAD/CAM Engineer", credentials: "MSc Biomedical Eng." },
  { name: "Fatima Al Suwaidi", role: "Patient Care Coordinator", credentials: "Bilingual EN/AR" },
];

const Team = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Our Team</p>
        <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] mb-6">
          Meet the <span className="text-primary">specialists</span> behind every device.
        </h1>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {team.map((m, i) => (
            <div key={i} className="rounded-2xl border border-border overflow-hidden bg-card hover:border-primary/40 hover:-translate-y-1 transition-all">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/10 to-background grid place-items-center">
                <span className="font-display font-bold text-5xl text-primary/40">{m.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-foreground">{m.name}</h3>
                <p className="text-accent font-medium text-sm mt-1">{m.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{m.credentials}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Team;
