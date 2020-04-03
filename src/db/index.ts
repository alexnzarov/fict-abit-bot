import { createConnection as _createConnection } from 'typeorm';
import config from './config';

export const createConnection = () => _createConnection(config);
