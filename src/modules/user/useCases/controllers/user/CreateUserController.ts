import { Request, Response } from "express";
import { CreateUserServices } from "../../services/user/CreateUserServices";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const createUserService = new CreateUserServices();

        const user = await createUserService.execute({name, email, password});

        return response.status(201).json(user);
    }
}

export { CreateUserController }