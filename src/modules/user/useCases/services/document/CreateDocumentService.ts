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
        // const projectRepository = getCustomRepository(ProjectsRepository);

        // const project = await projectRepository.findOne(id_project);
        
        // const userGuest = project?.id_access === "1be94cf6-dbc0-4147-b8c2-36ec741c001b";

        // if (userGuest) {

        // }

        const document = documentsRepository.create({
            title,
            content,
            id_project
        });

        return document;
    }
}

export { CreateDocumentService }