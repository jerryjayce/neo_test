import { Response, Request } from "express";
import { VehicleService } from "../services";
import { ResponseHelper } from "../../utils/ResponseHelper";


export default class VehicleController {

    static async get_vehicles(req: Request, res: Response) {
        try {

            const data: any = await VehicleService.get_vehicles();

            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
        }
    }

}
