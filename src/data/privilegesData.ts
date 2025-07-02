export interface PrivilegeFeature {
  name: string;
  icon: string;
  description: string;
}

export interface Privilege {
  id: string;
  name: string;
  price: number;
  color: string;
  prefix: string;
  description: string;
  popular: boolean;
  duration: string;
  features: PrivilegeFeature[];
  commands: string[];
}

export const privilegesData: Privilege[] = [
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

export const comparisonFeatures = [
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

export interface FAQ {
  question: string;
  answer: string;
}

export const faqData: FAQ[] = [
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
];
