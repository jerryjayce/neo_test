import { Response, Request } from "express";
import { DriverService } from "../services";
import { ResponseHelper } from "../../utils/ResponseHelper";


export default class DriverController {

    static async get_drivers(req: Request, res: Response) {
        try {

            const data: any = await DriverService.get_drivers();

            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {}, "An error occurred");
        }
    }

}
