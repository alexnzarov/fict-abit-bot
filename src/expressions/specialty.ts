import { Response, ResponseGoal } from '../core/response';
import { specialties } from '../utils/aliases';
import { any } from '../utils/regex';

export default class extends Response {
  goal = ResponseGoal.SPECIALTY;
  reply = 'Вот, что у меня есть по специальностям:';
  expression = any([
    `(чем|чим|почему|чому|в каком плане|у якому (сенсі|плані)).*(${specialties}|спец(і|и)альн(і|о)ст(и|ь|і|)).*(лучше|кращ(а|е)|отлича(е|ю)ть?ся|відрізня(я|ю)ть?ся).*${specialties}?`,
    `(расс?ка(зать|ж(е|и)те)|розка(зати|жіть)|поясн(іть|ите)).*(про|за|о(б)?).*(${specialties}|спец(і|и)альн(і|о)ст(и|ь|і|))`,
    `${specialties}.*(лучше|краща|краще|или|чи|або).*${specialties}.*\\?`,
    `хочу.*(на|в|до).*${specialties}`,
    `(что|що|как|як).*(скаж(и|е)те|расс?ка(зать|жите)|розка(зати|жіть)|поясн(іть|ите)).*(про|за|о(б)?).*${specialties}`,
  ]);
};