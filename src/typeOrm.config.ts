import * as path from 'path';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from './user/entities/user.entity';

config();
export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  migrationsRun: false,
  migrations: [path.resolve(__dirname, 'migrations/*{.ts,.js}')],
});
