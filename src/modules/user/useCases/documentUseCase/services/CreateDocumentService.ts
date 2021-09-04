import { getCustomRepository } from "typeorm"
import { DocumentsRepository } from "../../../repositories/DocumentsRepository";
// import { ProjectsRepository } from "../../../repositories/ProjectsRepository";

interface IDocumentRequest {
    title: string;
    content: string;
    id_project: string;
}
class CreateDocumentService {
    async execute({ title, content, id_project }: IDocumentRequest) {
        const documentsRepository = getCustomRepository(DocumentsRepository);

        const document = documentsRepository.create({
            title,
            content,
            id_project
        });

        await documentsRepository.save(document);

        return document;
    }
}

export { CreateDocumentService }