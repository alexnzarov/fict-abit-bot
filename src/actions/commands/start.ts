import { Middleware } from "telegraf";
import { IContextMessage } from "../../core/context";

const startText = [
  '<b>Привет! Я был создан для того, чтобы помогать абитуриентам.</b>\n',
  'Супергерои - это студенты, которые готовы рассказать про обучение и жизнь в КПИ, а так же ответить на вопросы, которые у тебя возникли. Выбери "Хочу узнать про учёбу" в меню или напиши /superhero, чтобы получить их контакты.\n',
  'Напиши /help, чтобы получить список полезных для прочтения ресурсов. Можешь так же задавать мне вопросы, а я попытаюсь ответить на них.\n',
  '<i>Не злись, если я что-то не буду понимать, я всё ещё учусь 😊</i>',
].join('\n');

export default (): Middleware<IContextMessage> => async (ctx) => {
  await ctx.reply(startText, { 
    parse_mode: 'HTML',
    reply_to_message_id: ctx.message.message_id,
    reply_markup: await ctx.getKeyboardMarkup(),
  });
  return;
};
