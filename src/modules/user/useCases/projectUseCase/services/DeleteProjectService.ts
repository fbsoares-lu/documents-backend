import { getCustomRepository } from "typeorm";
import { ProjectsRepository } from "../../../repositories/ProjectsRepository";

class DeleteProjectService {
    async execute(id_project: string) {
        const projectsRepository = getCustomRepository(ProjectsRepository);

        const project = await projectsRepository.findOne(id_project);

        if (!project) {
            throw new Error("Product does not exists!");
        }

        await projectsRepository.delete(id_project);
    }
}

export { DeleteProjectService };