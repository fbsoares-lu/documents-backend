import { getCustomRepository } from "typeorm";
import { ProjectsRepository } from '../../../repositories/ProjectsRepository';
import { UsersRepository } from '../../../repositories/UsersRepostory';

interface IProjectRequest {
    name: string;
    user_access: string;
    id_access: string;
}

class CreateProjectService {
    async execute({ name, user_access, id_access }: IProjectRequest) {
        const projectsRepository = getCustomRepository(ProjectsRepository);
        const usersRepository = getCustomRepository(UsersRepository);

        const userCreateExists = await usersRepository.findOne(user_access);

        if (!userCreateExists) {
            throw new Error("User does not exists!");
        };

        const projectWithSameName = await projectsRepository.findOne({ name });

        if (projectWithSameName) {
            throw new Error("Could not create a project with the same name!");
        }

        const project = projectsRepository.create({
            name,
            user_access,
            id_access
        });

        await projectsRepository.save(project);

        return project;
    }
};

export { CreateProjectService };