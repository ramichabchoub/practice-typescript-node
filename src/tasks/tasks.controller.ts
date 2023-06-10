import { Task } from './tasks.entity';
import { instanceToPlain } from 'class-transformer';
import AppDataSource from '../data-source';

class TasksController {
  constructor(
    private tasksRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}

  public async getAll(): Promise<Task[]> {
    let allTasks: Task[] = [];
    try {
      allTasks = await this.tasksRepository.find({
        order: {
          date: 'ASC',
        },
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      return allTasks;
    } catch (error) {
      console.log(error);
    }
    return allTasks;
  }

  // @ts-ignore
  public async create(task: Task): Promise<Task> {
  }
}

export { TasksController };
