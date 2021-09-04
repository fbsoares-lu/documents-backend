import { Router } from 'express';
import { accessRoutes } from './accessRoutes';

import { athenticateRoutes } from './authenticateRoutes';
import { projectRoutes } from './projectsRoutes';
import { usersRoutes } from './usersRoutes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/login', athenticateRoutes);
routes.use('/access', accessRoutes);
routes.use('/projects', projectRoutes);

export { routes };