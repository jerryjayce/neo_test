import { Response, Request } from "express";
import { AuthService } from "../services";
import { ResponseHelper } from "../../utils/ResponseHelper";


export default class AuthController {

    static async login(req: Request, res: Response) {
        try {

            const data: any = await AuthService.login(req);

            return ResponseHelper.send_response(res, data?.http_status || 200, data.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {}, "An error occurred");
        }
    }
}
