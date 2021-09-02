import { Router } from 'express';

import { CreateUserController } from '../modules/user/useCases/controllers/user/CreateUserController';
import { ListUserController } from '../modules/user/useCases/controllers/user/ListUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', listUserController.handle);

export { usersRoutes };