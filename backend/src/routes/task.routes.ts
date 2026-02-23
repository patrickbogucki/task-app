import { Router } from 'express';
import { getTasks, getTaskById, createTask, updateTaskStatus, delegateTask } from '../controllers/task.controller';

const router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.get('/:id', getTaskById);
router.put('/:id/status', updateTaskStatus);
router.post('/:id/delegate', delegateTask);

export default router;
