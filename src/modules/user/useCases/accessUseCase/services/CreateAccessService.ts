import { getCustomRepository } from "typeorm";
import { Request } from 'express';
import { AccessRepository } from "../../../repositories/AccessRepository";

interface IUserAccessRequest {
    id_project: string;
    id_user: string;
    permission: boolean;
    request: string;
}

class CreateAccessService {
    async execute({ id_project, id_user, permission, request }: IUserAccessRequest) {
        const accessRepository = getCustomRepository(AccessRepository);

        const userAuthenticatedId = request;

        if (userAuthenticatedId === id_user) {
            permission = true;
        }

        const userIdExists = await accessRepository.findOne({ id_user });

        if (userIdExists) {
            throw new Error("User id exists!");
        }

        const access = accessRepository.create({
            id_project,
            id_user,
            permission
        });

        await accessRepository.save(access);

        return access;
    }
}

export { CreateAccessService };