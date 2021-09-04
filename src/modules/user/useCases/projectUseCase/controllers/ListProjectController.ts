import { Request, Response } from "express";
import { ListProjectService } from "../services/ListProjectService";

class ListProjectController {
    async handle(request: Request, response: Response) {
        const listProductService = new ListProjectService();

        const products = await listProductService.execute();

        return response.json(products);
    }
}

export { ListProjectController };