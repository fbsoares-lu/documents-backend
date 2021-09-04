import { Request, Response } from "express";
import { DeleteProjectService } from "../services/DeleteProjectService";

class DeleteProjectController {
    async handle(request: Request, response: Response) {
        const { project_id } = request.params;

        const deleteProjectService = new DeleteProjectService();

        await deleteProjectService.execute(project_id);

        return response.send();
    }
}

export { DeleteProjectController };