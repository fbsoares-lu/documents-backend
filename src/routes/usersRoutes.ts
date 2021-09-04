import { Router } from 'express';

import { CreateUserController } from '../modules/user/useCases/userUseCase/controllers/CreateUserController';
import { ListUserController } from '../modules/user/useCases/userUseCase/controllers/ListUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoutes.post('/', createUserController.handle);

usersRoutes.get('/', listUserController.handle);

export { usersRoutes };