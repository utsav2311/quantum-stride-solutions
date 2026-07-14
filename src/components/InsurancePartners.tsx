const partners = [
  "Daman", "ADNIC", "AXA", "MetLife", "Cigna", "Bupa", "Oman Insurance", "Neuron",
];

const InsurancePartners = () => (
  <section className="py-16 md:py-20 bg-secondary/40 border-y border-border">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-3 uppercase">Insurance Partners</p>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
          Covered by the region's leading insurers
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
        {partners.map((p, i) => (
          <div
            key={i}
            className="h-16 rounded-xl border border-border bg-background flex items-center justify-center text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary/40 hover:-translate-y-0.5 transition-all"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InsurancePartners;
