import { Middleware } from "telegraf";
import { IContextMessage } from "../../core/context";

export default (): Middleware<IContextMessage> => async (ctx) => {
  if (ctx.superhero) {
    ctx.reply('Ты уже супергерой 🦸‍♂️🦸‍♀️')
    return;
  }

  ctx.scene.enter('besuperhero');
};
