import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRepository } from "../repositories";
import { ResponseHelper } from "../../utils/ResponseHelper";
import { Request } from "express";

export class AuthService {
    static async login(req: Request): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {

            const { email, password } = req.body;
            const user = await AuthRepository.fetch_user(email);


            if (!user) {

                response.message = "Incorrect user name or password";
                response.http_status = 401;
                return response;

            }

            const check_pass = await bcrypt.compare(password, user.password);

            if (!check_pass) {
                response.message = "Incorrect user name or password";
                response.http_status = 401;
                return response;
            }


            //TODO remove sensitive data
            delete user.password;

            response.data = {
                user,
                token: await jwt.sign(
                    user,
                    process.env.JWT_SECRET,
                    { expiresIn: '1d' }
                )
            };

            response.message = "login successful";
            return response;

        } catch (e) {
            response.message = "An error occurred during login";
            response.http_status = 500;

            console.log("An error occurred during login", e);
            return response;
        }
    }

}
