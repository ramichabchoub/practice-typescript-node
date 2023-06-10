import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import AppDataSource from './data-source';
// import bodyParser from 'body-parser';
import { tasksRouter } from './tasks/tasks.router';

const app: Express = express();
dotenv.config();
const port = Number(process.env.PORT);
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/', tasksRouter);

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
