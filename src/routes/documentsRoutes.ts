import { Router } from 'express';

import { CreateDocumentController } from '../modules/user/controllers/CreateDocumentController';

const documentsRoutes = Router();

const createDocumentController = new CreateDocumentController();

documentsRoutes.post("/", createDocumentController.handle);

export { documentsRoutes };