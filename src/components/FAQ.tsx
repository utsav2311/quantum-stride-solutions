import { AnimatedSection } from "@/components/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to get my device?",
    a: "Most devices are delivered quickly thanks to our in-house 3D scanning, CAD/CAM design and digital manufacturing, significantly reducing wait times.",
  },
  {
    q: "Are the devices fully customized?",
    a: "Yes. Every prosthetic and orthotic device is custom-designed to your exact anatomy and comfort needs using advanced digital tools.",
  },
  {
    q: "Do I need multiple visits?",
    a: "Typically, only a few visits are needed for assessment, fitting and follow-up. Our digital workflow ensures faster progress with fewer appointments.",
  },
  {
    q: "What makes Quantum Medical different?",
    a: "We combine clinical expertise with digital precision, ensuring devices that fit better, perform better and are delivered faster.",
  },
  {
    q: "Is aftercare included?",
    a: "Absolutely. We provide continuous support, adjustments and follow-ups to ensure long-term comfort and performance.",
  },
  {
    q: "Can you create devices for children?",
    a: "Yes. We specialize in paediatric prosthetics and orthotics, designed to support growth, activity and comfort.",
  },
  {
    q: "Are the materials durable?",
    a: "All devices are made with high-quality, lightweight and durable materials designed for everyday use.",
  },
  {
    q: "Do you offer 3D-printed devices?",
    a: "Yes. We produce advanced 3D-printed prosthetics and orthoses that offer superior accuracy and comfort.",
  },
  {
    q: "How do I know which device is right for me?",
    a: "Our clinical team performs a detailed assessment to recommend the device that best matches your lifestyle and mobility goals.",
  },
  {
    q: "Do you offer quick adjustments?",
    a: "Yes. With on-site experts and digital design files, adjustments are quick, efficient and hassle-free.",
  },
];

const FAQ = () => (
  <section className="py-24 md:py-32 bg-background relative overflow-hidden">
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative z-10">
      <AnimatedSection animation="slide-up" duration="slow" className="max-w-3xl mb-16 text-center mx-auto">
        <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">FAQs</p>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
          Frequently asked <span className="italic text-accent">questions</span>.
        </h2>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border/60 rounded-xl bg-card px-6 hover:border-accent transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
