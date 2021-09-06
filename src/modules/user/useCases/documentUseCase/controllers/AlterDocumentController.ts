import { Request, Response } from "express";
import { AlterDocumentService } from "../services/AlterDocumentService";

class AlterDocumentController {
    async handle(request: Request, response: Response) {
        const { document_id } = request.params;
        const { title, content } = request.body;

        const alterDocumentService = new AlterDocumentService();

        const document = await alterDocumentService.execute({
            content,
            document_id,
            title
        });

        return response.json(document);
    }
}

export { AlterDocumentController }