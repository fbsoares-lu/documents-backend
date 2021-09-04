import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AccessRepository } from "../modules/user/repositories/AccessRepository";
import { ProjectsRepository } from "../modules/user/repositories/ProjectsRepository";

export async function ensureUserPermissionToDocument(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { user_id } = request;
    const { id_project } = request.body;
    console.log(user_id);

    const accessRepository = getCustomRepository(AccessRepository);
    const projectRepository = getCustomRepository(ProjectsRepository);

    const userAcess = await accessRepository.findOne({id_project});
    
    if (!userAcess) {
        throw new Error("Access does not exists!");
    }

    const userIdProject = await projectRepository.findOneOrFail(id_project);

    if (userAcess.permission === false || (userIdProject.user_access = user_id)) {
        console.log(userAcess.permission);
        throw new Error("User does not permission!");
    }

    return next();
}