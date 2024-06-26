import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import router from './routes';

const port = 8000;

const app = express()

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

