import { ScheduleRepository } from "../repositories";
import { ResponseHelper } from "../../utils/ResponseHelper";

export class ScheduleService {
    static async get_schedules(): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {

            const schedules = await ScheduleRepository.fetch_schedule();

            response.message = schedules.length === 0 ? "No schedule available" : "successful";
            response.data = schedules;

            return response;

        } catch (e) {
            response.message = "An error occurred";
            response.http_status = 500;
            console.log("An error occurred", e);
        }
    }
}
