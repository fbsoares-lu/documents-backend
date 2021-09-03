import { Router } from 'express';
import { AuthenticateUserController } from '../modules/user/controllers/AuthenticateUserController';

const athenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

athenticateRoutes.post('/', authenticateUserController.handle);

export { athenticateRoutes };