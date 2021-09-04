import { getCustomRepository } from "typeorm";
import { ProjectsRepository } from "../../../repositories/ProjectsRepository";

interface IProjectRequest {
    name: string;
    project_id: string;
}

class AlterProjectService {
    async execute({ name, project_id}: IProjectRequest) {
        const projectRepository = getCustomRepository(ProjectsRepository);
        console.log("veio: "+ project_id);
        const project = await projectRepository.findOneOrFail(project_id);
        console.log("id: "+project.id);

        project.name = name;

        await projectRepository.save(project);

        return project;
    }
}

export { AlterProjectService };