import express, {
  Express,
  Request,
  Response,
} from 'express';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import cors from 'cors';
// import bodyParser from 'body-parser';
import { Task } from './Entity/Task';

const app: Express = express();
dotenv.config();
const port = process.env.PORT;
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

export const AppDataSource = new DataSource({
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

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log('Data Source has been initialized!');
  })
  .catch((error) =>
    console.error(
      'Error during Data Source initialization',
      error,
    ),
  );
