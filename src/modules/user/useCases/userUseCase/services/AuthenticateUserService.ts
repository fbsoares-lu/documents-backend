import { getCustomRepository } from "typeorm";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { UsersRepository } from "../../../repositories/UsersRepostory";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepository = getCustomRepository(UsersRepository);

        const user = await userRepository.findOne({ email });

        if (!user) {
            throw new Error("Email/Password incorrect");
        };

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        }, "e0c702acb3d1a67dbdd366120ba4c291", {
            subject: user.id,
            expiresIn: '1d'
        });
        
        return token;
    }
}

export { AuthenticateUserService }