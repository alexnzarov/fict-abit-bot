import Telegraf from 'telegraf';
import { stage } from './scenes';
import session from 'telegraf/session';
import { IContextMessage } from './core/context';
import logger from './core/logger';

import privateChat from './middlewares/privateChat';
import superheroMiddleware from './middlewares/superhero';

import start from './actions/commands/start';
import help from './actions/commands/help';
import cancel from './actions/commands/cancel';
import superhero from './actions/commands/superhero';
import besuperhero from './actions/commands/besuperhero';
import text from './actions/text';

const bot = new Telegraf<IContextMessage>(process.env.BOT_TOKEN);

bot.context.getKeyboardMarkup = function() {
  const supeheroLine = this.superhero
    ? [/*{ text: '🦸‍♂️ Изменить данные 🦸‍♀️' },*/ { text: '🦸‍♂️ Покинуть ряды супергероев 🦸‍♀️'  }]
    : [{ text: '🦸‍♂️ Хочу стать супергероем 🦸‍♀️' }];

  return {
    resize_keyboard: true,
    keyboard: [
      [{ text: '📚 Хочу узнать про учёбу' }, { text: '📁 Информация' }],
      supeheroLine,
    ],
  };
};

bot.use(session());
bot.use(stage.middleware());

bot.start(privateChat(), superheroMiddleware(), start());
bot.help(help());

bot.command('/cancel', privateChat(), superheroMiddleware(), cancel());
bot.command('/besuperhero', privateChat(), superheroMiddleware(), besuperhero());
bot.command('/superhero', superhero());

bot.hears('🚫 Отменить', privateChat(), superheroMiddleware(), cancel());
bot.hears('🦸‍♂️ Хочу стать супергероем 🦸‍♀️', superheroMiddleware(), privateChat(), besuperhero());
bot.hears('📚 Хочу узнать про учёбу', privateChat(), superhero());
bot.hears('📁 Информация', privateChat(), help());

bot.on('text', text());

bot.catch((err) => logger.error(`Bot caught an exception`, { error: err.message ?? err.toString() }));

export default bot;