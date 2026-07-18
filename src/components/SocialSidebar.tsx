import { type MouseEvent } from "react";

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
  icon: React.FC<{ className?: string }>;
};

const socialLinks: SocialLink[] = [
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
];

const SocialSidebar = () => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      return;
    }
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
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3">
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
              transition-all duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2
              ${social.bg}
            `}
          >
            <Icon className="w-6 h-6 fill-current" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialSidebar;
