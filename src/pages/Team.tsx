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

const Team = () => {
  const teamMembers = [
    {
      name: "Александр «SkyLord»",
      role: "Глава проекта",
      avatar: "👑",
      description:
        "Основатель и руководитель EpochCraft. Мечтает создать идеальный сервер для игроков всех возрастов.",
      experience: "5+ лет в Minecraft",
      specialties: [
        "Управление проектом",
        "Концепция эпох",
        "Стратегическое планирование",
      ],
      achievements: [
        "Создал концепцию эволюционных эпох",
        "Построил сообщество 10,000+ игроков",
        "Запустил 3 успешных сезона сервера",
      ],
      contact: {
        discord: "SkyLord#1337",
        telegram: "@skylord_mc",
      },
      quote:
        "«Каждая эпоха — это новые возможности для творчества и приключений»",
      joinDate: "Январь 2019",
    },
  ];

  const admins = [
    {
      name: "Мария «TechWitch»",
      role: "Технический администратор",
      avatar: "🔧",
      description:
        "Отвечает за техническую стабильность сервера и разработку плагинов.",
      specialties: [
        "Java разработка",
        "Серверное администрирование",
        "Плагины",
      ],
      availability: "Пн-Пт 18:00-23:00 МСК",
      contact: {
        discord: "TechWitch#2048",
      },
    },
    {
      name: "Дмитрий «BuildMaster»",
      role: "Администратор строительства",
      avatar: "🏗️",
      description:
        "Курирует все масштабные стройки и архитектурные проекты на сервере.",
      specialties: ["Архитектура", "Ландшафтный дизайн", "Координация строек"],
      availability: "Ежедневно 20:00-01:00 МСК",
      contact: {
        discord: "BuildMaster#0512",
      },
    },
    {
      name: "Елена «EventQueen»",
      role: "Администратор мероприятий",
      avatar: "🎉",
      description:
        "Организует события, конкурсы и праздники для игроков сервера.",
      specialties: [
        "Организация мероприятий",
        "Работа с сообществом",
        "Призовые фонды",
      ],
      availability: "Выходные 15:00-22:00 МСК",
      contact: {
        discord: "EventQueen#7777",
      },
    },
    {
      name: "Артем «GuardianAngel»",
      role: "Администратор безопасности",
      avatar: "🛡️",
      description:
        "Следит за соблюдением правил и разбирает конфликтные ситуации.",
      specialties: ["Модерация", "Расследования", "Античит системы"],
      availability: "Ежедневно 16:00-24:00 МСК",
      contact: {
        discord: "GuardianAngel#9999",
      },
    },
  ];

  const moderators = [
    {
      name: "Владислав «HelpBot»",
      role: "Старший модератор",
      avatar: "👨‍💼",
      description:
        "Помогает новичкам и координирует работу младших модераторов.",
      availability: "Пн-Ср-Пт 19:00-23:00 МСК",
    },
    {
      name: "Анна «ChatMod»",
      role: "Модератор чата",
      avatar: "💬",
      description: "Следит за порядком в чате и помогает игрокам с вопросами.",
      availability: "Вт-Чт-Сб 17:00-21:00 МСК",
    },
    {
      name: "Игорь «WorldGuard»",
      role: "Модератор мира",
      avatar: "🌍",
      description: "Отвечает за целостность игрового мира и защиту построек.",
      availability: "Выходные 14:00-20:00 МСК",
    },
  ];

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
                  👥 Команда EpochCraft
                </h1>
                <p className="text-minecraft-gray mt-2">
                  Познакомься с людьми, которые создают и развивают наш сервер
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Project Leader */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Icon name="Crown" size={24} className="text-minecraft-purple" />
            Глава проекта
          </h2>

          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gradient-to-r from-minecraft-purple/10 to-minecraft-orange/10 border-minecraft-purple/30 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-8xl mb-4">{member.avatar}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <Badge className="bg-minecraft-purple/20 text-minecraft-purple border-minecraft-purple/30 mb-4">
                      {member.role}
                    </Badge>
                    <div className="space-y-2 text-sm text-minecraft-gray">
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Calendar" size={16} />
                        <span>С нами с {member.joinDate}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Icon name="Trophy" size={16} />
                        <span>{member.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <p className="text-minecraft-gray italic text-lg mb-4">
                        {member.quote}
                      </p>
                      <p className="text-slate-300">{member.description}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Специализации:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <Badge
                            key={specialtyIndex}
                            variant="outline"
                            className="border-minecraft-purple/50 text-minecraft-purple"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Достижения:
                      </h4>
                      <ul className="space-y-2">
                        {member.achievements.map(
                          (achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="flex items-start gap-2 text-slate-300"
                            >
                              <Icon
                                name="Star"
                                size={16}
                                className="text-minecraft-orange mt-0.5"
                              />
                              <span>{achievement}</span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Связь:</h4>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <Icon
                            name="MessageSquare"
                            size={16}
                            className="text-blue-400"
                          />
                          <span>{member.contact.discord}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <Icon
                            name="Send"
                            size={16}
                            className="text-blue-500"
                          />
                          <span>{member.contact.telegram}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Administration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Icon name="Users" size={24} className="text-minecraft-orange" />
            Администрация
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {admins.map((admin, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{admin.avatar}</div>
                    <div>
                      <CardTitle className="text-white">{admin.name}</CardTitle>
                      <CardDescription className="text-minecraft-orange">
                        {admin.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-sm">{admin.description}</p>

                  <div>
                    <div className="text-sm text-minecraft-gray mb-2">
                      Специализации:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {admin.specialties.map((specialty, specialtyIndex) => (
                        <Badge
                          key={specialtyIndex}
                          variant="secondary"
                          className="bg-slate-700 text-white text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Icon
                      name="Clock"
                      size={16}
                      className="text-minecraft-green"
                    />
                    <span className="text-slate-300">{admin.availability}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Icon
                      name="MessageSquare"
                      size={16}
                      className="text-blue-400"
                    />
                    <span className="text-slate-300">
                      {admin.contact.discord}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Moderators */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Icon name="Shield" size={24} className="text-minecraft-green" />
            Модераторы
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {moderators.map((moderator, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{moderator.avatar}</div>
                  <CardTitle className="text-white text-lg">
                    {moderator.name}
                  </CardTitle>
                  <CardDescription className="text-minecraft-green">
                    {moderator.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-center">
                  <p className="text-slate-300 text-sm">
                    {moderator.description}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Icon
                      name="Clock"
                      size={14}
                      className="text-minecraft-green"
                    />
                    <span className="text-slate-400">
                      {moderator.availability}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Join Team CTA */}
        <section>
          <Card className="bg-gradient-to-r from-minecraft-green/10 to-minecraft-orange/10 border-minecraft-green/20 backdrop-blur-sm">
            <CardContent className="py-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                🚀 Хочешь присоединиться к команде?
              </h3>
              <p className="text-minecraft-gray mb-6 max-w-2xl mx-auto">
                Мы всегда рады талантливым и мотивированным людям! Если у тебя
                есть опыт в администрировании серверов, разработке или
                организации мероприятий - свяжись с нами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-minecraft-green hover:bg-minecraft-green/80 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
                <Button
                  variant="outline"
                  className="border-minecraft-orange text-minecraft-orange hover:bg-minecraft-orange hover:text-white"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Связаться в Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Team;
