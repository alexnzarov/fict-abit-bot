import dotenv from 'dotenv';
dotenv.config();

import logger from './core/logger';
import bot from './bot';
import { createConnection } from './db';

createConnection()
  .then(async (connection) => {
    logger.info('Connection to the database was established', { database: connection.driver.database });

    const { id, username, first_name } = await bot.telegram.getMe();
    bot.options.username = username;

    await bot.launch();

    logger.info('Bot was launched', { id, username, name: first_name });
  })
  .catch((err) => logger.error(`Failed to establish connection to the database`, { error: err.message ?? err.toString() }));
