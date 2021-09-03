import { getCustomRepository } from "typeorm";
import { AccessRepository } from "../repositories/AccessRepository";

class ListAccessService {
    async execute() {
        const accessRepository = getCustomRepository(AccessRepository);

        const access = await accessRepository.find();

        return access;
    }
}

export { ListAccessService };