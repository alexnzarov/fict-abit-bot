import { ResponseGoal } from "./core/response";

export interface ILink {
  goal: ResponseGoal;
  title: string;
  url: string;
};

const links: ILink[] = [
  {
    goal: null,
    title: 'Общая флудилка (@fict_talk)\n',
    url: 'https://t.me/fict_talk',
  },

  {
    goal: null,
    title: 'Каталог полезной информации ⭐️',
    url: 'https://telegra.ph/Korisn%D1%96-posilannya-dlya-ab%D1%96tur%D1%96yenta-F%D0%86OT-05-04'
  },
  {
    goal: null,
    title: 'КПИшный интернет ⭐️',
    url: 'https://telegra.ph/KPIshnyj-internet-v-telegramme-05-28'
  },
  {
    goal: null,
    title: 'КПИшный интернет №2 ⭐️\n',
    url: 'https://t.me/kpiweb'
  },

  /*
    Информация про кафедры
  */
  {
    goal: ResponseGoal.DEPARTMENT,
    title: 'Выбор кафедры',
    url: 'https://telegra.ph/Pro-vybor-kafedry-07-14'
  },
  {
    goal: ResponseGoal.DEPARTMENT,
    title: 'Отзывы студентов про кафедры',
    url: 'https://telegra.ph/Otzyvy-studentov-07-20'
  },

  /*
    Информация про факультет
    Надо больше
  */
  {
    goal: ResponseGoal.FACULTY,
    title: 'Про обучение в КПИ, на ФИВТ',
    url: 'http://telegra.ph/Pinok-dobra-abiturientu-07-15',
  },
  {
    goal: ResponseGoal.FACULTY,
    title: 'Советы от преподавателей',
    url: 'https://telegra.ph/Sovety-ot-prepodavatelej-03-14',
  },

  /*
    Информация про специальности
    Надо больше
  */
  {
    goal: ResponseGoal.SPECIALTY,
    title: 'Откровенный разговор про 123 специальность',
    url: 'https://telegra.ph/V%D1%96dverta-rozmova-pro-123-na-F%D0%86OT%D1%96-04-11',
  },

  /*
    Проходной/конкурсный балл
  */
  {
    goal: ResponseGoal.SCORE,
    title: 'Проходной балл на бюджет 2019 год',
    url: 'https://telegra.ph/Prohodnoj-ball-FIVT-2019-03-22',
  },
  {
    goal: ResponseGoal.SCORE,
    title: 'Проходной балл на бюджет 2018 год',
    url: 'https://kpi.ua/2018-score',
  },
  {
    goal: ResponseGoal.SCORE,
    title: 'Как считать конкурсный балл',
    url: 'https://ru.osvita.ua/consultations/konkurs-ball/',
  },

  /*
    Информация про общежития
  */
  {
    goal: ResponseGoal.DORMS,
    title: 'Поселение в общежитие',
    url: 'https://telegra.ph/Poselenie-v-obshchezhitie-08-10',
  },
  {
    goal: ResponseGoal.DORMS,
    title: 'Что взять в общежитие',
    url: 'https://telegra.ph/CHto-vzyat-v-obshchezhitie-08-22',
  },
  {
    goal: ResponseGoal.DORMS,
    title: 'Полный гайд по общежитиям КПИ',
    url: 'https://telegra.ph/Polnyj-gajd-po-obshchagam-KPI-dlya-chajnikov-07-30',
  }
];

export const getLinks = (goal: ResponseGoal) => links.filter(l => l.goal === goal).map(l => (`<a href="${l.url}">${l.title}</a>`)).join('\n');

export default links;
