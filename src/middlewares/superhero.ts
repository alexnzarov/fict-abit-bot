import { Middleware } from 'telegraf';
import { IContextMessage } from '../core/context';
import { Superhero } from '../db/entities/Superhero';

export default (): Middleware<IContextMessage> => async (ctx, next) => {
  const id = ctx.from?.id;

  if (!id) {
    next();
    return;
  }

  ctx.superhero = await Superhero.findOne({ user_id: id });

  next();
};