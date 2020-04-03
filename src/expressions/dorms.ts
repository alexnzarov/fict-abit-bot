import { Response, ResponseGoal } from '../core/response';
import { any } from '../utils/regex';

export default class extends Response {
  goal = ResponseGoal.DORMS;
  reply = 'Что я знаю про общежития:';
  expression = any([
    '(как|какие|что|які?|что|що).*(общаг(и|ой|ами|ою)|общежити(е|я)|(гуртожит(ок|ки))).*\\?',
    '(расс?ка(зать|ж(е|и)те)|розка(зати|жіть)|поясн(іть|ите)).*(про|за|о(б)?).*(общаг(и|ой|ами|ою)|общежити(е|я)|(гуртожит(ок|ки)))',
  ]);
};