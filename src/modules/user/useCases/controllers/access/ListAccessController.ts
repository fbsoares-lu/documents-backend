import { Request, Response } from "express";
import { ListAccessService } from "../../services/access/ListAccessService";

class ListAccessController {
    async handle(request: Request, response: Response) {
        const listAccessService = new ListAccessService();

        const access = await listAccessService.execute();

        return response.json(access);
    }
}

export { ListAccessController };