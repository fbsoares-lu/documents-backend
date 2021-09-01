import { Router } from 'express';
import { accessRoutes } from './accessRoutes';

import { athenticateRoutes } from './authenticateRoutes';
import { usersRoutes } from './usersRoutes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/login', athenticateRoutes);
routes.use('/access', accessRoutes);

export { routes };