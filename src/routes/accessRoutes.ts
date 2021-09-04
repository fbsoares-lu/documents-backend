import { Router } from 'express';
import { CreateAccessController } from '../modules/user/useCases/accessUseCase/controllers/CreateAccessController';

const accessRoutes = Router();

const createAccessController = new CreateAccessController();

accessRoutes.post("/", createAccessController.handle);

export { accessRoutes }