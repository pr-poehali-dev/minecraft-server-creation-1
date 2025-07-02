import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface SocialLink {
  href: string;
  icon: string;
  label: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://discord.gg/historycraft",
    icon: "MessageCircle",
    label: "Discord",
    color: "minecraft-gray",
  },
  {
    href: "https://youtube.com/@historycraft",
    icon: "Youtube",
    label: "YouTube",
    color: "red-500",
  },
  {
    href: "#",
    icon: "Users",
    label: "VK",
    color: "minecraft-gray",
  },
];

function SocialButton({ link }: { link: SocialLink }) {
  const isExternal = link.href.startsWith("http");

  return (
    <Button
      variant="ghost"
      size="sm"
      className={`text-${link.color} hover:text-${link.color === "red-500" ? "red-400" : "white"}`}
      asChild
    >
      <a
        href={link.href}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        <Icon name={link.icon as any} size={16} className="mr-2" />
        {link.label}
      </a>
    </Button>
  );
}

export default function Footer() {
  return (
    <footer className="bg-minecraft-darker/50 py-8 px-4 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-minecraft-gray">
          © 2024 EpochCraft. Лучший Minecraft сервер с эволюционными эпохами
        </p>
        <div className="flex justify-center gap-6 mt-4">
          {socialLinks.map((link, index) => (
            <SocialButton key={index} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
