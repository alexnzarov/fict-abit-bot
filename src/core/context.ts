import { ContextMessageUpdate } from 'telegraf';
import { ReplyKeyboardMarkup } from 'telegraf/typings/telegram-types';
import { Superhero } from '../db/entities/Superhero';

export interface IContextMessage extends ContextMessageUpdate {
  scene: {
    reenter: () => void;
    leave: () => void;
    enter: (id: string, state?: any, silent?: boolean) => void;
    state: any;
  };
  superhero?: Superhero;
  getKeyboardMarkup: () => ReplyKeyboardMarkup;
};
