import { Request, Response } from "express";
import { ListDocumentService } from "../services/ListDocumentService";

class ListDocumentController {
    async handle(request: Request, response: Response) {
        const listDocumentService = new ListDocumentService();

        const documents = await listDocumentService.execute();

        return response.json(documents);
    }
}

export { ListDocumentController };