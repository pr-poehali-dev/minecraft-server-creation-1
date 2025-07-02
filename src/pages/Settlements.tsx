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

const Settlements = () => {
  const countries = [
    {
      name: "Северное Королевство",
      type: "Королевство",
      population: "2,500+",
      ruler: "Король Алексис",
      description:
        "Величественное королевство на севере карты, известное своими замками и торговыми путями",
      color: "blue",
      cities: ["Нордхейм", "Ледяная Крепость", "Северный Порт"],
      specialties: ["Торговля", "Рыцарские ордена", "Архитектура"],
    },
    {
      name: "Восточная Империя",
      type: "Империя",
      population: "3,200+",
      ruler: "Император Драко",
      description:
        "Могущественная империя с развитой магией и древними традициями",
      color: "purple",
      cities: ["Драконий Трон", "Мистический Оплот", "Храм Света"],
      specialties: ["Магия", "Алхимия", "Древние знания"],
    },
    {
      name: "Лесная Республика",
      type: "Республика",
      population: "1,800+",
      ruler: "Совет Старейшин",
      description:
        "Демократическое государство в густых лесах, где правит совет избранных",
      color: "green",
      cities: ["Зеленый Дом", "Лесной Совет", "Дубовая Роща"],
      specialties: ["Лесничество", "Травничество", "Демократия"],
    },
  ];

  const majorCities = [
    {
      name: "Нордхейм",
      country: "Северное Королевство",
      population: "850",
      mayor: "Лорд Вальтер",
      description: "Столица Северного Королевства, город белокаменных замков",
      landmarks: ["Королевский Замок", "Рыцарская Академия", "Большой Базар"],
      image: "🏰",
    },
    {
      name: "Драконий Трон",
      country: "Восточная Империя",
      population: "1,200",
      mayor: "Архимаг Селена",
      description: "Магический центр империи с парящими башнями",
      landmarks: ["Императорский Дворец", "Башня Магов", "Драконий Алтарь"],
      image: "🏯",
    },
    {
      name: "Зеленый Дом",
      country: "Лесная Республика",
      population: "600",
      mayor: "Старейшина Дубовик",
      description: "Экогород, построенный в гармонии с природой",
      landmarks: ["Великое Дерево", "Совет Круг", "Эльфийский Мост"],
      image: "🌳",
    },
  ];

  const settlements = [
    {
      name: "Тихая Бухта",
      type: "Рыбацкая деревня",
      population: "120",
      leader: "Капитан Морган",
      description: "Небольшая деревня рыбаков на берегу океана",
      specialties: ["Рыболовство", "Кораблестроение"],
    },
    {
      name: "Горный Приют",
      type: "Шахтерский поселок",
      population: "200",
      leader: "Мастер Камень",
      description: "Поселение в горах, специализирующееся на добыче руды",
      specialties: ["Горное дело", "Кузнечное ремесло"],
    },
    {
      name: "Мирная Долина",
      type: "Фермерская община",
      population: "180",
      leader: "Староста Урожай",
      description: "Сельскохозяйственное поселение в плодородной долине",
      specialties: ["Земледелие", "Животноводство"],
    },
    {
      name: "Лунный Оазис",
      type: "Торговый пост",
      population: "90",
      leader: "Торговец Али",
      description: "Караванная стоянка в пустыне",
      specialties: ["Торговля", "Ориентирование"],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "королевство":
        return "bg-blue-500";
      case "империя":
        return "bg-purple-500";
      case "республика":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getSettlementTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "рыбацкая деревня":
        return "bg-blue-100 text-blue-800";
      case "шахтерский поселок":
        return "bg-gray-100 text-gray-800";
      case "фермерская община":
        return "bg-green-100 text-green-800";
      case "торговый пост":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-6">
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
                  🏛️ Страны и Поселения
                </h1>
                <p className="text-minecraft-gray mt-2">
                  Исследуй политическую карту нашего мира
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="countries" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="countries" className="flex items-center gap-2">
              <Icon name="Crown" size={16} />
              Страны
            </TabsTrigger>
            <TabsTrigger value="cities" className="flex items-center gap-2">
              <Icon name="Building2" size={16} />
              Города
            </TabsTrigger>
            <TabsTrigger
              value="settlements"
              className="flex items-center gap-2"
            >
              <Icon name="Home" size={16} />
              Поселения
            </TabsTrigger>
          </TabsList>

          {/* Countries */}
          <TabsContent value="countries" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Великие Державы
              </h2>
              <p className="text-minecraft-gray">
                Основные политические силы сервера
              </p>
            </div>

            <div className="grid gap-6">
              {countries.map((country, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full ${getTypeColor(country.type)}`}
                          />
                          {country.name}
                        </CardTitle>
                        <CardDescription className="text-minecraft-gray mt-2">
                          {country.description}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-minecraft-green text-minecraft-green"
                      >
                        {country.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-sm">
                          <Icon
                            name="Users"
                            size={16}
                            className="text-minecraft-green"
                          />
                          <span className="text-white">
                            Население: {country.population} игроков
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Icon
                            name="Crown"
                            size={16}
                            className="text-minecraft-green"
                          />
                          <span className="text-white">
                            Правитель: {country.ruler}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm text-minecraft-gray">
                          Крупные города:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {country.cities.map((city, cityIndex) => (
                            <Badge
                              key={cityIndex}
                              variant="secondary"
                              className="bg-slate-700 text-white"
                            >
                              {city}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-minecraft-gray mb-2">
                        Специализации:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {country.specialties.map(
                          (specialty, specialtyIndex) => (
                            <Badge
                              key={specialtyIndex}
                              variant="outline"
                              className="border-slate-600 text-slate-300"
                            >
                              {specialty}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Cities */}
          <TabsContent value="cities" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Великие Города
              </h2>
              <p className="text-minecraft-gray">
                Столицы и крупнейшие поселения
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {majorCities.map((city, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm"
                >
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{city.image}</div>
                    <CardTitle className="text-white">{city.name}</CardTitle>
                    <CardDescription className="text-minecraft-gray">
                      {city.country}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-300">{city.description}</p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <Icon
                          name="Users"
                          size={16}
                          className="text-minecraft-green"
                        />
                        <span className="text-white">
                          {city.population} жителей
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Icon
                          name="User"
                          size={16}
                          className="text-minecraft-green"
                        />
                        <span className="text-white">{city.mayor}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-minecraft-gray mb-2">
                        Достопримечательности:
                      </div>
                      <div className="space-y-1">
                        {city.landmarks.map((landmark, landmarkIndex) => (
                          <div
                            key={landmarkIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Icon
                              name="MapPin"
                              size={12}
                              className="text-minecraft-green"
                            />
                            <span className="text-slate-300">{landmark}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settlements */}
          <TabsContent value="settlements" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Малые Поселения
              </h2>
              <p className="text-minecraft-gray">
                Деревни, поселки и торговые посты
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {settlements.map((settlement, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white">
                          {settlement.name}
                        </CardTitle>
                        <CardDescription className="text-minecraft-gray mt-1">
                          {settlement.description}
                        </CardDescription>
                      </div>
                      <Badge
                        className={getSettlementTypeColor(settlement.type)}
                      >
                        {settlement.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon
                          name="Users"
                          size={16}
                          className="text-minecraft-green"
                        />
                        <span className="text-white">
                          {settlement.population} жителей
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon
                          name="User"
                          size={16}
                          className="text-minecraft-green"
                        />
                        <span className="text-white">{settlement.leader}</span>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm text-minecraft-gray mb-2">
                        Специализации:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {settlement.specialties.map(
                          (specialty, specialtyIndex) => (
                            <Badge
                              key={specialtyIndex}
                              variant="outline"
                              className="border-slate-600 text-slate-300"
                            >
                              {specialty}
                            </Badge>
                          ),
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-minecraft-green/10 to-blue-500/10 border-minecraft-green/20 backdrop-blur-sm">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏗️ Создай свое поселение!
              </h3>
              <p className="text-minecraft-gray mb-6 max-w-2xl mx-auto">
                Хочешь основать свой город или деревню? Собери команду
                единомышленников, выбери подходящее место и начни строить свою
                историю!
              </p>
              <Button className="bg-minecraft-green hover:bg-minecraft-green/80 text-white">
                <Icon name="Plus" size={16} className="mr-2" />
                Подать заявку на основание
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settlements;
