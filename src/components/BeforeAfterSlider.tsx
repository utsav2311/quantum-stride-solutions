import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero3 from "@/assets/hero-3.jpg";

const BeforeAfterSlider = () => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(p);
  };

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm tracking-[0.3em] text-accent font-semibold mb-4 uppercase">Real Results</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Before & <span className="text-primary">After</span>.
          </h2>
          <p className="text-lg text-muted-foreground">Drag the slider to see how the right prosthetic transforms daily life.</p>
        </div>

        <div
          ref={ref}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-medical border border-border select-none cursor-ew-resize"
          onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
          onMouseMove={(e) => dragging.current && move(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
          onTouchMove={(e) => dragging.current && move(e.touches[0].clientX)}
          onTouchEnd={() => (dragging.current = false)}
        >
          <img src={hero3} alt="Before rehabilitation" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img src={hero1} alt="After fitting a custom prosthetic" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/85 backdrop-blur text-xs font-semibold text-foreground">BEFORE</div>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">AFTER</div>

          <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
            <div className="absolute inset-y-0 -translate-x-1/2 w-1 bg-primary shadow-medical" />
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-xl">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
