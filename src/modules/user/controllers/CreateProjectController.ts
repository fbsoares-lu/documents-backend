import { Request, Response } from "express";
import { CreateProjectService } from "../services/CreateProjectService";

class CreateProjectController {
    async handle(request: Request, response: Response) {
        const { 
            name, 
            user_access,
            id_access 
        } = request.body;

        const createProjectService = new CreateProjectService();

        const project = await createProjectService.execute({
            name, 
            user_access, 
            id_access 
        });

        return response.status(201).json(project);
    }
};

export { CreateProjectController };