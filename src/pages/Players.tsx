import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

interface Player {
  id: string;
  name: string;
  status: "online" | "offline";
  lastSeen: string;
  location: string;
  level: number;
  rank: string;
  playtime: string;
  kills: number;
  deaths: number;
  avatar: string;
}

export default function Players() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "online" | "offline"
  >("all");
  const [sortBy, setSortBy] = useState<"name" | "level" | "playtime">("name");

  // Мокованные данные игроков
  const [players] = useState<Player[]>([
    {
      id: "1",
      name: "SteveCrafter",
      status: "online",
      lastSeen: "Сейчас",
      location: "Промышленная эпоха",
      level: 42,
      rank: "Король",
      playtime: "156ч",
      kills: 28,
      deaths: 12,
      avatar: "🛡️",
    },
    {
      id: "2",
      name: "AlexBuilder",
      status: "online",
      lastSeen: "Сейчас",
      location: "Средневековье",
      level: 38,
      rank: "Дворянин",
      playtime: "134ч",
      kills: 15,
      deaths: 8,
      avatar: "⚔️",
    },
    {
      id: "3",
      name: "MineCraftPro",
      status: "offline",
      lastSeen: "2 часа назад",
      location: "Лобби",
      level: 55,
      rank: "Король",
      playtime: "203ч",
      kills: 67,
      deaths: 23,
      avatar: "👑",
    },
    {
      id: "4",
      name: "DiamondHunter",
      status: "online",
      lastSeen: "Сейчас",
      location: "Каменный век",
      level: 29,
      rank: "Житель",
      playtime: "89ч",
      kills: 12,
      deaths: 19,
      avatar: "💎",
    },
    {
      id: "5",
      name: "RedstoneEngineer",
      status: "offline",
      lastSeen: "5 минут назад",
      location: "Промышленная эпоха",
      level: 47,
      rank: "Дворянин",
      playtime: "178ч",
      kills: 34,
      deaths: 15,
      avatar: "🔧",
    },
    {
      id: "6",
      name: "NatureGuardian",
      status: "online",
      lastSeen: "Сейчас",
      location: "Древний мир",
      level: 33,
      rank: "Житель",
      playtime: "112ч",
      kills: 8,
      deaths: 6,
      avatar: "🌿",
    },
    {
      id: "7",
      name: "PvPMaster",
      status: "offline",
      lastSeen: "1 день назад",
      location: "Арена",
      level: 61,
      rank: "Король",
      playtime: "245ч",
      kills: 89,
      deaths: 31,
      avatar: "⚡",
    },
    {
      id: "8",
      name: "CastleBuilder",
      status: "online",
      lastSeen: "Сейчас",
      location: "Средневековье",
      level: 36,
      rank: "Дворянин",
      playtime: "127ч",
      kills: 21,
      deaths: 14,
      avatar: "🏰",
    },
  ]);

  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    setOnlineCount(players.filter((p) => p.status === "online").length);
  }, [players]);

  const filteredPlayers = players
    .filter(
      (player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (statusFilter === "all" || player.status === statusFilter),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "level":
          return b.level - a.level;
        case "playtime":
          return parseInt(b.playtime) - parseInt(a.playtime);
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const getRankColor = (rank: string) => {
    switch (rank) {
      case "Король":
        return "minecraft-purple";
      case "Дворянин":
        return "minecraft-orange";
      case "Житель":
        return "minecraft-green";
      default:
        return "minecraft-gray";
    }
  };

  const getLocationIcon = (location: string) => {
    switch (location) {
      case "Лобби":
        return "Home";
      case "Каменный век":
        return "Mountain";
      case "Древний мир":
        return "Trees";
      case "Средневековье":
        return "Castle";
      case "Промышленная эпоха":
        return "Factory";
      case "Арена":
        return "Sword";
      default:
        return "MapPin";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-minecraft-dark via-minecraft-dark/95 to-minecraft-dark">
      {/* Header */}
      <div className="bg-minecraft-dark/50 backdrop-blur-sm border-b border-minecraft-gray/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-heading font-bold text-white mb-2">
                Игроки сервера
              </h1>
              <p className="text-minecraft-gray">
                Список всех игроков и их текущий статус
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-minecraft-green">
                {onlineCount} / {players.length}
              </div>
              <div className="text-sm text-minecraft-gray">Игроков онлайн</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-64">
              <Input
                placeholder="Поиск игрока..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-minecraft-dark/30 border-minecraft-gray/30 text-white"
              />
            </div>

            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
                className={
                  statusFilter === "all"
                    ? "bg-minecraft-green text-white"
                    : "border-minecraft-gray/30 text-minecraft-gray hover:bg-minecraft-green/20"
                }
              >
                Все
              </Button>
              <Button
                variant={statusFilter === "online" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("online")}
                className={
                  statusFilter === "online"
                    ? "bg-minecraft-green text-white"
                    : "border-minecraft-gray/30 text-minecraft-gray hover:bg-minecraft-green/20"
                }
              >
                <Icon name="Circle" size={12} className="mr-1 text-green-400" />
                Онлайн
              </Button>
              <Button
                variant={statusFilter === "offline" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("offline")}
                className={
                  statusFilter === "offline"
                    ? "bg-minecraft-green text-white"
                    : "border-minecraft-gray/30 text-minecraft-gray hover:bg-minecraft-green/20"
                }
              >
                <Icon name="Circle" size={12} className="mr-1 text-red-400" />
                Оффлайн
              </Button>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-minecraft-dark/30 border border-minecraft-gray/30 text-white rounded-md px-3 py-2"
            >
              <option value="name">По имени</option>
              <option value="level">По уровню</option>
              <option value="playtime">По времени игры</option>
            </select>
          </div>
        </div>
      </div>

      {/* Players Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlayers.map((player) => (
            <Card
              key={player.id}
              className="bg-minecraft-dark/40 border-minecraft-gray/20 hover:border-minecraft-green/30 transition-all hover:scale-105"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{player.avatar}</div>
                    <div>
                      <CardTitle className="text-white text-lg">
                        {player.name}
                      </CardTitle>
                      <Badge
                        className={`bg-${getRankColor(player.rank)}/20 text-${getRankColor(player.rank)} border-${getRankColor(player.rank)}/30`}
                      >
                        {player.rank}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      name="Circle"
                      size={12}
                      className={
                        player.status === "online"
                          ? "text-green-400"
                          : "text-red-400"
                      }
                    />
                    <span
                      className={`text-sm ${player.status === "online" ? "text-green-400" : "text-red-400"}`}
                    >
                      {player.status === "online" ? "Онлайн" : "Оффлайн"}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Location */}
                <div className="flex items-center gap-2">
                  <Icon
                    name={getLocationIcon(player.location)}
                    size={16}
                    className="text-minecraft-green"
                  />
                  <span className="text-sm text-minecraft-gray">
                    {player.location}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-minecraft-gray">Уровень</div>
                    <div className="text-white font-semibold">
                      {player.level}
                    </div>
                  </div>
                  <div>
                    <div className="text-minecraft-gray">Игровое время</div>
                    <div className="text-white font-semibold">
                      {player.playtime}
                    </div>
                  </div>
                  <div>
                    <div className="text-minecraft-gray">Убийства</div>
                    <div className="text-green-400 font-semibold">
                      {player.kills}
                    </div>
                  </div>
                  <div>
                    <div className="text-minecraft-gray">Смерти</div>
                    <div className="text-red-400 font-semibold">
                      {player.deaths}
                    </div>
                  </div>
                </div>

                {/* Last Seen */}
                <div className="border-t border-minecraft-gray/20 pt-3">
                  <div className="text-xs text-minecraft-gray">
                    Последний раз: {player.lastSeen}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Users"
              size={48}
              className="text-minecraft-gray mx-auto mb-4"
            />
            <p className="text-minecraft-gray text-lg">Игроки не найдены</p>
          </div>
        )}
      </div>
    </div>
  );
}
