import { Request, Response } from "express";
import { AlterProjectService } from "../services/AlterProjectService";

class AlterProjectController {
    async handle(request: Request, response: Response) {
        const { project_id } = request.params;
        const { name, user_access } = request.body;

        const alterProjectService = new AlterProjectService();

        const project = await alterProjectService.execute({
            name,
            project_id,
            user_access
        });

        return response.json(project);
    }
}

export { AlterProjectController }