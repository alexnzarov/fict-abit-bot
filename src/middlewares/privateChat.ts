import { Middleware } from 'telegraf';
import { IContextMessage } from '../core/context';

export default (): Middleware<IContextMessage> => (ctx, next) => {
  if (ctx.chat && ctx.chat.type === 'private') {
    next();
  }
};