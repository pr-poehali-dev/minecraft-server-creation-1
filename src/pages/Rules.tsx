import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

export default function Rules() {
  const ruleCategories = [
    {
      id: "основные",
      title: "Основные правила",
      icon: "Shield",
      color: "minecraft-green",
      rules: [
        {
          title: "Уважение к игрокам",
          description:
            "Относитесь к другим игрокам с уважением. Запрещены оскорбления, угрозы, дискриминация по любым признакам.",
          severity: "Высокая",
          punishment: "Предупреждение → Мут → Бан",
          examples: [
            "Оскорбления в чате",
            "Угрозы другим игрокам",
            "Дискриминация",
          ],
        },
        {
          title: "Культура общения",
          description:
            "Поддерживайте дружелюбную атмосферу. Мат, спам и флуд в чате строго запрещены.",
          severity: "Средняя",
          punishment: "Мут → Временный бан",
          examples: ["Мат в чате", "Спам сообщений", "Флуд"],
        },
        {
          title: "Реклама",
          description:
            "Запрещена реклама других серверов, услуг или продуктов без разрешения администрации.",
          severity: "Высокая",
          punishment: "Мут → Бан",
          examples: ["Реклама серверов", "Реклама услуг", "Продажа аккаунтов"],
        },
      ],
    },
    {
      id: "игровой-процесс",
      title: "Игровой процесс",
      icon: "Gamepad2",
      color: "minecraft-orange",
      rules: [
        {
          title: "Честная игра",
          description:
            "Запрещено использование читов, модов, дающих преимущества, и эксплуатация багов.",
          severity: "Критическая",
          punishment: "Перманентный бан",
          examples: ["Читы на полет", "X-Ray моды", "Дюп багов", "Читы на бой"],
        },
        {
          title: "Гриферство",
          description:
            "Запрещено разрушение или порча чужих построек без разрешения владельца.",
          severity: "Высокая",
          punishment: "Временный бан → Перманентный бан",
          examples: [
            "Разрушение домов",
            "Порча построек",
            "Кража из незащищенных сундуков",
          ],
        },
        {
          title: "PvP правила",
          description:
            "PvP разрешено только в специальных зонах. Запрещено убийство в мирных зонах.",
          severity: "Средняя",
          punishment: "Предупреждение → Временный бан",
          examples: [
            "PvP в мирных зонах",
            "Убийство новичков",
            "Кемпинг спавна",
          ],
        },
      ],
    },
    {
      id: "строительство",
      title: "Строительство",
      icon: "Home",
      color: "minecraft-purple",
      rules: [
        {
          title: "Защита построек",
          description:
            "Используйте систему приватов для защиты своих построек. Администрация не несет ответственности за незащищенные постройки.",
          severity: "Информационная",
          punishment: "Не применяется",
          examples: [
            "Использование /cprivate",
            "Приват территории",
            "Защита сундуков",
          ],
        },
        {
          title: "Архитектурные требования",
          description:
            "Стройте в соответствии с эпохой. Запрещены неуместные постройки и 1x1 башни.",
          severity: "Низкая",
          punishment: "Предупреждение → Снос постройки",
          examples: [
            "Современные здания в античности",
            "Башни 1x1",
            "Неэстетичные постройки",
          ],
        },
        {
          title: "Размещение построек",
          description:
            "Стройте на разумном расстоянии от других игроков. Уважайте личное пространство.",
          severity: "Средняя",
          punishment: "Перенос постройки",
          examples: [
            "Строительство вплотную к чужим домам",
            "Блокировка проходов",
            "Нарушение границ",
          ],
        },
      ],
    },
    {
      id: "экономика",
      title: "Экономика",
      icon: "Coins",
      color: "amber-500",
      rules: [
        {
          title: "Честная торговля",
          description:
            "Запрещено мошенничество в торговле, обман при сделках и невыполнение договоренностей.",
          severity: "Высокая",
          punishment: "Возврат средств → Бан",
          examples: [
            "Обман при торговле",
            "Невыполнение сделок",
            "Мошенничество",
          ],
        },
        {
          title: "Дюп и баги",
          description:
            "Запрещено использование дюп-багов и других эксплойтов для получения преимуществ в экономике.",
          severity: "Критическая",
          punishment: "Перманентный бан",
          examples: [
            "Дюп предметов",
            "Баг с деньгами",
            "Эксплойты в магазинах",
          ],
        },
      ],
    },
  ];

  const punishmentLevels = [
    {
      level: "Предупреждение",
      color: "yellow-500",
      description: "Устное или письменное предупреждение",
    },
    {
      level: "Мут",
      color: "orange-500",
      description: "Временное ограничение чата (1-24 часа)",
    },
    {
      level: "Временный бан",
      color: "red-500",
      description: "Временное исключение с сервера (1-30 дней)",
    },
    {
      level: "Перманентный бан",
      color: "red-800",
      description: "Постоянное исключение с сервера",
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
            <div className="mb-6 flex justify-center">
              <div className="bg-minecraft-dark/50 border border-minecraft-green/30 px-4 py-2 rounded-lg">
                <Icon
                  name="ScrollText"
                  size={32}
                  className="text-minecraft-green"
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-minecraft-green via-minecraft-orange to-minecraft-purple bg-clip-text text-transparent">
              Правила сервера
            </h1>
            <p className="text-xl text-minecraft-gray max-w-3xl mx-auto">
              Изучите правила для комфортной игры всех участников сообщества.
              Незнание правил не освобождает от ответственности.
            </p>
          </div>
        </div>
      </header>

      {/* Important Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Alert className="bg-minecraft-orange/20 border-minecraft-orange/30">
            <Icon
              name="AlertTriangle"
              size={20}
              className="text-minecraft-orange"
            />
            <AlertDescription className="text-minecraft-orange">
              <strong>Важно:</strong> Все игроки обязаны соблюдать правила
              сервера. Администрация оставляет за собой право изменять правила и
              наказания по своему усмотрению. Решения администрации окончательны
              и обжалованию не подлежат.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Rules Categories */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="основные" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-minecraft-dark/50 mb-8">
              {ruleCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`data-[state=active]:bg-${category.color}/20 data-[state=active]:text-${category.color}`}
                >
                  <Icon
                    name={category.icon as any}
                    size={16}
                    className="mr-2"
                  />
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {ruleCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-8"
              >
                <div className="grid gap-6">
                  {category.rules.map((rule, index) => (
                    <Card
                      key={index}
                      className={`bg-minecraft-dark/30 border-${category.color}/30`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-white text-xl flex items-center gap-2">
                              <Icon
                                name={category.icon as any}
                                size={20}
                                className={`text-${category.color}`}
                              />
                              {rule.title}
                            </CardTitle>
                            <Badge
                              variant="outline"
                              className={`mt-2 border-${category.color}/30 text-${category.color}`}
                            >
                              {rule.severity}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-minecraft-gray mb-4">
                          {rule.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-white mb-2">
                              Наказание:
                            </h4>
                            <p className="text-sm text-minecraft-gray bg-minecraft-darker/30 p-2 rounded">
                              {rule.punishment}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-white mb-2">
                              Примеры нарушений:
                            </h4>
                            <ul className="text-sm text-minecraft-gray space-y-1">
                              {rule.examples.map((example, exampleIndex) => (
                                <li
                                  key={exampleIndex}
                                  className="flex items-center gap-2"
                                >
                                  <Icon
                                    name="Minus"
                                    size={12}
                                    className="text-minecraft-gray"
                                  />
                                  {example}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Punishment System */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">
            Система наказаний
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {punishmentLevels.map((punishment, index) => (
              <Card
                key={index}
                className={`bg-minecraft-dark/30 border-${punishment.color}/30`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-${punishment.color}/20 flex items-center justify-center mx-auto mb-4`}
                  >
                    <span
                      className={`text-${punishment.color} font-bold text-lg`}
                    >
                      {index + 1}
                    </span>
                  </div>
                  <h3 className={`text-${punishment.color} font-semibold mb-2`}>
                    {punishment.level}
                  </h3>
                  <p className="text-minecraft-gray text-sm">
                    {punishment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appeal Process */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">
            Процедура обжалования
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-minecraft-dark/30 border-minecraft-green/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MessageSquare"
                  size={40}
                  className="text-minecraft-green mx-auto mb-4"
                />
                <h3 className="text-white font-semibold mb-2">
                  1. Подача жалобы
                </h3>
                <p className="text-minecraft-gray text-sm">
                  Обратитесь к администрации через Discord или форум с подробным
                  описанием ситуации.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark/30 border-minecraft-orange/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Search"
                  size={40}
                  className="text-minecraft-orange mx-auto mb-4"
                />
                <h3 className="text-white font-semibold mb-2">
                  2. Рассмотрение
                </h3>
                <p className="text-minecraft-gray text-sm">
                  Администрация рассматривает жалобу в течение 3-7 дней, изучая
                  доказательства.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark/30 border-minecraft-purple/30">
              <CardContent className="p-6 text-center">
                <Icon
                  name="CheckCircle"
                  size={40}
                  className="text-minecraft-purple mx-auto mb-4"
                />
                <h3 className="text-white font-semibold mb-2">3. Решение</h3>
                <p className="text-minecraft-gray text-sm">
                  Выносится окончательное решение: снятие наказания, смягчение
                  или подтверждение.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-8">
            Связь с администрацией
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-minecraft-dark/30 border-minecraft-green/30">
              <CardContent className="p-6">
                <Icon
                  name="MessageCircle"
                  size={32}
                  className="text-minecraft-green mx-auto mb-4"
                />
                <h3 className="text-white font-semibold mb-2">
                  Discord сервер
                </h3>
                <p className="text-minecraft-gray text-sm mb-4">
                  Основной канал связи с администрацией и сообществом
                </p>
                <Button className="bg-minecraft-green hover:bg-minecraft-green/80 text-white">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-minecraft-dark/30 border-minecraft-orange/30">
              <CardContent className="p-6">
                <Icon
                  name="Mail"
                  size={32}
                  className="text-minecraft-orange mx-auto mb-4"
                />
                <h3 className="text-white font-semibold mb-2">Форум</h3>
                <p className="text-minecraft-gray text-sm mb-4">
                  Официальные обращения и подача жалоб
                </p>
                <Button className="bg-minecraft-orange hover:bg-minecraft-orange/80 text-white">
                  Перейти на форум
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
