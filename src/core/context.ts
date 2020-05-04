import { ContextMessageUpdate } from 'telegraf';
import { User } from '../db/entities/User';

export interface IContextMessage extends ContextMessageUpdate {
  user: User;
};
