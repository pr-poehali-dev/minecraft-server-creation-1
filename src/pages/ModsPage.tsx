import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Mod {
  id: string;
  name: string;
  description: string;
  version: string;
  category: string;
  author: string;
  downloadCount: string;
  imageUrl: string;
  tags: string[];
  requiredMods?: string[];
}

const mods: Mod[] = [
  {
    id: "1",
    name: "JEI (Just Enough Items)",
    description:
      "Просмотр рецептов и управление предметами. Незаменимый помощник для крафта и изучения возможностей модов.",
    version: "15.3.0.4",
    category: "Утилиты",
    author: "mezz",
    downloadCount: "500M+",
    imageUrl: "/placeholder.svg",
    tags: ["рецепты", "интерфейс", "крафт"],
  },
  {
    id: "2",
    name: "Biomes O' Plenty",
    description:
      "Добавляет более 80 новых биомов, включая магические леса, кристаллические пещеры и мистические болота.",
    version: "18.0.0.592",
    category: "Мир",
    author: "Forstride",
    downloadCount: "200M+",
    imageUrl: "/placeholder.svg",
    tags: ["биомы", "генерация", "природа"],
  },
  {
    id: "3",
    name: "Tinkers' Construct",
    description:
      "Система создания кастомных инструментов и оружия с уникальными свойствами и модификаторами.",
    version: "3.7.1.183",
    category: "Инструменты",
    author: "mDiyo",
    downloadCount: "150M+",
    imageUrl: "/placeholder.svg",
    tags: ["инструменты", "крафт", "кастомизация"],
    requiredMods: ["Mantle"],
  },
  {
    id: "4",
    name: "Applied Energistics 2",
    description:
      "Продвинутая система хранения и автоматизации с цифровыми сетями и молекулярными ассемблерами.",
    version: "15.0.16",
    category: "Технологии",
    author: "AlgorithmX2",
    downloadCount: "100M+",
    imageUrl: "/placeholder.svg",
    tags: ["автоматизация", "хранение", "технологии"],
  },
  {
    id: "5",
    name: "Twilight Forest",
    description:
      "Мистическое измерение с босс-рейдами, подземельями и уникальными структурами для исследования.",
    version: "4.3.2145",
    category: "Приключения",
    author: "Benimatic",
    downloadCount: "80M+",
    imageUrl: "/placeholder.svg",
    tags: ["измерения", "боссы", "приключения"],
  },
  {
    id: "6",
    name: "Thermal Expansion",
    description:
      "Машины для переработки ресурсов, энергетические системы и автоматизация производства.",
    version: "10.0.1.18",
    category: "Технологии",
    author: "TeamCoFH",
    downloadCount: "120M+",
    imageUrl: "/placeholder.svg",
    tags: ["машины", "энергия", "переработка"],
  },
];

const categories = [
  "Все",
  "Утилиты",
  "Мир",
  "Инструменты",
  "Технологии",
  "Приключения",
];

export default function ModsPage() {
  return (
    <div className="min-h-screen bg-minecraft-dark text-minecraft-light">
      <div className="relative bg-gradient-to-b from-minecraft-dark via-minecraft-dark/95 to-minecraft-dark/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-minecraft-green via-minecraft-orange to-minecraft-purple bg-clip-text text-transparent">
              МОДЫ СЕРВЕРА
            </h1>
            <p className="text-lg text-minecraft-light/80 max-w-2xl mx-auto">
              Коллекция тщательно отобранных модификаций для незабываемого
              игрового опыта
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Все" ? "default" : "outline"}
                className={`${
                  category === "Все"
                    ? "bg-minecraft-green hover:bg-minecraft-green/80 text-minecraft-dark border-minecraft-green"
                    : "border-minecraft-green/30 text-minecraft-light hover:bg-minecraft-green/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mods.map((mod) => (
              <div
                key={mod.id}
                className="bg-minecraft-dark/50 border border-minecraft-green/20 rounded-xl p-6 hover:border-minecraft-green/40 transition-all duration-300 hover:bg-minecraft-dark/70 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={mod.imageUrl}
                    alt={mod.name}
                    className="w-16 h-16 rounded-lg bg-minecraft-green/10 border border-minecraft-green/30"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-minecraft-light mb-1 group-hover:text-minecraft-green transition-colors">
                      {mod.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-minecraft-light/60">
                      <span>v{mod.version}</span>
                      <span>•</span>
                      <span>{mod.author}</span>
                    </div>
                  </div>
                </div>

                <p className="text-minecraft-light/80 mb-4 leading-relaxed">
                  {mod.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mod.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-minecraft-orange/30 text-minecraft-orange hover:bg-minecraft-orange/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {mod.requiredMods && (
                  <div className="mb-4 p-3 bg-minecraft-orange/10 border border-minecraft-orange/30 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-minecraft-orange">
                      <Icon name="AlertCircle" size={16} />
                      <span>Требует: {mod.requiredMods.join(", ")}</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-minecraft-light/60">
                    <Icon name="Download" size={16} />
                    <span>{mod.downloadCount}</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-minecraft-purple/30 text-minecraft-purple"
                  >
                    {mod.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-minecraft-green hover:bg-minecraft-green/80 text-minecraft-dark font-semibold px-8"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать модпак
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
