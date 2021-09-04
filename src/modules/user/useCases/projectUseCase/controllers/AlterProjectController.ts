import { Request, Response } from "express";
import { AlterProjectService } from "../services/AlterProjectService";

class AlterProjectController {
    async handle(request: Request, response: Response) {
        const { project_id } = request.params;
        const { name } = request.body;

        const alterProjectService = new AlterProjectService();

        const project = await alterProjectService.execute({
            name,
            project_id
        });

        return response.json(project);
    }
}

export { AlterProjectController }