import { Task } from './tasks.entity';
import AppDataSource from '../data-source';

class TasksController {
  constructor(
    private tasksRepository = AppDataSource.getRepository(
      Task,
    ),
  ) {}

  public async getAll(): Promise<Task[]> {
    let allTasks: Task[];
    try {
      allTasks = await this.tasksRepository.find({
        order: {
          date: 'ASC',
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { TasksController };
