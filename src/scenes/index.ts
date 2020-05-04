import Stage from 'telegraf/stage';
import { scene as besuperhero } from './besuperhero';

const stage = new Stage();
stage.register(besuperhero);

export { stage };
