import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { ProjectsRepository } from "../modules/user/repositories/ProjectsRepository";

export async function ensureUserEnviteToProject(
    request: Request,
    response: Response,
    next: NextFunction
) {

    const { user_id } = request;
    const { id_project } = request.body;

    const projectsRepository = getCustomRepository(ProjectsRepository);

    const projectExists = await projectsRepository.findOne(id_project);

    if (projectExists?.user_access != user_id) {
        return response.status(401).json({ error: "User does not have permission!"});
    }

    return next();
    
}