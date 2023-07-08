import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { ResponseHelper } from "../utils/ResponseHelper";

require("dotenv");

const authorization = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string | string[] = req.headers["token"];

        if (token) {

            jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

                if (!err) {

                    const user: any = decoded;

                    if (user && user.id) {

                        req.headers["user"] = user;
                        next();

                    } else {

                        return ResponseHelper.send_response(res, 401, {}, "Unauthorized");

                    }
                } else {

                    return ResponseHelper.send_response(res, 401, {}, "Unauthorized");

                }

            });
        } else {

            return ResponseHelper.send_response(res, 401, {}, "token is required");

        }
    } catch (e) {

        console.log(e);
        return ResponseHelper.send_response(res, 401, {}, "An error occurred");

    }
};

export { authorization };