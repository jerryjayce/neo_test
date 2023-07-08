import { Request } from "express";
import { ScheduleRepository } from "../repositories";
import { ResponseHelper } from "../../utils/ResponseHelper";

export class ScheduleService {
    static async get_schedules(req: Request): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {

            const schedules = await ScheduleRepository.fetch_schedule(req.query);

            response.message = schedules.length === 0 ? "No schedule available" : "successful";
            response.data = schedules;

            return response;

        } catch (e) {
            response.message = "An error occurred";
            response.http_status = 500;

            console.log("An error occurred", e);
            return response;
        }
    }

    static async get_schedule_details(req: Request): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {

            const schedules = await ScheduleRepository.fetch_schedule_details(req.params);

            response.message = schedules.length === 0 ? "Schedule not found" : "successful";
            response.data = schedules;

            return response;

        } catch (e) {
            response.message = "An error occurred";
            response.http_status = 500;

            console.log("An error occurred", e);
            return response;
        }
    }

    static async get_driver_schedule(req: Request): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {

            const schedules = await ScheduleRepository.fetch_driver_schedule(req.query, req.params);

            response.message = schedules.length === 0 ? "No schedule available" : "successful";
            response.data = schedules;

            return response;

        } catch (e) {
            response.message = "An error occurred";
            response.http_status = 500;

            console.log("An error occurred", e);
            return response;
        }
    }

    static async get_vehicle_schedule(req: Request): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {

            const schedules = await ScheduleRepository.fetch_vehicle_schedule(req.query, req.params);

            response.message = schedules.length === 0 ? "No schedule available" : "successful";
            response.data = schedules;

            return response;

        } catch (e) {
            response.message = "An error occurred";
            response.http_status = 500;

            console.log("An error occurred", e);
            return response;
        }
    }
}
