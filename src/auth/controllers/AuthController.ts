import { Response, Request } from "express";
import { AuthService } from "../services";
import { ResponseHelper } from "../../utils/ResponseHelper";


export default class AuthController {

    static async login(req: Request, res: Response) {
        try {

            const { email, password } = req.body;

            const data: any = await AuthService.login(email, password);

            return ResponseHelper.send_response(res, data?.http_status || 200, data.data);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {}, "An error occurred");
        }
    }
}
