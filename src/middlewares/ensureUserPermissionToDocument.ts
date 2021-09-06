import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AccessRepository } from "../modules/user/repositories/AccessRepository";

export async function ensureUserPermissionToDocument(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const { user_id } = request;

    const accessRepository = getCustomRepository(AccessRepository);

    const userHasPermission = await accessRepository.findOne({ id_user: user_id});

    if (!userHasPermission) {
        throw new Error("User does not be in the project");
    }

    if (userHasPermission?.permission === false) {
        throw new Error("User does not permission!");
    }

    return next();
}