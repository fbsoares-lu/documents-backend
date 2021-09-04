import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import { CreateDocumentController } from '../modules/user/controllers/CreateDocumentController';

const documentsRoutes = Router();

const createDocumentController = new CreateDocumentController();

documentsRoutes.post("/", ensureAuthenticated, createDocumentController.handle);

export { documentsRoutes };