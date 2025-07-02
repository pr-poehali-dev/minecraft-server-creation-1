import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function MinecraftServer() {
  const [expandedRule, setExpandedRule] = useState<number | null>(null);

  const rules = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-darker via-minecraft-dark to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="bg-minecraft-dark/50 border border-minecraft-purple/30 px-4 py-2 rounded-lg">
              <Icon
                name="Infinity"
                size={32}
                className="text-minecraft-purple"
              />
            </div>
          </div>

          <div className="relative mb-4">
            <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-minecraft-green/20 via-minecraft-orange/20 to-minecraft-purple/20 blur-xl scale-110 animate-pulse absolute inset-0 z-0">
              EPOCHCRAFT
            </h1>
            <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-minecraft-green via-minecraft-orange to-minecraft-purple bg-clip-text text-transparent relative z-10">
              EPOCHCRAFT
            </h1>
          </div>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-minecraft-dark/50 px-4 py-2 rounded-full border border-minecraft-green/30">
              <div className="w-2 h-2 bg-minecraft-green rounded-full animate-pulse"></div>
              <Icon name="Users" size={20} className="text-minecraft-green" />
              <span className="text-minecraft-green font-semibold text-lg">
                247 игроков онлайн
              </span>
            </div>
          </div>

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

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="outline"
                className="border-minecraft-orange text-minecraft-orange hover:bg-minecraft-orange hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
                asChild
              >
                <a href="/mods">
                  <Icon name="Package" size={20} className="mr-2" />
                  Моды
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-minecraft-purple text-minecraft-purple hover:bg-minecraft-purple hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
                asChild
              >
                <a href="/epochs">
                  <Icon name="Clock" size={20} className="mr-2" />
                  Все эпохи
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
                asChild
              >
                <a href="/players">
                  <Icon name="Users" size={20} className="mr-2" />
                  Игроки
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-minecraft-green text-minecraft-green hover:bg-minecraft-green hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
                asChild
              >
                <a href="/settlements">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Страны и города
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-minecraft-orange text-minecraft-orange hover:bg-minecraft-orange hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
                asChild
              >
                <a href="/team">
                  <Icon name="Users" size={20} className="mr-2" />
                  Наша команда
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-minecraft-blue text-minecraft-blue hover:bg-minecraft-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105"
                asChild
              >
                <a href="/map">
                  <Icon name="Map" size={20} className="mr-2" />
                  Онлайн карта
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Epoch */}
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
                    Средневековье
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Строй замки, развивай торговлю и сражайся за территории.
                    Собирай ресурсы для перехода в эпоху Возрождения!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-minecraft-dark/50 text-minecraft-green"
                    >
                      ⚔️ PvP активен
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-minecraft-dark/50 text-minecraft-orange"
                    >
                      🏰 Строительство
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-minecraft-dark/50 text-gray-300"
                    >
                      💰 Торговля
                    </Badge>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-minecraft-orange mb-2">
                    73%
                  </div>
                  <p className="text-sm text-gray-400">Прогресс эпохи</p>
                  <div className="w-32 bg-minecraft-dark/50 rounded-full h-3 mt-2">
                    <div className="bg-gradient-to-r from-minecraft-orange to-minecraft-green h-3 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rules Section */}
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
              <Card
                key={index}
                className="bg-minecraft-dark/30 border-minecraft-gray/20 hover:border-minecraft-green/30 transition-all hover:scale-105 cursor-pointer"
                onClick={() =>
                  setExpandedRule(expandedRule === index ? null : index)
                }
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
                        <h3 className="font-semibold text-white">
                          {rule.title}
                        </h3>
                        <Icon
                          name={
                            expandedRule === index ? "ChevronUp" : "ChevronDown"
                          }
                          size={20}
                          className="text-minecraft-gray"
                        />
                      </div>
                      <p className="text-sm text-minecraft-gray mb-3">
                        {rule.description}
                      </p>
                      {expandedRule === index && (
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
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
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
            {[
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
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-minecraft-dark/40 border-${plan.color}/30 hover:border-${plan.color}/50 transition-all hover:scale-105 ${plan.popular ? "ring-2 ring-minecraft-orange/50" : ""}`}
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
                        <Icon
                          name="Check"
                          size={16}
                          className="text-minecraft-green"
                        />
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
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-darker/50 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-minecraft-gray">
            © 2024 EpochCraft. Лучший Minecraft сервер с эволюционными эпохами
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-minecraft-gray hover:text-white"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Discord
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-minecraft-gray hover:text-white"
            >
              <Icon name="Users" size={16} className="mr-2" />
              VK
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
