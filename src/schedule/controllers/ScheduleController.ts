import { Response, Request } from "express";
import { ScheduleService } from "../services";
import { ResponseHelper } from "../../utils/ResponseHelper";


export default class ScheduleController {

    static async get_schedules(req: Request, res: Response) {
        try {

            const data: any = await ScheduleService.get_schedules(req);

            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {}, "An error occurred");
        }
    }

    static async get_schedule_details(req: Request, res: Response) {
        try {

            const data: any = await ScheduleService.get_schedule_details(req);

            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {}, "An error occurred");
        }
    }

    static async get_driver_schedule(req: Request, res: Response) {
        try {

            const data: any = await ScheduleService.get_driver_schedule(req);

            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {}, "An error occurred");
        }
    }

    static async get_vehicle_schedule(req: Request, res: Response) {
        try {

            const data: any = await ScheduleService.get_vehicle_schedule(req);

            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {}, "An error occurred");
        }
    }
}
