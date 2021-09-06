import { getCustomRepository } from "typeorm";
import { ProjectsRepository } from "../../../repositories/ProjectsRepository";

interface IProjectRequest {
    name: string;
    project_id: string;
}

class AlterProjectService {
    async execute({ name, project_id}: IProjectRequest) {
        const projectRepository = getCustomRepository(ProjectsRepository);

        const project = await projectRepository.findOne(project_id);
        
        if (!project) {
            throw new Error("ID Project does not exists!");
        }

        project.name = name;

        await projectRepository.save(project);

        return project;
    }
}

export { AlterProjectService };