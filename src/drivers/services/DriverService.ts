import { DriverRepository } from "../repositories";
import { ResponseHelper } from "../../utils/ResponseHelper";

export class DriverService {
    static async get_drivers(): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {

            const schedules = await DriverRepository.fetch_drivers();

            response.message = schedules.length === 0 ? "No driver available" : "successful";
            response.data = schedules;

            return response;

        } catch (e) {
            response.message = "An error occurred";
            response.http_status = 500;
            console.log("An error occurred", e);
        }
    }

}
