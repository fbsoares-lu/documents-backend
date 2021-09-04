import { Request, Response } from "express";
import { CreateAccessService } from "../services/CreateAccessService";

class CreateAccessController {
    async handle(request: Request, response: Response) {
        const { description } = request.body;

        const createAccessService = new CreateAccessService();

        const access = await createAccessService.execute(description);

        return response.json(access);
    }
};

export { CreateAccessController };