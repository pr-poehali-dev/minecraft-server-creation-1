import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";

export default function Privileges() {
  const privileges = [
    {
      id: "житель",
      name: "Житель",
      price: 199,
      color: "minecraft-green",
      prefix: "[Житель]",
      description: "Базовый донат-статус для комфортной игры",
      popular: false,
      duration: "30 дней",
      features: [
        {
          name: "Префикс [Житель]",
          icon: "Tag",
          description: "Зеленый префикс в чате",
        },
        {
          name: "Приватные сундуки",
          icon: "Package",
          description: "10 защищенных сундуков",
        },
        { name: "Телепорт /home", icon: "Home", description: "1 точка дома" },
        {
          name: "Дополнительные слоты",
          icon: "Users",
          description: "+5 слотов для входа",
        },
        {
          name: 'Кит "Житель"',
          icon: "Gift",
          description: "Ежедневный набор ресурсов",
        },
        {
          name: "Цветной ник",
          icon: "Palette",
          description: "Зеленый цвет ника",
        },
      ],
      commands: [
        "/kit житель - получить ежедневный кит",
        "/home - телепорт домой",
        "/sethome - установить точку дома",
        "/cprivate - заприватить сундук",
      ],
    },
    {
      id: "дворянин",
      name: "Дворянин",
      price: 499,
      color: "minecraft-orange",
      prefix: "[Дворянин]",
      description: "Расширенные возможности для активных игроков",
      popular: true,
      duration: "30 дней",
      features: [
        {
          name: "Префикс [Дворянин]",
          icon: "Crown",
          description: "Оранжевый префикс в чате",
        },
        {
          name: "Все привилегии Жителя",
          icon: "CheckCircle",
          description: "Включает все функции предыдущего статуса",
        },
        {
          name: "Приватные сундуки",
          icon: "Package",
          description: "25 защищенных сундуков",
        },
        {
          name: "Fly в лобби",
          icon: "Plane",
          description: "Полет в лобби сервера",
        },
        { name: "Телепорты /home", icon: "Home", description: "3 точки дома" },
        {
          name: 'Кит "Дворянин"',
          icon: "Gift",
          description: "Улучшенный ежедневный набор",
        },
        {
          name: "Цветной ник",
          icon: "Palette",
          description: "Оранжевый цвет ника",
        },
        {
          name: "Доступ к /workbench",
          icon: "Hammer",
          description: "Верстак в любом месте",
        },
      ],
      commands: [
        "/kit дворянин - получить ежедневный кит",
        "/home <название> - телепорт к дому",
        "/sethome <название> - установить дом",
        "/fly - включить полет в лобби",
        "/workbench - открыть верстак",
      ],
    },
    {
      id: "король",
      name: "Король",
      price: 999,
      color: "minecraft-purple",
      prefix: "[Король]",
      description: "Максимальные привилегии для истинных ценителей",
      popular: false,
      duration: "30 дней",
      features: [
        {
          name: "Префикс [Король]",
          icon: "Crown",
          description: "Фиолетовый префикс с короной",
        },
        {
          name: "Все предыдущие привилегии",
          icon: "CheckCircle",
          description: "Включает все функции предыдущих статусов",
        },
        {
          name: "Приватные сундуки",
          icon: "Package",
          description: "50 защищенных сундуков",
        },
        {
          name: "Креативный режим",
          icon: "Wand2",
          description: "Ограниченный креатив на своей территории",
        },
        { name: "Телепорты /home", icon: "Home", description: "5 точек дома" },
        {
          name: "Индивидуальные квесты",
          icon: "ScrollText",
          description: "Эксклюзивные задания",
        },
        {
          name: 'Кит "Король"',
          icon: "Gift",
          description: "Премиальный ежедневный набор",
        },
        {
          name: "Цветной ник",
          icon: "Palette",
          description: "Фиолетовый цвет ника с эффектами",
        },
        {
          name: "Доступ к /enderchest",
          icon: "Archive",
          description: "Эндер-сундук в любом месте",
        },
      ],
      commands: [
        "/kit король - получить ежедневный кит",
        "/gamemode creative - креативный режим",
        "/enderchest - открыть эндер-сундук",
        "/quest - посмотреть индивидуальные квесты",
        "/heal - восстановить здоровье",
      ],
    },
  ];

  const comparisonFeatures = [
    "Префикс в чате",
    "Приватные сундуки",
    "Точки дома /home",
    "Ежедневные киты",
    "Цветной ник",
    "Полет в лобби",
    "Верстак /workbench",
    "Креативный режим",
    "Эндер-сундук",
    "Индивидуальные квесты",
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
              Привилегии сервера
            </h1>
            <p className="text-xl text-minecraft-gray max-w-3xl mx-auto">
              Поддержи сервер и получи крутые возможности! Каждая привилегия
              дает уникальные функции для более комфортной игры.
            </p>
          </div>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {privileges.map((privilege) => (
              <Card
                key={privilege.id}
                className={`
                relative transition-all hover:scale-105 
                bg-minecraft-dark/40 border-${privilege.color}/30 hover:border-${privilege.color}/50
                ${privilege.popular ? "ring-2 ring-minecraft-orange/50" : ""}
              `}
              >
                {privilege.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-minecraft-orange text-white">
                    🔥 Популярный
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle
                    className={`text-3xl font-heading font-bold text-${privilege.color} mb-2`}
                  >
                    {privilege.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-white mb-2">
                    {privilege.price}₽
                    <span className="text-sm text-minecraft-gray font-normal">
                      /{privilege.duration}
                    </span>
                  </div>
                  <p className="text-minecraft-gray text-sm">
                    {privilege.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {privilege.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon
                          name={feature.icon as any}
                          size={16}
                          className="text-minecraft-green mt-0.5"
                        />
                        <div>
                          <div className="text-white text-sm font-medium">
                            {feature.name}
                          </div>
                          <div className="text-minecraft-gray text-xs">
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    ))}

                    {privilege.features.length > 6 && (
                      <div className="text-center">
                        <Badge
                          variant="outline"
                          className="text-minecraft-gray border-minecraft-gray/30"
                        >
                          +{privilege.features.length - 6} возможностей
                        </Badge>
                      </div>
                    )}
                  </div>

                  <Button
                    className={`w-full bg-${privilege.color} hover:bg-${privilege.color}/80 text-white text-lg py-3`}
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Купить {privilege.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-heading font-bold text-white text-center mb-8">
            Подробная информация
          </h2>

          <Tabs defaultValue="сравнение" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-minecraft-dark/50">
              <TabsTrigger
                value="сравнение"
                className="data-[state=active]:bg-minecraft-green/20"
              >
                Сравнение
              </TabsTrigger>
              <TabsTrigger
                value="житель"
                className="data-[state=active]:bg-minecraft-green/20"
              >
                Житель
              </TabsTrigger>
              <TabsTrigger
                value="дворянин"
                className="data-[state=active]:bg-minecraft-orange/20"
              >
                Дворянин
              </TabsTrigger>
              <TabsTrigger
                value="король"
                className="data-[state=active]:bg-minecraft-purple/20"
              >
                Король
              </TabsTrigger>
            </TabsList>

            <TabsContent value="сравнение" className="mt-8">
              <Card className="bg-minecraft-dark/30 border-minecraft-gray/20">
                <CardHeader>
                  <CardTitle className="text-white text-center">
                    Сравнение привилегий
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-minecraft-gray">
                          Возможность
                        </TableHead>
                        <TableHead className="text-minecraft-green text-center">
                          Житель
                        </TableHead>
                        <TableHead className="text-minecraft-orange text-center">
                          Дворянин
                        </TableHead>
                        <TableHead className="text-minecraft-purple text-center">
                          Король
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparisonFeatures.map((feature, index) => (
                        <TableRow key={index}>
                          <TableCell className="text-white font-medium">
                            {feature}
                          </TableCell>
                          <TableCell className="text-center">
                            {index === 0 && (
                              <Badge className="bg-minecraft-green/20 text-minecraft-green">
                                [Житель]
                              </Badge>
                            )}
                            {index === 1 && (
                              <span className="text-minecraft-green">
                                10 штук
                              </span>
                            )}
                            {index === 2 && (
                              <span className="text-minecraft-green">
                                1 точка
                              </span>
                            )}
                            {index === 3 && (
                              <Icon
                                name="Check"
                                className="text-minecraft-green mx-auto"
                              />
                            )}
                            {index === 4 && (
                              <Icon
                                name="Check"
                                className="text-minecraft-green mx-auto"
                              />
                            )}
                            {index >= 5 && (
                              <Icon
                                name="X"
                                className="text-minecraft-gray mx-auto"
                              />
                            )}
                          </TableCell>
                          <TableCell className="text-center">
                            {index === 0 && (
                              <Badge className="bg-minecraft-orange/20 text-minecraft-orange">
                                [Дворянин]
                              </Badge>
                            )}
                            {index === 1 && (
                              <span className="text-minecraft-orange">
                                25 штук
                              </span>
                            )}
                            {index === 2 && (
                              <span className="text-minecraft-orange">
                                3 точки
                              </span>
                            )}
                            {index <= 6 &&
                              index !== 0 &&
                              index !== 1 &&
                              index !== 2 && (
                                <Icon
                                  name="Check"
                                  className="text-minecraft-orange mx-auto"
                                />
                              )}
                            {index >= 7 && (
                              <Icon
                                name="X"
                                className="text-minecraft-gray mx-auto"
                              />
                            )}
                          </TableCell>
                          <TableCell className="text-center">
                            {index === 0 && (
                              <Badge className="bg-minecraft-purple/20 text-minecraft-purple">
                                [Король]
                              </Badge>
                            )}
                            {index === 1 && (
                              <span className="text-minecraft-purple">
                                50 штук
                              </span>
                            )}
                            {index === 2 && (
                              <span className="text-minecraft-purple">
                                5 точек
                              </span>
                            )}
                            {index !== 0 && index !== 1 && index !== 2 && (
                              <Icon
                                name="Check"
                                className="text-minecraft-purple mx-auto"
                              />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {privileges.map((privilege) => (
              <TabsContent
                key={privilege.id}
                value={privilege.id}
                className="mt-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <Card
                    className={`bg-minecraft-dark/30 border-${privilege.color}/30`}
                  >
                    <CardHeader>
                      <CardTitle
                        className={`text-${privilege.color} text-2xl flex items-center gap-2`}
                      >
                        <Icon name="Star" size={24} />
                        Возможности {privilege.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {privilege.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-minecraft-darker/30 rounded-lg"
                          >
                            <Icon
                              name={feature.icon as any}
                              size={20}
                              className={`text-${privilege.color}`}
                            />
                            <div>
                              <div className="text-white font-medium">
                                {feature.name}
                              </div>
                              <div className="text-minecraft-gray text-sm">
                                {feature.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`bg-minecraft-dark/30 border-${privilege.color}/30`}
                  >
                    <CardHeader>
                      <CardTitle
                        className={`text-${privilege.color} text-2xl flex items-center gap-2`}
                      >
                        <Icon name="Terminal" size={24} />
                        Доступные команды
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {privilege.commands.map((command, index) => (
                          <div
                            key={index}
                            className="bg-minecraft-darker/50 p-3 rounded-lg"
                          >
                            <code className="text-minecraft-green font-mono text-sm">
                              {command}
                            </code>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 bg-minecraft-darker/30 rounded-lg">
                        <h4 className="text-white font-semibold mb-2">
                          Важная информация:
                        </h4>
                        <ul className="text-minecraft-gray text-sm space-y-1">
                          <li>• Привилегия действует {privilege.duration}</li>
                          <li>• Возможно продление до окончания срока</li>
                          <li>
                            • При покупке более высокого статуса -
                            автоматическое продление
                          </li>
                          <li>
                            • Возврат средств только при технических проблемах
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">
            Часто задаваемые вопросы
          </h2>

          <div className="grid gap-6">
            {[
              {
                question: "Как происходит оплата?",
                answer:
                  "Оплата происходит через безопасные платежные системы. После оплаты привилегия автоматически активируется на вашем аккаунте.",
              },
              {
                question: "Можно ли передать привилегию другому игроку?",
                answer:
                  "Нет, привилегии привязаны к конкретному игровому аккаунту и не могут быть переданы.",
              },
              {
                question: "Что происходит при покупке более высокого статуса?",
                answer:
                  "При покупке более высокого статуса оставшееся время текущей привилегии автоматически пересчитывается и добавляется к новой.",
              },
              {
                question: "Сохраняются ли привилегии при смене ника?",
                answer:
                  "Да, привилегии сохраняются при смене ника, так как они привязаны к UUID аккаунта.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-minecraft-dark/30 border-minecraft-gray/20"
              >
                <CardContent className="p-6">
                  <h3 className="text-white font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-minecraft-gray">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
