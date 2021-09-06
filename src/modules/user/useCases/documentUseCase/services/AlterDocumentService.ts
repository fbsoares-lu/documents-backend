import { getCustomRepository } from "typeorm";
import { DocumentsRepository } from "../../../repositories/DocumentsRepository";

interface IDocumentRequest {
    title: string;
    content: string
    document_id: string;
}

class AlterDocumentService {
    async execute({ content, title, document_id }: IDocumentRequest) {
        const documentsRepository = getCustomRepository(DocumentsRepository);

        const document = await documentsRepository.findOne(document_id);
        
        if (!document) {
            throw new Error("ID Document does not exists!");
        }

        document.content = content;
        document.title = title;

        await documentsRepository.save(document);

        return document;
    }
}

export { AlterDocumentService };