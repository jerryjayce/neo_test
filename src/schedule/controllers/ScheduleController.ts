import { Response, Request } from "express";
import { ScheduleService } from "../services";
import { ResponseHelper } from "../../utils/ResponseHelper";


export default class ScheduleController {

    static async get_schedules(req: Request, res: Response) {
        try {

            const data: any = await ScheduleService.get_schedules();

            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
        }
    }
}
