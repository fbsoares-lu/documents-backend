import { Request, Response } from "express";
import { CreateAccessService } from "../services/CreateAccessService";

class CreateAccessController {
    async handle(request: Request, response: Response) {
        const { id_project, id_user, permission } = request.body;

        const createUserAccessService = new CreateAccessService();

        const userAccess = await createUserAccessService.execute({
            id_project,
            id_user,
            permission
        });

        return response.status(201).json(userAccess);
    }
}

export { CreateAccessController };