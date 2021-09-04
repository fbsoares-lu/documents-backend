import { getCustomRepository } from "typeorm";
import { ProjectsRepository } from "../repositories/ProjectsRepository";

class DeleteProjectService {
    async execute(id_project: string) {
        const projectsRepository = getCustomRepository(ProjectsRepository);

        await projectsRepository.delete(id_project);
    }
}

export { DeleteProjectService };