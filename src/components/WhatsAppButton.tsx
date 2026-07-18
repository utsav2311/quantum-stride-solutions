import { type MouseEvent } from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '971558488759'; // +971 55 848 8759
const DEFAULT_MESSAGE = "Hello! I'd like to know more about your services.";

const WhatsAppButton = () => {
  const href = `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Lovable runs the app inside a preview iframe. WhatsApp blocks iframe loads
    // (X-Frame-Options), so when embedded we navigate the top window instead.
    if (typeof window !== 'undefined' && window.top && window.self !== window.top) {
      e.preventDefault();
      try {
        window.top.location.href = href;
      } catch {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-50 group flex items-center justify-center rounded-full bg-[#25D366] p-3 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <MessageCircle className="relative h-5 w-5 fill-white" strokeWidth={2} />
    </a>
  );
};

export default WhatsAppButton;
