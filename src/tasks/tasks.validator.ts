import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Title is required')
    .trim()
    .isString()
    .withMessage('Title must be a string'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The task date is mandatory')
    .isString()
    .withMessage('The task date must be a string'),
  body('description')
    .trim()
    .isString()
    .withMessage('The task description must be a string'),
  body('priority')
    .trim()
    .isIn([Priority.LOW, Priority.NORMAL, Priority.HIGH])
    .withMessage(
      'The task priority must be LOW, NORMAL or HIGH',
    ),
  body('status')
    .trim()
    .isIn([
      Status.TODO,
      Status.IN_PROGRESS,
      Status.COMPLETED,
    ])
    .withMessage(
      'The task status must be TODO, IN_PROGRESS or COMPLETED',
    ),
];

export { createValidator };
