import { getCustomRepository } from "typeorm";
import { ProjectsRepository } from "../repositories/ProjectsRepository";

class ListProjectService {
    async execute() {
        const projectsRepository = getCustomRepository(ProjectsRepository);

        const products = await projectsRepository.find();

        return products;
    }
}

export { ListProjectService };