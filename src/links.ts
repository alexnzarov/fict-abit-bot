import { ResponseGoal } from "./core/response";

export interface ILink {
  goal: ResponseGoal;
  title: string;
  url: string;
};

const links: ILink[] = [
  {
    goal: null,
    title: 'КПИшный интернет ⭐️\n',
    url: 'https://telegra.ph/KPIshnyj-internet-v-telegramme-05-28'
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
    title: 'Что за "126" специальность',
    url: 'https://telegra.ph/Informacionnye-sistemy-i-tehnologii-07-18',
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