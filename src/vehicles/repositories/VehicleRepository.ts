import db from "../../../database/mysql/models";


export class VehicleRepository {

    static async fetch_vehicles(): Promise<any> {
        try {

            const model_config: any = {
                raw: true,
                order: [["createdAt", "DESC"]]
            };

            return await db.vehicle.findAll(model_config);

        } catch (e) {
            console.log("error fetching vehicles", e);
        }

    }

}
