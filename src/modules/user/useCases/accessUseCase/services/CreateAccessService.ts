import { getCustomRepository } from "typeorm";
import { AccessRepository } from "../../../repositories/AccessRepository";

interface IUserAccessRequest {
    id_project: string;
    id_user: string;
    permission: boolean;
}

class CreateAccessService {
    async execute({ id_project, id_user, permission }: IUserAccessRequest) {
        const accessRepository = getCustomRepository(AccessRepository);

        const userAccess = accessRepository.create({
            id_project,
            id_user,
            permission
        });

        await accessRepository.save(userAccess);

        return userAccess;
    }
}

export { CreateAccessService };