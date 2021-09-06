import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureUserPermissionToDocument } from '../middlewares/ensureUserPermissionToDocument';

import { ListDocumentController } from '../modules/user/useCases/documentUseCase/controllers/ListDocumentController';
import { CreateDocumentController } from '../modules/user/useCases/documentUseCase/controllers/CreateDocumentController';
import { DeleteDocumentController } from '../modules/user/useCases/documentUseCase/controllers/DeleteDocumentController';
import { AlterDocumentController } from '../modules/user/useCases/documentUseCase/controllers/AlterDocumentController';

const documentsRoutes = Router();

const listDocumentController = new ListDocumentController();
const createDocumentController = new CreateDocumentController();
const deleteDocumentController = new DeleteDocumentController();
const alterDocumentController = new AlterDocumentController();

documentsRoutes.get("/", ensureAuthenticated, listDocumentController.handle);
documentsRoutes.post("/", ensureAuthenticated, ensureUserPermissionToDocument, createDocumentController.handle);
documentsRoutes.delete("/:document_id", ensureAuthenticated, ensureUserPermissionToDocument, deleteDocumentController.handle);
documentsRoutes.put("/:document_id", ensureAuthenticated, ensureUserPermissionToDocument, alterDocumentController.handle);

export { documentsRoutes };