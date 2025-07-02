import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Epochs() {
  const epochs = [
    {
      id: 1,
      name: "Каменный век",
      status: "completed",
      progress: 100,
      icon: "🗿",
      color: "minecraft-gray",
      description:
        "Начало цивилизации. Первые инструменты, охота и собирательство.",
      features: [
        "Каменные инструменты",
        "Примитивные постройки",
        "Охота на мобов",
      ],
      requirements: "Собрать 1000 камня и дерева",
      duration: "Завершена за 2 недели",
    },
    {
      id: 2,
      name: "Бронзовый век",
      status: "completed",
      progress: 100,
      icon: "⚒️",
      color: "amber-600",
      description:
        "Открытие металлургии. Первые металлические инструменты и оружие.",
      features: ["Бронзовые инструменты", "Улучшенное оружие", "Торговля"],
      requirements: "Создать 500 бронзовых предметов",
      duration: "Завершена за 3 недели",
    },
    {
      id: 3,
      name: "Железный век",
      status: "completed",
      progress: 100,
      icon: "⚔️",
      color: "slate-500",
      description:
        "Революция в металлургии. Прочные инструменты и развитие военного дела.",
      features: ["Железные инструменты", "Доспехи", "Укрепления"],
      requirements: "Добыть 2000 железной руды",
      duration: "Завершена за 4 недели",
    },
    {
      id: 4,
      name: "Античность",
      status: "completed",
      progress: 100,
      icon: "🏛️",
      color: "purple-600",
      description:
        "Расцвет архитектуры и культуры. Великие постройки и философия.",
      features: ["Колонны и статуи", "Амфитеатры", "Акведуки"],
      requirements: "Построить 3 монумента",
      duration: "Завершена за 5 недель",
    },
    {
      id: 5,
      name: "Средневековье",
      status: "current",
      progress: 73,
      icon: "🏰",
      color: "minecraft-orange",
      description: "Эпоха замков и рыцарей. Феодализм и крестовые походы.",
      features: ["Замки и крепости", "Рыцарские турниры", "Гильдии"],
      requirements: "Построить 5 замков, провести 10 турниров",
      duration: "В процессе уже 6 недель",
    },
    {
      id: 6,
      name: "Возрождение",
      status: "locked",
      progress: 0,
      icon: "🎨",
      color: "emerald-600",
      description: "Расцвет искусства и науки. Великие открытия и изобретения.",
      features: [
        "Искусство и скульптура",
        "Научные открытия",
        "Новые технологии",
      ],
      requirements:
        "Завершить Средневековье + создать 15 произведений искусства",
      duration: "Ожидается 8 недель",
    },
    {
      id: 7,
      name: "Промышленная революция",
      status: "locked",
      progress: 0,
      icon: "⚙️",
      color: "orange-600",
      description:
        "Век машин и заводов. Паровые двигатели и массовое производство.",
      features: ["Фабрики и заводы", "Паровые машины", "Железные дороги"],
      requirements: "Построить 10 фабрик и железнодорожную сеть",
      duration: "Ожидается 10 недель",
    },
    {
      id: 8,
      name: "Современность",
      status: "locked",
      progress: 0,
      icon: "🏙️",
      color: "blue-600",
      description: "Эпоха электричества и небоскребов. Автомобили и авиация.",
      features: ["Небоскребы", "Автомобили", "Электричество"],
      requirements: "Создать современный город с транспортной сетью",
      duration: "Ожидается 12 недель",
    },
    {
      id: 9,
      name: "Космическая эра",
      status: "locked",
      progress: 0,
      icon: "🚀",
      color: "minecraft-purple",
      description: "Покорение космоса. Ракеты, спутники и межпланетные полеты.",
      features: ["Космодромы", "Ракеты", "Спутники"],
      requirements: "Запустить 5 ракет и построить космическую станцию",
      duration: "Ожидается 15 недель",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-darker via-minecraft-dark to-slate-900">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            className="mb-6 text-minecraft-green hover:text-white"
            asChild
          >
            <a href="/">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад на главную
            </a>
          </Button>

          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-minecraft-green via-minecraft-orange to-minecraft-purple bg-clip-text text-transparent">
              Эпохи развития
            </h1>
            <p className="text-xl text-minecraft-gray max-w-3xl mx-auto">
              Путешествие через историю человечества от каменного века до
              космической эры. Каждая эпоха открывается по мере выполнения
              заданий сообществом.
            </p>
          </div>
        </div>
      </header>

      {/* Current Status */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-minecraft-orange/20 to-minecraft-purple/20 border-minecraft-orange/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="text-center md:text-left">
                  <Badge className="mb-2 bg-minecraft-orange/20 text-minecraft-orange border-minecraft-orange/30">
                    🔥 Текущая эпоха
                  </Badge>
                  <h2 className="text-2xl font-heading font-bold text-white mb-2">
                    Средневековье
                  </h2>
                  <p className="text-minecraft-gray">
                    До следующей эпохи осталось 27% прогресса
                  </p>
                </div>
                <div className="flex-1 w-full max-w-md">
                  <div className="flex justify-between text-sm text-minecraft-gray mb-2">
                    <span>Прогресс</span>
                    <span>73%</span>
                  </div>
                  <Progress value={73} className="h-3 bg-minecraft-dark/50" />
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-minecraft-green">
                    247
                  </div>
                  <p className="text-sm text-minecraft-gray">
                    Игроков участвует
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Epochs Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {epochs.map((epoch, index) => {
              const isCompleted = epoch.status === "completed";
              const isCurrent = epoch.status === "current";
              const isLocked = epoch.status === "locked";

              return (
                <div key={epoch.id} className="relative">
                  {/* Timeline Line */}
                  {index < epochs.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-minecraft-green/50 to-minecraft-gray/20"></div>
                  )}

                  <Card
                    className={`
                    relative transition-all hover:scale-[1.02] 
                    ${isCompleted ? "bg-minecraft-green/10 border-minecraft-green/30" : ""}
                    ${isCurrent ? "bg-minecraft-orange/10 border-minecraft-orange/30 ring-2 ring-minecraft-orange/20" : ""}
                    ${isLocked ? "bg-minecraft-dark/20 border-minecraft-gray/20 opacity-60" : ""}
                  `}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        {/* Timeline Dot */}
                        <div
                          className={`
                          w-12 h-12 rounded-full flex items-center justify-center text-2xl relative z-10
                          ${isCompleted ? "bg-minecraft-green/20 border-2 border-minecraft-green" : ""}
                          ${isCurrent ? "bg-minecraft-orange/20 border-2 border-minecraft-orange animate-pulse" : ""}
                          ${isLocked ? "bg-minecraft-gray/20 border-2 border-minecraft-gray/30" : ""}
                        `}
                        >
                          {isCompleted && (
                            <Icon
                              name="Check"
                              size={24}
                              className="text-minecraft-green"
                            />
                          )}
                          {isCurrent && (
                            <span className="text-minecraft-orange">
                              {epoch.icon}
                            </span>
                          )}
                          {isLocked && (
                            <Icon
                              name="Lock"
                              size={20}
                              className="text-minecraft-gray"
                            />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                            <div>
                              <h3 className="text-2xl font-heading font-bold text-white mb-1">
                                {epoch.name}
                              </h3>
                              <p className="text-minecraft-gray">
                                {epoch.description}
                              </p>
                            </div>

                            <div className="md:text-right">
                              <Badge
                                className={`mb-2
                                ${isCompleted ? "bg-minecraft-green/20 text-minecraft-green border-minecraft-green/30" : ""}
                                ${isCurrent ? "bg-minecraft-orange/20 text-minecraft-orange border-minecraft-orange/30" : ""}
                                ${isLocked ? "bg-minecraft-gray/20 text-minecraft-gray border-minecraft-gray/30" : ""}
                              `}
                              >
                                {isCompleted && "✅ Завершена"}
                                {isCurrent && "🔥 Активна"}
                                {isLocked && "🔒 Заблокирована"}
                              </Badge>
                              <div className="text-sm text-minecraft-gray">
                                {epoch.duration}
                              </div>
                            </div>
                          </div>

                          {/* Progress Bar for Current Epoch */}
                          {isCurrent && (
                            <div className="mb-4">
                              <div className="flex justify-between text-sm text-minecraft-gray mb-2">
                                <span>Прогресс эпохи</span>
                                <span>{epoch.progress}%</span>
                              </div>
                              <Progress
                                value={epoch.progress}
                                className="h-2 bg-minecraft-dark/50"
                              />
                            </div>
                          )}

                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-white mb-2">
                                Особенности эпохи:
                              </h4>
                              <ul className="space-y-1">
                                {epoch.features.map((feature, featureIndex) => (
                                  <li
                                    key={featureIndex}
                                    className="flex items-center gap-2 text-sm text-minecraft-gray"
                                  >
                                    <Icon
                                      name="Sparkles"
                                      size={12}
                                      className="text-minecraft-green"
                                    />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold text-white mb-2">
                                {isCompleted
                                  ? "Было выполнено:"
                                  : "Требования:"}
                              </h4>
                              <p className="text-sm text-minecraft-gray">
                                {epoch.requirements}
                              </p>

                              {isCurrent && (
                                <Button className="mt-4 bg-minecraft-orange hover:bg-minecraft-orange/80 text-white">
                                  <Icon
                                    name="Target"
                                    size={16}
                                    className="mr-2"
                                  />
                                  Участвовать в эпохе
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">
            Статистика сервера
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-minecraft-dark/30 border-minecraft-green/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Trophy"
                  size={32}
                  className="text-minecraft-green mx-auto mb-2"
                />
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-sm text-minecraft-gray">
                  Завершено эпох
                </div>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark/30 border-minecraft-orange/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Clock"
                  size={32}
                  className="text-minecraft-orange mx-auto mb-2"
                />
                <div className="text-2xl font-bold text-white">6</div>
                <div className="text-sm text-minecraft-gray">
                  Недель текущей эпохи
                </div>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark/30 border-minecraft-purple/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Users"
                  size={32}
                  className="text-minecraft-purple mx-auto mb-2"
                />
                <div className="text-2xl font-bold text-white">1,247</div>
                <div className="text-sm text-minecraft-gray">
                  Участников всего
                </div>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark/30 border-minecraft-green/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Calendar"
                  size={32}
                  className="text-minecraft-green mx-auto mb-2"
                />
                <div className="text-2xl font-bold text-white">4</div>
                <div className="text-sm text-minecraft-gray">Месяца работы</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
