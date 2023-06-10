import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { Task } from './tasks/tasks.entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  // entities: [__dirname + '/entity/*.ts'],
  entities: [Task],
  synchronize: true,
});

export default AppDataSource;
