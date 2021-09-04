import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction
) {

    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }

    const [ , token] = authToken.split(" ");

    try{
        const { sub } = verify(token, "e0c702acb3d1a67dbdd366120ba4c291") as IPayload;

        request.user_id = sub;
        console.log(sub);

        return next();
    } catch(err) {
        return response.status(401).end();
    }
};