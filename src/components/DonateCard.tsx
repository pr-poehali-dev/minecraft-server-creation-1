import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface DonatePackage {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  color: string;
  icon: string;
  popular?: boolean;
}

interface DonateCardProps {
  donatePackage: DonatePackage;
}

export default function DonateCard({ donatePackage }: DonateCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-80 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Передняя сторона карточки */}
        <div className="absolute inset-0 backface-hidden">
          <div
            className={`w-full h-full bg-gradient-to-br ${donatePackage.color} border border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-xl`}
          >
            {donatePackage.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  🔥 ПОПУЛЯРНЫЙ
                </div>
              </div>
            )}

            <div className="bg-white/10 p-4 rounded-full mb-4 backdrop-blur-sm">
              <Icon
                name={donatePackage.icon as any}
                size={40}
                className="text-white"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {donatePackage.name}
            </h3>

            <div className="flex items-center gap-2 mb-4">
              {donatePackage.originalPrice && (
                <span className="text-white/60 line-through text-lg">
                  {donatePackage.originalPrice}
                </span>
              )}
              <span className="text-3xl font-bold text-white">
                {donatePackage.price}
              </span>
            </div>

            <div className="text-white/80 text-sm mb-4">
              Нажмите для подробностей
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Icon
                name="RotateCcw"
                size={20}
                className="text-white/60 animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* Задняя сторона карточки */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div
            className={`w-full h-full bg-gradient-to-br ${donatePackage.color} border border-white/20 rounded-xl p-6 hover:border-white/40 transition-all duration-300 shadow-xl`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">
                  {donatePackage.name}
                </h3>
                <div className="text-2xl font-bold text-white">
                  {donatePackage.price}
                </div>
              </div>

              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                {donatePackage.description}
              </p>

              <div className="flex-1">
                <h4 className="text-white font-semibold mb-2 text-sm">
                  ✨ Что входит:
                </h4>
                <ul className="space-y-1">
                  {donatePackage.features.map((feature, index) => (
                    <li
                      key={index}
                      className="text-white/80 text-sm flex items-start gap-2"
                    >
                      <span className="text-green-400 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 space-y-2">
                <Button
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                  size="sm"
                >
                  <Icon name="CreditCard" size={16} className="mr-2" />
                  Купить сейчас
                </Button>

                <div className="text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                    }}
                    className="text-white/60 text-xs hover:text-white/80 transition-colors"
                  >
                    ← Вернуться назад
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
