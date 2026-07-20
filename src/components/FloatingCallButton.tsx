import { Phone } from "lucide-react";
import { type MouseEvent } from "react";

const PHONE_NUMBER = "+971 50 135 4607";
const PHONE_HREF = "tel:+971501354607";

const FloatingCallButton = () => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.top && window.self !== window.top) {
      e.preventDefault();
      try {
        window.top.location.href = PHONE_HREF;
      } catch {
        window.open(PHONE_HREF, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <a
      href={PHONE_HREF}
      aria-label={`Call us at ${PHONE_NUMBER}`}
      onClick={handleClick}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 group focus:outline-none"
    >
      {/* Sliding label panel — hidden behind the icon, slides out to the left on hover */}
      <span
        className="
          absolute right-6 top-1/2 -translate-y-1/2
          h-11 pl-5 pr-8 flex items-center
          rounded-l-full bg-accent text-accent-foreground
          text-sm font-semibold whitespace-nowrap
          shadow-medical
          origin-right scale-x-0 opacity-0
          transition-all duration-300 ease-out
          group-hover:scale-x-100 group-hover:opacity-100
        "
      >
        {PHONE_NUMBER}
      </span>

      {/* Phone icon — sits outside as a circular badge, always visible */}
      <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-medical ring-4 ring-background/40 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[12deg]">
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40 pointer-events-none" />
        <Phone className="relative w-5 h-5 fill-current animate-wave" strokeWidth={2} />
      </span>
    </a>
  );
};

export default FloatingCallButton;
