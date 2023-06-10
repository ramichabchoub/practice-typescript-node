import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // BaseEntity,
  // CreateDateColumn,
  // UpdateDateColumn,
} from 'typeorm';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    type: 'text',
    // nullable: true,
  })
  title: string;

  @Column({
    type: 'longtext',
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  date: string;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.NORMAL,
  })
  priority: Priority;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TODO,
  })
  status: Status;
}
