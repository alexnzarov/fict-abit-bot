import { Response, ResponseGoal } from '../core/response';
import { any } from '../utils/regex';

export default class extends Response {
  goal = ResponseGoal.SCORE;
  reply = 'Информация про проходные баллы за прошлые годы:';
  expression = any([
    '(как(ие|ой)|як(і|ий)) +.*(проходной|прохідний|конкурсн(и|ы)й)? +.*балл?(ы|и)?.*\\?',
  ]);
};