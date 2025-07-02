import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Creator {
  id: string;
  name: string;
  avatar: string;
  description: string;
  specialization: string;
  followers: string;
  isVerified: boolean;
  socials: {
    youtube?: string;
    twitch?: string;
    discord?: string;
    telegram?: string;
    vk?: string;
    instagram?: string;
  };
  stats: {
    videos: number;
    subscribers: string;
    views: string;
  };
  recentContent: string[];
}

export default function Creators() {
  const [filterBy, setFilterBy] = useState<"all" | "youtube" | "twitch">("all");

  const creators: Creator[] = [
    {
      id: "1",
      name: "AlexCrafter",
      avatar: "🎮",
      description:
        "Создаю обучающие гайды по Minecraft и показываю интересные моды. Специализируюсь на постройках и автоматизации.",
      specialization: "YouTube контент",
      followers: "45K",
      isVerified: true,
      socials: {
        youtube: "https://youtube.com/@alexcrafter",
        discord: "AlexCrafter#1234",
        telegram: "https://t.me/alexcrafter",
        vk: "https://vk.com/alexcrafter",
      },
      stats: {
        videos: 156,
        subscribers: "45.2K",
        views: "2.1M",
      },
      recentContent: [
        "Как построить автоматическую ферму в HISTORYCRAFT",
        "Обзор модов Промышленной эпохи",
        "Секреты выживания в Каменном веке",
      ],
    },
    {
      id: "2",
      name: "StreamQueen",
      avatar: "👑",
      description:
        "Стримлю прохождение HISTORYCRAFT каждый день! PvP баттлы, строительство городов и взаимодействие с чатом.",
      specialization: "Twitch стримы",
      followers: "12K",
      isVerified: true,
      socials: {
        twitch: "https://twitch.tv/streamqueen",
        youtube: "https://youtube.com/@streamqueen",
        discord: "StreamQueen#5678",
        instagram: "https://instagram.com/streamqueen_mc",
      },
      stats: {
        videos: 89,
        subscribers: "12.5K",
        views: "850K",
      },
      recentContent: [
        "24-часовой марафон строительства замка",
        "PvP турнир на арене",
        "Совместное прохождение с подписчиками",
      ],
    },
    {
      id: "3",
      name: "BuildMaster",
      avatar: "🏗️",
      description:
        "Архитектор виртуальных миров. Создаю невероятные постройки и обучаю других строительным техникам.",
      specialization: "YouTube + Обучение",
      followers: "28K",
      isVerified: true,
      socials: {
        youtube: "https://youtube.com/@buildmaster",
        discord: "BuildMaster#9999",
        telegram: "https://t.me/buildmaster_mc",
        vk: "https://vk.com/buildmaster",
      },
      stats: {
        videos: 203,
        subscribers: "28.7K",
        views: "1.5M",
      },
      recentContent: [
        "Мега-постройка: Воссоздание Колизея",
        "10 секретов красивых построек",
        "Тур по самым красивым городам сервера",
      ],
    },
    {
      id: "4",
      name: "PvPPro",
      avatar: "⚔️",
      description:
        "Профессиональный PvP игрок. Показываю лучшие тактики боя и участвую в турнирах сервера.",
      specialization: "Twitch + YouTube",
      followers: "19K",
      isVerified: false,
      socials: {
        twitch: "https://twitch.tv/pvppro",
        youtube: "https://youtube.com/@pvppro",
        discord: "PvPPro#4321",
      },
      stats: {
        videos: 67,
        subscribers: "19.1K",
        views: "920K",
      },
      recentContent: [
        "Как выиграть любой PvP бой",
        "Лучшие комбинации оружия по эпохам",
        "Разбор моих топ-5 побед",
      ],
    },
    {
      id: "5",
      name: "TechGuru",
      avatar: "🔧",
      description:
        "Изучаю технические аспекты модов и создаю сложные редстоун-механизмы. Помогаю с автоматизацией.",
      specialization: "YouTube гайды",
      followers: "31K",
      isVerified: true,
      socials: {
        youtube: "https://youtube.com/@techguru",
        discord: "TechGuru#7777",
        telegram: "https://t.me/techguru_mc",
      },
      stats: {
        videos: 178,
        subscribers: "31.4K",
        views: "1.8M",
      },
      recentContent: [
        "Полная автоматизация ресурсов",
        "Создание суперкомпьютера в Minecraft",
        "Обзор всех технических модов сервера",
      ],
    },
    {
      id: "6",
      name: "FunnyGamer",
      avatar: "😄",
      description:
        "Развлекательный контент с юмором! Смешные моменты, челленджи и колаборации с другими игроками.",
      specialization: "Развлекательный контент",
      followers: "22K",
      isVerified: false,
      socials: {
        youtube: "https://youtube.com/@funnygamer",
        twitch: "https://twitch.tv/funnygamer",
        instagram: "https://instagram.com/funny_gamer_mc",
        vk: "https://vk.com/funnygamer",
      },
      stats: {
        videos: 124,
        subscribers: "22.8K",
        views: "1.2M",
      },
      recentContent: [
        "Выживание только на хлебе 7 дней",
        "Пранки над друзьями на сервере",
        "Самые эпичные фейлы месяца",
      ],
    },
  ];

  const filteredCreators = creators.filter((creator) => {
    if (filterBy === "all") return true;
    if (filterBy === "youtube") return creator.socials.youtube;
    if (filterBy === "twitch") return creator.socials.twitch;
    return true;
  });

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return "Youtube";
      case "twitch":
        return "Tv";
      case "discord":
        return "MessageCircle";
      case "telegram":
        return "Send";
      case "vk":
        return "Users";
      case "instagram":
        return "Instagram";
      default:
        return "Globe";
    }
  };

  const getSocialColor = (platform: string) => {
    switch (platform) {
      case "youtube":
        return "text-red-500";
      case "twitch":
        return "text-purple-500";
      case "discord":
        return "text-blue-500";
      case "telegram":
        return "text-blue-400";
      case "vk":
        return "text-blue-600";
      case "instagram":
        return "text-pink-500";
      default:
        return "text-minecraft-gray";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-dark via-minecraft-dark/95 to-minecraft-dark">
      {/* Header */}
      <div className="bg-minecraft-dark/50 backdrop-blur-sm border-b border-minecraft-gray/20">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-heading font-bold text-white mb-4">
              Контентмейкеры HISTORYCRAFT
            </h1>
            <p className="text-minecraft-gray text-lg mb-6">
              Талантливые создатели контента, которые делают наш сервер еще
              интереснее
            </p>

            <div className="flex justify-center gap-4">
              <Button
                variant={filterBy === "all" ? "default" : "outline"}
                onClick={() => setFilterBy("all")}
                className={
                  filterBy === "all"
                    ? "bg-minecraft-green text-white"
                    : "border-minecraft-gray/30 text-minecraft-gray hover:bg-minecraft-green/20"
                }
              >
                Все ({creators.length})
              </Button>
              <Button
                variant={filterBy === "youtube" ? "default" : "outline"}
                onClick={() => setFilterBy("youtube")}
                className={
                  filterBy === "youtube"
                    ? "bg-red-500 text-white"
                    : "border-minecraft-gray/30 text-minecraft-gray hover:bg-red-500/20"
                }
              >
                <Icon name="Youtube" size={16} className="mr-2" />
                YouTube ({creators.filter((c) => c.socials.youtube).length})
              </Button>
              <Button
                variant={filterBy === "twitch" ? "default" : "outline"}
                onClick={() => setFilterBy("twitch")}
                className={
                  filterBy === "twitch"
                    ? "bg-purple-500 text-white"
                    : "border-minecraft-gray/30 text-minecraft-gray hover:bg-purple-500/20"
                }
              >
                <Icon name="Tv" size={16} className="mr-2" />
                Twitch ({creators.filter((c) => c.socials.twitch).length})
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Creators Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCreators.map((creator) => (
            <Card
              key={creator.id}
              className="bg-minecraft-dark/40 border-minecraft-gray/20 hover:border-minecraft-green/30 transition-all hover:scale-[1.02] overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{creator.avatar}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-white text-xl">
                          {creator.name}
                        </CardTitle>
                        {creator.isVerified && (
                          <Icon
                            name="BadgeCheck"
                            size={20}
                            className="text-blue-500"
                          />
                        )}
                      </div>
                      <Badge className="bg-minecraft-purple/20 text-minecraft-purple border-minecraft-purple/30">
                        {creator.specialization}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-minecraft-green">
                      {creator.followers}
                    </div>
                    <div className="text-xs text-minecraft-gray">
                      подписчиков
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-minecraft-gray text-sm leading-relaxed">
                  {creator.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 bg-minecraft-dark/30 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">
                      {creator.stats.videos}
                    </div>
                    <div className="text-xs text-minecraft-gray">Видео</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-minecraft-green">
                      {creator.stats.subscribers}
                    </div>
                    <div className="text-xs text-minecraft-gray">
                      Подписчики
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-minecraft-orange">
                      {creator.stats.views}
                    </div>
                    <div className="text-xs text-minecraft-gray">Просмотры</div>
                  </div>
                </div>

                {/* Recent Content */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Icon
                      name="Play"
                      size={16}
                      className="text-minecraft-green"
                    />
                    Последние видео
                  </h4>
                  <ul className="space-y-2">
                    {creator.recentContent.map((content, index) => (
                      <li
                        key={index}
                        className="text-sm text-minecraft-gray flex items-start gap-2"
                      >
                        <Icon
                          name="ChevronRight"
                          size={14}
                          className="text-minecraft-green mt-0.5 flex-shrink-0"
                        />
                        {content}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Социальные сети
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(creator.socials).map(([platform, link]) => (
                      <Button
                        key={platform}
                        variant="outline"
                        size="sm"
                        className={`border-minecraft-gray/30 ${getSocialColor(platform)} hover:bg-minecraft-dark/50`}
                        asChild
                      >
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icon
                            name={getSocialIcon(platform)}
                            size={14}
                            className="mr-1"
                          />
                          {platform.charAt(0).toUpperCase() + platform.slice(1)}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 bg-minecraft-dark/30 rounded-lg p-8">
          <h3 className="text-2xl font-heading font-bold text-white mb-4">
            Хочешь стать контентмейкером HISTORYCRAFT?
          </h3>
          <p className="text-minecraft-gray mb-6">
            Создавай контент о нашем сервере и получай эксклюзивные привилегии!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              className="bg-minecraft-green hover:bg-minecraft-green/80 text-white"
              asChild
            >
              <a
                href="https://discord.gg/historycraft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Связаться с нами
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-minecraft-purple text-minecraft-purple hover:bg-minecraft-purple hover:text-white"
            >
              <Icon name="FileText" size={16} className="mr-2" />
              Правила для контентмейкеров
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
