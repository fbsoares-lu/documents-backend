import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureUserChangesProject } from '../middlewares/ensureUserChangesProject';
import { AlterProjectController } from '../modules/user/useCases/projectUseCase/controllers/AlterProjectController';
import { CreateProjectController } from '../modules/user/useCases/projectUseCase/controllers/CreateProjectController';
import { DeleteProjectController } from '../modules/user/useCases/projectUseCase/controllers/DeleteProjectController';
import { ListProjectController } from '../modules/user/useCases/projectUseCase/controllers/ListProjectController';

const projectRoutes = Router();

const createProjectController = new CreateProjectController();
const listProjectController = new ListProjectController();
const deleteProjectController = new DeleteProjectController();
const alterProjectController = new AlterProjectController();

projectRoutes.post("/", ensureAuthenticated, createProjectController.handle);
projectRoutes.get("/", ensureAuthenticated, listProjectController.handle);
projectRoutes.delete("/:project_id", ensureAuthenticated, ensureUserChangesProject, deleteProjectController.handle);
projectRoutes.put("/:project_id", ensureAuthenticated, ensureUserChangesProject, alterProjectController.handle);

export { projectRoutes }