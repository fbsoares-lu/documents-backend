import { Request, Response } from "express";
import { DeleteDocumentService } from "../services/DeleteDocumentService";

class DeleteDocumentController {
    async handle(request: Request, response: Response) {
        const { document_id } = request.params;

        const deleteDocumentService = new DeleteDocumentService();

        await deleteDocumentService.execute(document_id);

        return response.send();
    }
}

export { DeleteDocumentController };