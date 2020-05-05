import { Middleware } from "telegraf";
import { IContextMessage } from "../core/context";
import { User } from "../db/entities/User";
import logger from "../core/logger";

export default (): Middleware<IContextMessage> => async (ctx, next) => {
  const { from } = ctx;
  
  // TODO: proper upsert
  let user = await User.findOne({ id: from.id });
  
  if (!user) {
    user = await User.default(from);
  } else {
    user.username = from.username;
    user.firstName = from.first_name;
    user.lastName = from.last_name;

    user.save().catch(e => logger.error(`Failed to update information about the user [${from.id}]: ${e}`));
  }

  ctx.user = user;
  
  next();
};