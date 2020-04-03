import { ConnectionOptions } from 'typeorm';

const options: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? '127.0.0.1',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_NAME ?? 'postgres',
  schema: process.env.DB_SCHEMA ?? 'abitbot',
  logging: process.env.LOG_LEVEL === 'debug',
  synchronize: true,
  entities: [
    `${__dirname}/entities/*.js`,
  ],
};

export default options;