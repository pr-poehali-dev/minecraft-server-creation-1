import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const currentEpoch = {
  name: "Средневековье",
  description:
    "Строй замки, развивай торговлю и сражайся за территории. Собирай ресурсы для перехода в эпоху Возрождения!",
  progress: 73,
  features: [
    { label: "PvP активен", emoji: "⚔️", color: "minecraft-green" },
    { label: "Строительство", emoji: "🏰", color: "minecraft-orange" },
    { label: "Торговля", emoji: "💰", color: "gray-300" },
  ],
};

interface EpochFeatureProps {
  label: string;
  emoji: string;
  color: string;
}

function EpochFeature({ label, emoji, color }: EpochFeatureProps) {
  return (
    <Badge variant="secondary" className={`bg-minecraft-dark/50 text-${color}`}>
      {emoji} {label}
    </Badge>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-minecraft-orange mb-2">
        {progress}%
      </div>
      <p className="text-sm text-gray-400">Прогресс эпохи</p>
      <div className="w-32 bg-minecraft-dark/50 rounded-full h-3 mt-2">
        <div
          className="bg-gradient-to-r from-minecraft-orange to-minecraft-green h-3 rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function CurrentEpochSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-gradient-to-r from-minecraft-purple/20 to-minecraft-orange/20 border-minecraft-purple/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Badge className="mb-4 bg-minecraft-purple/20 text-minecraft-purple border-minecraft-purple/30">
                  🏛️ Текущая эпоха
                </Badge>
                <h2 className="text-3xl font-heading font-bold text-white mb-4">
                  {currentEpoch.name}
                </h2>
                <p className="text-gray-300 mb-6">{currentEpoch.description}</p>
                <div className="flex flex-wrap gap-2">
                  {currentEpoch.features.map((feature, index) => (
                    <EpochFeature
                      key={index}
                      label={feature.label}
                      emoji={feature.emoji}
                      color={feature.color}
                    />
                  ))}
                </div>
              </div>

              <ProgressBar progress={currentEpoch.progress} />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
