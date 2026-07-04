const partners = [
  "Apollo Hospitals",
  "Fortis Healthcare",
  "AIIMS",
  "Manipal",
  "Medanta",
  "Max Health",
];

const ClientLogos = () => {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10">
          Referred by leading hospitals & rehab centers across India
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((p) => (
            <div
              key={p}
              className="group text-center font-serif text-xl lg:text-2xl text-muted-foreground/70 hover:text-foreground transition-colors duration-300 tracking-tight"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
