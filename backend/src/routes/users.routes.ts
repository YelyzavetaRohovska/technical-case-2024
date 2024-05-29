import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import {
  getUsers,
  getUserById,
  addUserActivity,
} from '../controllers/users.controllers';
import { User, UserActivity } from '../models/types';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json(getUsers());
});

router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  
  if (!id) {
    return res.status(400).send({ message: 'Invalid id'});
  }
  
  res.status(200).json(getUserById(Number(req.params.id)));
});

router.post('/activity',
  body('userId').isNumeric(),
  body('activityId').isNumeric(),
  body('timestamp').isISO8601().toDate(),
  (req: Request<{}, {}, Omit<UserActivity, 'id'>>, res: Response) => 
{
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({ message: 'Validaion failed'});
  }

  const activityRes = addUserActivity(req.body);

  if (activityRes) {
    res.status(200).json(activityRes);
  } else {
    res.status(400).send({ message: 'Operation create a user activity failed'});
  }
})

export default router;
