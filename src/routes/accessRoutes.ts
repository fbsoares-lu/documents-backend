import { Router } from 'express';
import { CreateAccessController } from '../modules/user/controllers/CreateAccessController'
import { ListAccessController } from '../modules/user/controllers/ListAccessController';

const accessRoutes = Router();

const createAccessController = new CreateAccessController();
const listAccessController = new ListAccessController();

accessRoutes.post("/", createAccessController.handle);

accessRoutes.get("/", listAccessController.handle);

export { accessRoutes };