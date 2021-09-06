import { getCustomRepository } from "typeorm";
import { DocumentsRepository } from "../../../repositories/DocumentsRepository";

class DeleteDocumentService {
    async execute(document_id: string) {
        const documentsRepository = getCustomRepository(DocumentsRepository);

        const document = await documentsRepository.findOne(document_id);

        if (!document) {
            throw new Error("Document does not exists!");
        }

        await documentsRepository.delete(document_id);
    }
}

export { DeleteDocumentService };