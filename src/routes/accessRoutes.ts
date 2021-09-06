import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureUserEnviteToProject } from '../middlewares/ensureUserEnviteToProject';
import { CreateAccessController } from '../modules/user/useCases/accessUseCase/controllers/CreateAccessController';

const accessRoutes = Router();

const createAccessController = new CreateAccessController();

accessRoutes.post("/", ensureAuthenticated, ensureUserEnviteToProject, createAccessController.handle);

export { accessRoutes }