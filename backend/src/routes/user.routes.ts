import { Router } from 'express';
import { getMe, getAllUsers } from '../controllers/user.controller';

const router = Router();

router.get('/me', getMe);
router.get('/', getAllUsers);

export default router;
