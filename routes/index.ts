import express from 'express';

const router = express.Router();

import { vacationRoutes } from './vacation.routes';
import { mathRoutes } from './math.routes';

router.use('/', vacationRoutes);
router.use('/', mathRoutes);

export { router };
