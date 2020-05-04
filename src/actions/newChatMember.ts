import { Middleware } from "telegraf";
import { IContextMessage } from "../core/context";
import { User } from "../db/entities/User";

const text = [
  '<b>Привет, мы рады видеть тебя в этом чате 🤗</b>\n',
  'Полезная информация вынесена в закрепленное сообщение. Если тебя интересует что-то более конкретное, не стесняйся задавать вопросы.\n',
  'Получить список ресурсов, которые могут пригодиться, можно с помощью команды /help'
].join('\n');

export default (): Middleware<IContextMessage> => async (ctx) => {
  const { new_chat_members } = ctx.message;

  for (let i = 0; i < new_chat_members.length; i++) {
    const u = new_chat_members[i];
    const user = (await User.findOne({ id: u.id })) ?? await User.default(u);

    if (!user.beenWelcomed && ctx.chat.id != -1001039334478) {
      await ctx.reply(`${user.getTag()}\n\n${text}`, { 
        parse_mode: 'HTML',
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Обязательно к ознакомлению', url: 'https://telegra.ph/Korisn%D1%96-posilannya-dlya-ab%D1%96tur%D1%96yenta-F%D0%86OT-05-04' }],
          ],
        },
      });

      user.beenWelcomed = true;
      await user.save();
    }
  }
};
