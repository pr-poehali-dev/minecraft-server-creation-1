import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const navigationLinks = [
  {
    href: "/mods",
    icon: "Package",
    label: "Моды",
    color: "minecraft-orange",
  },
  {
    href: "/epochs",
    icon: "Clock",
    label: "Все эпохи",
    color: "minecraft-purple",
  },
  {
    href: "/players",
    icon: "Users",
    label: "Игроки",
    color: "minecraft-green",
  },
  {
    href: "/creators",
    icon: "Video",
    label: "Контентмейкеры",
    color: "red-500",
  },
  {
    href: "/settlements",
    icon: "MapPin",
    label: "Страны и города",
    color: "minecraft-green",
  },
  {
    href: "/team",
    icon: "Users",
    label: "Наша команда",
    color: "minecraft-orange",
  },
  {
    href: "/map",
    icon: "Map",
    label: "Онлайн карта",
    color: "minecraft-blue",
  },
];

const heroIcons = [
  {
    icon: "Crown",
    color: "minecraft-orange",
  },
  {
    icon: "Box",
    color: "minecraft-green",
  },
  {
    icon: "Youtube",
    color: "red-500",
  },
];

function BackgroundPattern() {
  return (
    <div className="absolute inset-0 opacity-20">
      <div
        className="w-full h-full bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

function StarsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HeroIcons() {
  return (
    <div className="mb-6 flex justify-center gap-4">
      {heroIcons.map((item, index) => (
        <div
          key={index}
          className={`bg-minecraft-dark/50 border border-${item.color}/30 px-4 py-2 rounded-lg`}
        >
          <Icon
            name={item.icon as any}
            size={32}
            className={`text-${item.color}`}
          />
        </div>
      ))}
    </div>
  );
}

function NeonTitle() {
  return (
    <div className="relative mb-4">
      <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-violet-500/30 blur-2xl scale-125 animate-pulse absolute inset-0 z-0">
        HISTORYCRAFT
      </h1>
      <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400 bg-clip-text text-transparent relative z-10 drop-shadow-[0_0_20px_rgba(236,72,153,0.5)] animate-pulse">
        HISTORYCRAFT
      </h1>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/30 to-violet-500/20 blur-3xl animate-pulse z-0" />
    </div>
  );
}

function OnlineStatus() {
  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="flex items-center gap-2 bg-minecraft-dark/50 px-4 py-2 rounded-full border border-minecraft-green/30">
        <div className="w-2 h-2 bg-minecraft-green rounded-full animate-pulse" />
        <Icon name="Users" size={20} className="text-minecraft-green" />
        <span className="text-minecraft-green font-semibold text-lg">
          247 игроков онлайн
        </span>
      </div>
    </div>
  );
}

function NavigationButtons() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
      {navigationLinks.map((link, index) => (
        <Button
          key={index}
          size="lg"
          variant="outline"
          className={`border-${link.color} text-${link.color} hover:bg-${link.color} hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105`}
          asChild
        >
          <a href={link.href}>
            <Icon name={link.icon as any} size={20} className="mr-2" />
            {link.label}
          </a>
        </Button>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <BackgroundPattern />
      <StarsBackground />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <HeroIcons />
        <NeonTitle />
        <OnlineStatus />

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Погрузись в мир, где каждая эпоха определяет твою судьбу
        </p>

        <p className="text-minecraft-gray mb-8 max-w-3xl mx-auto">
          От каменного века до космической эры — развивай цивилизацию вместе с
          сообществом игроков. PvP и PvE режимы, уникальные моды и динамичные
          эпохи!
        </p>

        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-minecraft-green hover:bg-minecraft-green/80 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Играть сейчас
            </Button>
          </div>

          <NavigationButtons />
        </div>
      </div>
    </section>
  );
}
