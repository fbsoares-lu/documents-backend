import { Router } from 'express';

import { CreateDocumentController } from '../modules/user/useCases/controllers/document/CreateDocumentController';

const documentsRoutes = Router();

const createDocumentController = new CreateDocumentController();

documentsRoutes.post("/", createDocumentController.handle);

export { documentsRoutes };