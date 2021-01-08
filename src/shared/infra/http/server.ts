import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import routes from '@shared/infra/http/routes';
import rateLimiter from './middlewares/rateLimiter';

const core = express();
const port = process.env.PORT || 3000;

core.use(cors());
core.use(express.json());
core.use(rateLimiter);
core.use(routes);

core.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`💻 Server started on port ${port}!`);
});
