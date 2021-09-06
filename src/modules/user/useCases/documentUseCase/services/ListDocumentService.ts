import { getCustomRepository } from "typeorm";
import { DocumentsRepository } from "../../../repositories/DocumentsRepository";

class ListDocumentService {
    async execute() {
        const documentsRepository = getCustomRepository(DocumentsRepository);

        const documents = await documentsRepository.find();

        return documents;
    }
}

export { ListDocumentService };