import { Router } from 'express';
import { getLocations, getLocationById, getLocationCompliance } from '../controllers/location.controller';

const router = Router();

router.get('/', getLocations);
router.get('/:id', getLocationById);
router.get('/:id/compliance', getLocationCompliance);

export default router;
