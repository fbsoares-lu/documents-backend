import { Router } from 'express';
import { CreateAccessController } from '../modules/user/useCases/controllers/access/CreateAccessController'
import { ListAccessController } from '../modules/user/useCases/controllers/access/ListAccessController';

const accessRoutes = Router();

const createAccessController = new CreateAccessController();
const listAccessController = new ListAccessController();

accessRoutes.post("/", createAccessController.handle);

accessRoutes.get("/", listAccessController.handle);

export { accessRoutes };