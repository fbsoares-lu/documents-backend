import { Router } from 'express';

import { athenticateRoutes } from './authenticateRoutes';
import { usersRoutes } from './usersRoutes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/login', athenticateRoutes);

export { routes };