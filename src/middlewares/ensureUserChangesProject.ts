import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { ProjectsRepository } from '../modules/user/repositories/ProjectsRepository';

export async function ensureUserChangesProject(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { user_id } = request;
    const { project_id } = request.params;

    const projectsRepository = getCustomRepository(ProjectsRepository);

    const project = await projectsRepository.findOne(project_id);

    if (!project) {
        return response.status(401).json({ error: "Project not found"});
    }

    const userCreatedProject = project.user_access;
    console.log("Qual ta vindo do request: "+project_id);

    if (userCreatedProject != user_id) {
        return response.status(401).json({ error: "User does not have permission!"});
    }

    return next();
}