import { Phone } from "lucide-react";
import { type MouseEvent } from "react";

const PHONE_NUMBER = "+971 50 135 4607";
const PHONE_HREF = "tel:+971501354607";

const FloatingCallButton = () => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // In a preview iframe, tel: links can misbehave; navigate the top window instead.
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
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 group flex items-center h-12 rounded-l-full bg-accent text-accent-foreground shadow-medical hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      <span className="absolute inset-0 rounded-l-full bg-accent animate-ping opacity-30 pointer-events-none" />
      <div className="w-12 h-12 flex items-center justify-center relative">
        <Phone className="w-5 h-5 fill-current" strokeWidth={2} />
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[200px] group-hover:mr-4">
        {PHONE_NUMBER}
      </span>
    </a>
  );
};

export default FloatingCallButton;
