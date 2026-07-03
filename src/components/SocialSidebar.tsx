import { useState, type MouseEvent } from "react";
import { Share2, type LucideIcon } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 448 512" fill="currentColor">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25v349.44a162.55,162.55,0,1,1-140-185v89.89a74.53,74.53,0,1,0,52.23,71.12V0h88.18a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

type SocialLink = {
  name: string;
  href: string;
  bg: string;
  icon: React.FC<{ className?: string }> | LucideIcon;
};

const socialLinks: SocialLink[] = [
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
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    href: "#",
    bg: "bg-[#FF0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]",
    icon: YouTubeIcon,
  },
  {
    name: "TikTok",
    href: "#",
    bg: "bg-black hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]",
    icon: TikTokIcon,
  },
];

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-col-reverse items-center gap-3"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {socialLinks.map((social, index) => {
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
              absolute bottom-0 left-0 w-12 h-12 rounded-full flex items-center justify-center text-white
              transition-all duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2
              ${social.bg}
              ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none scale-75"}
            `}
            style={{
              transform: isOpen ? `translateY(-${(index + 1) * 3.5}rem)` : "translateY(0) scale(0.75)",
              transitionDelay: isOpen ? `${index * 60}ms` : `${(socialLinks.length - 1 - index) * 40}ms`,
            }}
          >
            <Icon className="w-6 h-6 fill-current" />
          </a>
        );
      })}

      <button
        type="button"
        aria-label="Open social links"
        aria-expanded={isOpen}
        className={`
          relative w-12 h-12 rounded-full flex items-center justify-center text-white
          transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2
          bg-gradient-to-br from-primary via-primary/90 to-primary/70
          hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]
        `}
      >
        <Share2 className="w-6 h-6 transition-transform duration-300" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }} />
      </button>
    </div>
  );
};

export default SocialSidebar;
