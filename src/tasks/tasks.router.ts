import { Router, Request, Response } from 'express';

export const tasksRouter: Router = Router();

tasksRouter.get('/tasks', (req: Request, res: Response) => {
  res.send('Hello World!');
});
