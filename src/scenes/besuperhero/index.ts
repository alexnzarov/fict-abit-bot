import { InputCollector } from '../input';
import { Superhero } from '../../db/entities/Superhero';
import { specialties, departments } from '../../core/fict';

const specialtiesList = Object.keys(specialties);

const collector = InputCollector.create()
  .collect({
    key: 'specialty',
    validator: (value) => specialtiesList.includes(value),
    enter: (ctx) => ctx.reply('На какой специальности ты учишься?', { 
      reply_markup: { 
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: [specialtiesList.map(s => ({ text: s })), [{ text: '🚫 Отменить' }]],
      },
    }),
    error: async (ctx, retry) => {
      await ctx.reply('Я не знаю такой специальности...');
      retry();
    }
  })
  .collect({
    key: 'department',
    validator: (value, ctx) => {
      const { specialty } = ctx.scene.state.input;
      return specialties[specialty].departments.includes(value);
    },
    enter: (ctx) => ctx.reply('А на какой кафедре?', {
      reply_markup: { 
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: [specialties[ctx.scene.state.input.specialty].departments.map(d => ({ text: d })), [{ text: '🚫 Отменить' }]],
      },
    }),
    error: async (ctx, retry) => {
      await ctx.reply('Такой кафедры нет на твоей специальности...');
      retry();
    },
  })
  .collect({
    key: 'year',
    validator: (value) => {
      const num = parseInt(value);
      return Number.isInteger(num) && num > 0 && num < 7;
    },
    enter: (ctx) => ctx.reply('На каком ты сейчас курсе?', {
      reply_markup: { 
        one_time_keyboard: true,
        resize_keyboard: true,
        keyboard: [[{ text: '🚫 Отменить' }]],
      },
    }),
    error: async (ctx, retry) => {
      await ctx.reply('Не может такого быть...');
      retry();
    },
  })
  .collect({
    key: 'ok',
    validator: (value) => value === 'Да' || value === 'Нет',
    enter: (ctx) => {
      const { specialty, department, year } = ctx.scene.state.input;

      const text = [
        `<b>${specialties[specialty].name} (${specialty})</b>`,
        `<b>${departments[department].name} (${department})</b>`,
        `<b>${year} курс</b>\n`,
        `Всё правильно?`,
      ].join('\n');
      
      ctx.reply(text, {
        parse_mode: 'HTML',
        reply_markup: { 
          one_time_keyboard: true,
          resize_keyboard: true,
          keyboard: [[{ text: 'Да' }, { text: 'Нет' }], [{ text: '🚫 Отменить' }]],
        },
      })
    },
    error: async (ctx, retry) => {
      await ctx.reply('Я не понимаю...');
      retry();
    }
  })
  .finish(async (ctx, data) => {
    const { specialty, department, year, ok } = data;

    if (ok != 'Да') {
      ctx.scene.state.input = {};
      ctx.scene.state.step = 0;
      ctx.scene.enter('besuperhero');
      return;
    }

    const u = ctx.from;
    await Superhero.create({
      user_id: u.id,
      username: u.username,
      first_name: u.first_name,
      last_name: u.last_name,
      specialty,
      department,
      studyYear: parseInt(year),
    }).save();

    ctx.reply('Поздравляю, ты - супергерой 🤗', { reply_markup: await ctx.getKeyboardMarkup() });
  });

export const scene = collector.toScene('besuperhero');