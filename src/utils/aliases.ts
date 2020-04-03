import { any } from './regex';

export const departments = any([
  'тк', 'ктк',
  'асоиу', 'асоіу',
  'аутс',
  'вт', 'от',
]);

export const faculties = any([
  'фивт', 'фіот', 'фиот', 'fict',
  'ипса', 'іпса', 'iasa',
  'фпм',
  'фэл', 'фел',
]);

export const specialties = any([
  '123',
  '121',
  '126',
  '122',
]);
