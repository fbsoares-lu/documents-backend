import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { CreateAccessController } from '../modules/user/useCases/accessUseCase/controllers/CreateAccessController';

const accessRoutes = Router();

const createAccessController = new CreateAccessController();

accessRoutes.post("/", ensureAuthenticated, createAccessController.handle);

export { accessRoutes }