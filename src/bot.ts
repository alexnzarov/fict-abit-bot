import Telegraf from 'telegraf';
import { IContextMessage } from './core/context';
import logger from './core/logger';

import start from './actions/commands/start';
import help from './actions/commands/help';
import text from './actions/text';
import authentication from './middlewares/authentication';
import newChatMember from './actions/newChatMember';

const bot = new Telegraf<IContextMessage>(process.env.BOT_TOKEN);

bot.use(authentication());

bot.start(start());
bot.help(help());

bot.on('text', text());
bot.on('new_chat_members', newChatMember());

bot.catch((err) => logger.error(`Bot caught an exception`, { error: err.message ?? err.toString() }));

export default bot;