import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../../../repositories/UsersRepostory"

class ListUserService {
    async execute() {
        const usersRepository = getCustomRepository(UsersRepository);

        const users = await usersRepository.find();

        return users;
    }
}

export { ListUserService }