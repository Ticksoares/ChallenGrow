import { Router } from 'express';
import cors from 'cors';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
routes.use(cors());

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users/:id', UserController.delete);

routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
