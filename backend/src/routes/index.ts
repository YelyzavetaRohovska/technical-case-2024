import { Router } from 'express';

import homeRouter from './home.routes';
import usersRouter from './users.routes';
import reportRouter from './report.routes';

const router = Router();


router.use('/', homeRouter);
router.use('/users', usersRouter);
router.use('/report', reportRouter);

export default router;
