import { VehicleRepository } from "../repositories";
import { ResponseHelper } from "../../utils/ResponseHelper";

export class VehicleService {
    static async get_vehicles(): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {

            const schedules = await VehicleRepository.fetch_vehicles();

            response.message = schedules.length === 0 ? "No vehicle available" : "successful";
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
