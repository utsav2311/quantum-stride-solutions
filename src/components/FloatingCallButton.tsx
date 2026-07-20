import { Phone, MessageCircle } from "lucide-react";
import { type MouseEvent } from "react";

const PHONE_NUMBER = "+971 55 848 8759";
const PHONE_HREF = "tel:+971558488759";
const WHATSAPP_NUMBER = "971558488759";
const WHATSAPP_MESSAGE = "Hello! I'd like to know more about your services.";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

type ActionButton = {
  id: string;
  href: string;
  label: string;
  icon: React.FC<{ className?: string }>;
};

const actionButtons: ActionButton[] = [
  {
    id: "call",
    href: PHONE_HREF,
    label: PHONE_NUMBER,
    icon: Phone,
  },
  {
    id: "whatsapp",
    href: WHATSAPP_HREF,
    label: "WhatsApp",
    icon: MessageCircle,
  },
];

const FloatingCallButton = () => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (typeof window !== "undefined" && window.top && window.self !== window.top) {
      e.preventDefault();
      try {
        window.top.location.href = href;
      } catch {
        window.open(href, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3">
      {actionButtons.map((action) => {
        const Icon = action.icon;
        return (
          <a
            key={action.id}
            href={action.href}
            target={action.id === "whatsapp" ? "_blank" : undefined}
            rel={action.id === "whatsapp" ? "noopener noreferrer" : undefined}
            aria-label={action.id === "call" ? `Call us at ${action.label}` : `Chat with us on ${action.label}`}
            onClick={(e) => handleClick(e, action.href)}
            className="group relative flex items-center justify-center focus:outline-none"
          >
            {/* Label — pops out to the left of the icon on hover */}
            <span
              className="
                absolute right-12 top-1/2 -translate-y-1/2
                h-10 pl-4 pr-3 flex items-center
                rounded-l-full bg-accent text-accent-foreground
                text-sm font-semibold whitespace-nowrap
                shadow-medical
                origin-right scale-x-0 opacity-0
                transition-all duration-300 ease-out
                group-hover:scale-x-100 group-hover:opacity-100
              "
            >
              {action.label}
            </span>

            {/* Icon badge */}
            <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground shadow-medical ring-4 ring-background/40 transition-transform duration-300 group-hover:scale-110">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40 pointer-events-none" />
              <Icon className="relative w-5 h-5 fill-current animate-wave" />
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default FloatingCallButton;
