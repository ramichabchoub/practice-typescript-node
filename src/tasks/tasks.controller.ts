import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Task } from './tasks.entity';
import AppDataSource from '../data-source';

class TasksController {
  public async getAll(
    req: Request,
    res: Response,
  ): Promise<Response> {
    let allTasks: Task[] = [];
    try {
      allTasks = await AppDataSource.getRepository(
        Task,
      ).find({  
        order: {
          date: 'ASC',
        },
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.json(allTasks).status(200);
    } catch (_error) {
      return res
        .json({ error: `Internal server error` })
        .status(500);
    }
  }

  public async create(
    req: Request,
    res: Response,
  ): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array() });
    }
    const task = plainToInstance(Task, req.body);
    let createdTask: Task;
    try {
      createdTask = await AppDataSource.getRepository(
        Task,
      ).save(task);
      createdTask = instanceToPlain(createdTask) as Task;
      return res.json(createdTask).status(201);
    } catch (_error) {
      return res
        .json({ error: `Internal server error` })
        .status(500);
    }
  }
}

const tasksController = new TasksController();
export { tasksController };
