import { Instagram, Youtube } from "lucide-react";
import { type MouseEvent } from "react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 2.66 1.38 3.59.85.93 1.96 1.6 3.36 1.61 0 .67.01 1.34.02 2.01-.55.01-1.11.02-1.66.03-1.89.05-3.57 1.32-4.13 3.12-.12.39-.18.8-.18 1.21v6.72h-2.97c-.01-2.24.01-4.48-.01-6.72-.01-1.22-.08-2.45-.44-3.61-.37-1.18-1.06-2.24-2.04-2.98-1.04-.79-2.31-1.22-3.6-1.24-.02.67-.04 1.34-.04 2.01.85.02 1.71.3 2.37.87.66.57 1.07 1.37 1.14 2.23.06.71.03 1.43.04 2.14-.01.92-.1 1.83-.38 2.7-.37 1.15-1.05 2.17-2 2.9-1.55 1.18-3.68 1.48-5.55.89-1.25-.41-2.36-1.19-3.15-2.27-.94-1.3-1.32-2.92-1.15-4.47.16-1.35.77-2.63 1.69-3.59.86-.9 2-1.51 3.22-1.73.05.67.09 1.34.13 2.01-1.01.16-1.94.73-2.51 1.57-.57.84-.79 1.9-.58 2.89.19.88.72 1.68 1.45 2.22.81.6 1.84.87 2.84.74.95-.13 1.82-.62 2.43-1.35.55-.65.87-1.48.93-2.33.03-.48.02-.96.02-1.44V.02z" />
  </svg>
);

const socialLinks = [
  {
    name: "WhatsApp",
    href: "#",
    bg: "bg-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]",
    icon: WhatsAppIcon,
  },
  {
    name: "Instagram",
    href: "#",
    bg: "bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 hover:shadow-[0_0_20px_rgba(225,48,108,0.5)]",
    icon: Instagram,
  },
  {
    name: "YouTube",
    href: "#",
    bg: "bg-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]",
    icon: Youtube,
  },
  {
    name: "TikTok",
    href: "#",
    bg: "bg-black hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]",
    icon: TikTokIcon,
  },
];

const SocialSidebar = () => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      return;
    }
    // In a preview iframe, external links can misbehave; navigate the top window instead.
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
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            onClick={(e) => handleClick(e, social.href)}
            className={`
              w-12 h-12 rounded-full flex items-center justify-center text-white
              transition-all duration-300 hover:scale-110 hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2
              ${social.bg}
            `}
          >
            <Icon className="w-6 h-6 fill-current" strokeWidth={1.5} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialSidebar;
