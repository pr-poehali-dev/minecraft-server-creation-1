import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Map = () => {
  const mapLayers = [
    {
      id: "surface",
      name: "Поверхность",
      description: "Основной мир с городами и достопримечательностями",
      icon: "Mountain",
      active: true,
    },
    {
      id: "nether",
      name: "Нижний мир",
      description: "Адские земли и нижние транспортные сети",
      icon: "Flame",
      active: false,
    },
    {
      id: "end",
      name: "Край",
      description: "Мир Эндера с островами и порталами",
      icon: "Zap",
      active: false,
    },
  ];

  const mapFeatures = [
    {
      name: "Режим реального времени",
      description: "Карта обновляется каждые 5 минут",
      icon: "RefreshCw",
    },
    {
      name: "Игроки онлайн",
      description: "Видь других игроков на карте",
      icon: "Users",
    },
    {
      name: "Маркеры построек",
      description: "Важные здания и достопримечательности",
      icon: "MapPin",
    },
    {
      name: "Приватные территории",
      description: "Заприваченные зоны и города",
      icon: "Shield",
    },
    {
      name: "Торговые маршруты",
      description: "Дороги и транспортные пути",
      icon: "Route",
    },
    {
      name: "Ресурсные зоны",
      description: "Места добычи руды и ресурсов",
      icon: "Pickaxe",
    },
  ];

  const landmarks = [
    {
      name: "Спавн сервера",
      type: "spawn",
      coords: "0, 64, 0",
      description: "Центральная площадь, откуда начинается путешествие",
      color: "minecraft-green",
    },
    {
      name: "Нордхейм",
      type: "city",
      coords: "1250, 75, -800",
      description: "Столица Северного Королевства",
      color: "minecraft-blue",
    },
    {
      name: "Драконий Трон",
      type: "city",
      coords: "-900, 95, 1100",
      description: "Императорский город Восточной Империи",
      color: "minecraft-purple",
    },
    {
      name: "Зеленый Дом",
      type: "city",
      coords: "300, 70, 600",
      description: "Столица Лесной Республики",
      color: "minecraft-green",
    },
    {
      name: "Арена PvP",
      type: "arena",
      coords: "-200, 80, -300",
      description: "Боевая арена для сражений",
      color: "minecraft-red",
    },
    {
      name: "Торговый квартал",
      type: "market",
      coords: "150, 65, -150",
      description: "Центр торговли и экономики",
      color: "minecraft-orange",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
                asChild
              >
                <a href="/">
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  На главную
                </a>
              </Button>
              <div>
                <h1 className="text-3xl font-heading font-bold text-white">
                  🗺️ Онлайн карта сервера
                </h1>
                <p className="text-minecraft-gray mt-2">
                  Исследуй мир EpochCraft в реальном времени
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-minecraft-green/20 text-minecraft-green border-minecraft-green/30">
                <Icon name="Circle" size={8} className="mr-1" />
                Онлайн
              </Badge>
              <Badge
                variant="outline"
                className="border-minecraft-gray/30 text-minecraft-gray"
              >
                Обновлено 2 мин назад
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Map Viewer */}
          <div className="lg:col-span-3">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center gap-2">
                    <Icon name="Map" size={24} />
                    Интерактивная карта
                  </CardTitle>
                  <div className="flex gap-2">
                    {mapLayers.map((layer) => (
                      <Button
                        key={layer.id}
                        variant={layer.active ? "default" : "outline"}
                        size="sm"
                        className={
                          layer.active
                            ? "bg-minecraft-green hover:bg-minecraft-green/80"
                            : ""
                        }
                      >
                        <Icon
                          name={layer.icon as any}
                          size={16}
                          className="mr-1"
                        />
                        {layer.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div
                  className="relative bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-lg overflow-hidden"
                  style={{ height: "600px" }}
                >
                  {/* Placeholder for actual map */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-800/10 via-blue-800/10 to-purple-800/10">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
                      }}
                    ></div>

                    {/* Map markers */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-minecraft-green rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                      <div className="text-xs text-white mt-1 text-center font-medium">
                        Спавн
                      </div>
                    </div>

                    <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="text-xs text-white mt-1 text-center">
                        Нордхейм
                      </div>
                    </div>

                    <div className="absolute top-2/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="text-xs text-white mt-1 text-center">
                        Драконий Трон
                      </div>
                    </div>

                    <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                      <div className="text-xs text-white mt-1 text-center">
                        Зеленый Дом
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-white text-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon
                          name="Users"
                          size={14}
                          className="text-minecraft-green"
                        />
                        <span>47 игроков онлайн</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          name="MapPin"
                          size={14}
                          className="text-minecraft-orange"
                        />
                        <span>Масштаб: 1:100</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-white text-xs">
                      <div>Координаты: 0, 64, 0</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <Button className="bg-minecraft-green hover:bg-minecraft-green/80 text-white">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Открыть в полном размере
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map Features */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Settings" size={20} />
                  Возможности карты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mapFeatures.map((feature, index) => (
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
                </div>
              </CardContent>
            </Card>

            {/* Landmarks */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Landmark" size={20} />
                  Достопримечательности
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {landmarks.map((landmark, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-slate-600 pl-3"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className={`w-2 h-2 rounded-full bg-${landmark.color}`}
                        ></div>
                        <div className="text-white text-sm font-medium">
                          {landmark.name}
                        </div>
                      </div>
                      <div className="text-minecraft-gray text-xs mb-1">
                        {landmark.description}
                      </div>
                      <div className="text-minecraft-gray text-xs font-mono">
                        {landmark.coords}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Controls */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Navigation" size={20} />
                  Управление
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                >
                  <Icon name="Home" size={16} className="mr-2" />К спавну
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                >
                  <Icon name="User" size={16} className="mr-2" />
                  Мое местоположение
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                >
                  <Icon name="Search" size={16} className="mr-2" />
                  Поиск игрока
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать карту
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Information Banner */}
        <div className="mt-8">
          <Card className="bg-gradient-to-r from-minecraft-green/10 to-minecraft-blue/10 border-minecraft-green/20 backdrop-blur-sm">
            <CardContent className="py-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">🔍</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Как пользоваться картой?
                  </h3>
                  <p className="text-minecraft-gray text-sm">
                    Используй колесо мыши для масштабирования, зажми левую
                    кнопку мыши для перемещения по карте. Нажимай на маркеры для
                    получения подробной информации о локациях.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Map;
