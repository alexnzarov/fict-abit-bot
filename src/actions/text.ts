import { Middleware } from "telegraf";
import { IContextMessage } from "../core/context";
import { Reply } from "../db/entities/Reply";
import { getLinks } from '../links'; 
import { Response } from "../core/response";
import expressions from '../expressions';

export const buildReply = (responses: Response[]) => responses.map(r => `${r.reply}\n${getLinks(r.goal)}\n`).join('\n');

const getResponses = (text) => expressions.filter(e => e.match(text));

export default (): Middleware<IContextMessage> => async (ctx) => {
  const { text, message_id, reply_to_message, from } = ctx.message;
  const responses = getResponses(text);

  if (from.username === 'alegator1209' && text.trim().toLowerCase() == 'дороу' && reply_to_message && reply_to_message.from.username === 'fict_abit_bot' && Math.random() <= 0.05) {
    await ctx.reply('Гарна робота, Олег', { reply_to_message_id: message_id });
  }

  responses.forEach(r => Reply.create({ goal: r.goal, message: text }).save());

  // should not reply in fictonline chat
  if (responses.length > 0 && ctx.chat.id != -1001039334478) {
    const replyText = `<b>Мне кажется, что я могу помочь тебе с этим.</b>\n\n${buildReply(responses)}`;
    await ctx.reply(replyText, { reply_to_message_id: message_id, parse_mode: 'HTML', disable_web_page_preview: true });
  }
};
