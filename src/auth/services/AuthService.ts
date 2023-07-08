import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthRepository } from "../repositories";
import { ResponseHelper } from "../../utils/ResponseHelper";

export class AuthService {
    static async login(email: string, password: string): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {

            const user_details = await AuthRepository.get_user(email);

            if (!user_details) {

                response.message = "Incorrect user name or password";
                response.http_status = 401;
                return response;

            }

            const check_pass = await bcrypt.compare(password, user_details.password);

            if (!check_pass) {
                response.message = "Incorrect user name or password";
                response.http_status = 401;
                return response;
            }


            //TODO remove sensitive data
            delete user_details.password;
            delete user_details.role;

            response.data = {
                user_details,
                token: await jwt.sign(
                    user_details,
                    process.env.JWT_SECRET
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

        // return this.adminRepository.getBestProfession(start, end);
    }

}
