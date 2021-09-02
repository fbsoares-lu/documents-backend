import { Router } from 'express';
import { CreateProjectController } from '../modules/user/controllers/CreateProjectController';

const projectRoutes = Router();

const createProductController = new CreateProjectController();

projectRoutes.post("/", createProductController.handle);

export { projectRoutes }