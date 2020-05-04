import { Middleware } from "telegraf";
import { IContextMessage } from "../../core/context";

export default (): Middleware<IContextMessage> => async (ctx) => {
  if (ctx.scene) { await ctx.scene.leave(); }

  await ctx.reply('Возвращаемся к началу...', { 
    reply_to_message_id: ctx.message.message_id,
    reply_markup: await ctx.getKeyboardMarkup(),
  });
  return;
};
