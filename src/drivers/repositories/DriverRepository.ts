import db from "../../../database/mysql/models";


export class DriverRepository {

    static async fetch_drivers(): Promise<any> {
        try {

            const model_config: any = {
                raw: true,
                order: [["createdAt", "DESC"]]
            };

            return await db.driver.findAll(model_config);

        } catch (e) {
            console.log("error fetching drivers", e);
        }

    }

}
