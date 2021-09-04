import { Request, Response } from "express";
import { CreateDocumentService } from "../services/CreateDocumentService";

class CreateDocumentController {
    async handle(request: Request, response: Response) {
        const { title, content, id_project } = request.body;

        const createDocumentService = new CreateDocumentService();

        const document = await createDocumentService.execute({
            title,
            content,
            id_project
        });

        return response.status(201).json(document);
    }
};

export { CreateDocumentController }