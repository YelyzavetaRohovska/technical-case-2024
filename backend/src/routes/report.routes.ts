import { Router, Request, Response } from 'express';
import { query, validationResult } from 'express-validator';

import { getReport } from './../controllers/report.controllers';

const maxNameLength = 40;
type SearchQuery = { name: string };

const router = Router();

router.get('/userTotalScore', 
  query('name').trim().isString(),
  (req: Request<{}, {}, {}, SearchQuery>, res: Response) => 
{
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).send({ message: 'Validaion failed'});
  }

  if (req.query.name?.length > maxNameLength) {
    return res.status(400).send({ message: 'Invalid param "name"'});
  }

  res.status(200).json(getReport(req.query.name));
});

export default router;
