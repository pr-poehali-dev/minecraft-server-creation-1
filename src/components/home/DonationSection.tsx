import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface DonationPlan {
  name: string;
  price: string;
  color: string;
  popular?: boolean;
  features: string[];
}

const donationPlans: DonationPlan[] = [
  {
    name: "Житель",
    price: "199₽",
    color: "minecraft-green",
    features: [
      "Префикс [Житель]",
      "Дополнительные слоты",
      "Приватные сундуки (10)",
      "Телепорт /home",
    ],
  },
  {
    name: "Дворянин",
    price: "499₽",
    color: "minecraft-orange",
    popular: true,
    features: [
      "Префикс [Дворянин]",
      "Все привилегии Жителя",
      "Приватные сундуки (25)",
      "Fly в лобби",
      "Цветной ник",
    ],
  },
  {
    name: "Король",
    price: "999₽",
    color: "minecraft-purple",
    features: [
      "Префикс [Король]",
      "Все предыдущие привилегии",
      "Приватные сундуки (50)",
      "Креативный режим (ограниченный)",
      "Индивидуальные квесты",
    ],
  },
];

interface DonationCardProps {
  plan: DonationPlan;
}

function DonationCard({ plan }: DonationCardProps) {
  return (
    <Card
      className={`relative bg-minecraft-dark/40 border-${plan.color}/30 hover:border-${plan.color}/50 transition-all hover:scale-105 ${
        plan.popular ? "ring-2 ring-minecraft-orange/50" : ""
      }`}
    >
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-minecraft-orange text-white">
          🔥 Популярный
        </Badge>
      )}
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3
            className={`text-2xl font-heading font-bold text-${plan.color} mb-2`}
          >
            {plan.name}
          </h3>
          <div className="text-3xl font-bold text-white">
            {plan.price}
            <span className="text-sm text-minecraft-gray font-normal">
              /месяц
            </span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className="flex items-center gap-2 text-gray-300"
            >
              <Icon name="Check" size={16} className="text-minecraft-green" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full bg-${plan.color} hover:bg-${plan.color}/80 text-white`}
          asChild
        >
          <a href="/privileges">Купить привилегию</a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function DonationSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Поддержать сервер
          </h2>
          <p className="text-minecraft-gray text-lg mb-4">
            Помоги развитию сервера и получи крутые привилегии!
          </p>
          <Button
            variant="outline"
            className="border-minecraft-purple text-minecraft-purple hover:bg-minecraft-purple hover:text-white"
            asChild
          >
            <a href="/privileges">
              <Icon name="Eye" size={16} className="mr-2" />
              Подробнее о привилегиях
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {donationPlans.map((plan, index) => (
            <DonationCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
