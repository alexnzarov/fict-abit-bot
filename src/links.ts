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
    title: 'Полный гайд по 121 специальность на ФИВТе',
    url: 'https://telegra.ph/121-F%D0%86OT---put%D1%96vnik-dlya-dzhentelmena-06-09'
  },
  {
    goal: ResponseGoal.SPECIALTY,
    title: 'Полный гайд по 126 специальность на ФИВТе',
    url: 'https://telegra.ph/126-specialnost-08-01'
  },
  {
    goal: ResponseGoal.SPECIALTY,
    title: 'Откровенный разговор про 123 специальность на ФИВТе',
    url: 'https://telegra.ph/V%D1%96dverta-rozmova-pro-123-na-F%D0%86OT%D1%96-04-11',
  },
  {
    goal: ResponseGoal.SPECIALTY,
    title: 'Гайд для абитуры-программистов КПИ',
    url: 'https://www.hashtap.com/@vosmiklasnizza/%D0%B3%D0%B0%D0%B9%D0%B4-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B1%D0%B8%D1%82%D1%83%D1%80%D1%8B-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%81%D1%82%D0%BE%D0%B2-%D0%BA%D0%BF%D0%B8-v2-0-ZQM5oXbLWwYr',
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
