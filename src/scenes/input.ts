import { Middleware } from 'telegraf';
import { IContextMessage } from '../core/context';
import Scene from 'telegraf/scenes/base';
import cancel from '../actions/commands/cancel';
import superheroMiddleware from '../middlewares/superhero';

export interface IInputHandler {
  key: string;
  enter: Middleware<IContextMessage>;
  error?: (ctx: IContextMessage, retry: () => void) => void;
  validator?: (value: string, ctx: IContextMessage) => boolean;
};

export class InputCollector<T = any> {
  private handlers: IInputHandler[] = [];
  private onFinish: (ctx: IContextMessage, data: T) => void;

  public collect(handler: IInputHandler) {
    this.handlers.push(handler);
    return this;
  }

  public finish(fn: (ctx: IContextMessage, data: T) => void) {
    this.onFinish = fn;
    return this;
  }

  private handle(ctx: IContextMessage, step?: number) { 
    return this.handlers[step ?? ctx.scene.state.step].enter(ctx);
  }

  public toScene(sceneName: string) {
    const scene = new Scene(sceneName);

    scene.command('/cancel', superheroMiddleware(), cancel());
    scene.hears('🚫 Отменить', superheroMiddleware(), cancel());

    scene.enter((ctx) => {
      ctx.scene.state.step = 0;
      ctx.scene.state.input = {};
      this.handle(ctx, 0);
    });

    scene.on('text', async (ctx: IContextMessage) => {
      const h = this.handlers[ctx.scene.state.step];
      const { text } = ctx.message;

      if (h.validator && !h.validator(text, ctx)) {
        await h.error(ctx, () => this.handle(ctx, ctx.scene.state.step));
        return;
      }

      ctx.scene.state.input[h.key] = text;
      ctx.scene.state.step++;
      
      if (ctx.scene.state.step >= this.handlers.length) {
        const data = ctx.scene.state.input;
        await ctx.scene.leave();
        await this.onFinish(ctx, data);
      } else {
        this.handle(ctx);
      }
    });

    return scene;
  }

  public static create() { return new InputCollector(); }
};