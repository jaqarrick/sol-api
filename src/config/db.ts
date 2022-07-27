import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: DB_HOST || 'localhost',
  port: DB_PORT ? parseInt(DB_PORT) : 3307,
  username: DB_USERNAME || 'carrick',
  password: DB_PASSWORD || 'changeme',
  database: DB_DATABASE || 'sol-mysql',
  synchronize: true,
};
