import { Middleware } from "telegraf";
import { IContextMessage } from "../../core/context";
import { specialties, departments } from '../../core/fict';
import { Superhero } from "../../db/entities/Superhero";
import { FindConditions } from "typeorm";
import { getHTMLTag } from "../../utils/telegram";

const findDepartment = (text: string) => {
  text = text.toUpperCase();

  for (let key in departments) {
    if (key === text || departments[key].alias === text) {
      return key;
    }
  }

  return null;
};

const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export default (): Middleware<IContextMessage> => async (ctx) => {
  const { text, reply_to_message, message_id } = ctx.message;
  const [_, specialty, department] = text.split(' ');

  if (!specialty) {
    ctx.reply('Укажи специальность для поиска супергероев, например:\n<code>/superhero 121</code>\n<code>/superhero 126 тк</code>', {
      parse_mode: 'HTML',
      reply_to_message_id: ctx.message.message_id,
    });
    return;
  }

  if (!specialties[specialty]) {
    ctx.reply('Я не знаю такой специальности.', { reply_to_message_id: message_id });
    return;
  }

  let dep;

  if (department) {
    dep = findDepartment(department);

    if (!dep) {
      ctx.reply('Я не знаю такой кафедры.', { reply_to_message_id: message_id });
      return;
    }

    if (!specialties[specialty].departments.includes(dep)) {
      ctx.reply('Этой кафедры нет на этой специальности.', { reply_to_message_id: message_id });
      return;
    }
  }

  const query: FindConditions<Superhero> = { specialty, active: true };

  if (dep) { query.department = dep; }

  const superheroes = await Superhero.find(query);

  if (superheroes.length === 0) {
    ctx.reply('Я не смог найти супергероев, которые отвечают под критерии поиска 😔', { reply_to_message_id: message_id });
    return;
  }

  shuffle(superheroes);

  const replyId = reply_to_message ? reply_to_message.message_id : message_id;
  const superheroesText = superheroes.map(s => `${getHTMLTag(s)} (${s.specialty}, ${s.department}, ${s.studyYear} курс)`).join('\n');

  ctx.reply(`🦸‍♂️ <b>Супергерои</b> 🦸‍♀️\n\n${superheroesText}`, { parse_mode: 'HTML', reply_to_message_id: replyId });
};
