import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import { UsersRepository } from '../repositories/UsersRepostory';

interface IUserRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserServices {
    async execute({ name, email, password }: IUserRequest) {
        const userRepository = getCustomRepository(UsersRepository);

        const findUserWithSameEmail = await userRepository.findOne({
            email
        });

        if (findUserWithSameEmail) {
            throw new Error('User alredy Exists!');
        };

        const passwordHash = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: passwordHash
        });

        await userRepository.save(user);
        return user;
    }
}

export { CreateUserServices }