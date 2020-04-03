import { Middleware } from "telegraf";
import { IContextMessage } from "../../core/context";
import links from "../../links";

const getLinks = () => links.map(l => (`<a href="${l.url}">${l.title}</a>`)).join('\n');

export default (): Middleware<IContextMessage> => async (ctx) => {
  const text = getLinks();
  ctx.reply(`<b>Полезные ресурсы:</b>\n\n${text}`, { reply_to_message_id: ctx.message.message_id, parse_mode: 'HTML', disable_web_page_preview: true });
};
