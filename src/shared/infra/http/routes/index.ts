import { Router } from 'express';

import rootRouter from './root';

const routes = Router();

routes.use('/', rootRouter);
// routes.use('/profile');
// routes.use('/sessions');
// routes.use('/users');
// routes.use('/events');
// routes.use('/forums');
// routes.use('/chat');

export default routes;
