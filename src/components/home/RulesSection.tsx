import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface Rule {
  icon: string;
  title: string;
  description: string;
  details: string;
}

const rules: Rule[] = [
  {
    icon: "Shield",
    title: "Уважение к игрокам",
    description: "Никаких оскорблений, читов и токсичного поведения",
    details:
      "Относись к другим игрокам с уважением. Запрещены: оскорбления, угрозы, дискриминация по любым признакам, токсичное поведение. Нарушение карается мутом или баном в зависимости от серьезности.",
  },
  {
    icon: "Home",
    title: "Защита построек",
    description: "Не ломай чужие строения без разрешения владельца",
    details:
      "Уважай чужой труд! Запрещено ломать, изменять или присваивать постройки других игроков без их согласия. Используй приватные территории для защиты своих построек.",
  },
  {
    icon: "Sword",
    title: "Честная игра",
    description: "Запрещены любые читы, дюпы и использование багов",
    details:
      "Играй честно! Строго запрещено использование читов, модов дающих преимущество, дюпы предметов, эксплуатация багов. Нарушение ведет к немедленному бану без возможности разбана.",
  },
  {
    icon: "MessageCircle",
    title: "Культура общения",
    description: "Мат и спам в чате строго запрещены",
    details:
      "Поддерживай дружескую атмосферу! В чате запрещены: мат, спам, флуд, КАПС, реклама сторонних ресурсов, обсуждение политики и религии. Используй личные сообщения для приватного общения.",
  },
  {
    icon: "Users",
    title: "Командная работа",
    description: "Развивай эпохи вместе с другими игроками",
    details:
      "Сервер основан на кооперации! Участвуй в развитии эпох, помогай новичкам, делись ресурсами, создавай команды. Вместе мы строим удивительный мир!",
  },
  {
    icon: "AlertTriangle",
    title: "Администрация",
    description: "Решение админов окончательное и обжалованию не подлежит",
    details:
      "Администрация следит за порядком на сервере. Все решения принимаются справедливо после рассмотрения ситуации. Споры с администрацией в чате запрещены. Для апелляций используй Discord.",
  },
];

interface RuleCardProps {
  rule: Rule;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function RuleCard({ rule, index, isExpanded, onToggle }: RuleCardProps) {
  return (
    <Card
      className="bg-minecraft-dark/30 border-minecraft-gray/20 hover:border-minecraft-green/30 transition-all hover:scale-105 cursor-pointer"
      onClick={onToggle}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-minecraft-green/20 rounded-lg">
            <Icon
              name={rule.icon as any}
              size={24}
              className="text-minecraft-green"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-white">{rule.title}</h3>
              <Icon
                name={isExpanded ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-minecraft-gray"
              />
            </div>
            <p className="text-sm text-minecraft-gray mb-3">
              {rule.description}
            </p>
            {isExpanded && (
              <div className="mt-4 pt-4 border-t border-minecraft-gray/20">
                <p className="text-sm text-minecraft-gray leading-relaxed">
                  {rule.details}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function RulesSection() {
  const [expandedRule, setExpandedRule] = useState<number | null>(null);

  const toggleRule = (index: number) => {
    setExpandedRule(expandedRule === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Правила сервера
          </h2>
          <p className="text-minecraft-gray text-lg mb-4">
            Простые правила для комфортной игры всех участников
          </p>
          <Button
            variant="outline"
            className="border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-white"
            asChild
          >
            <a href="/rules">
              <Icon name="ScrollText" size={16} className="mr-2" />
              Все правила
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <RuleCard
              key={index}
              rule={rule}
              index={index}
              isExpanded={expandedRule === index}
              onToggle={() => toggleRule(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
