import { Router } from 'express';

import { CreateUserController } from '../modules/user/controllers/CreateUserControllers';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };