import { Router } from 'express';
import { CreateProjectController } from '../modules/user/useCases/controllers/project/CreateProjectController';

const projectRoutes = Router();

const createProductController = new CreateProjectController();

projectRoutes.post("/", createProductController.handle);

export { projectRoutes }