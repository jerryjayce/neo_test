import db from "../../../database/mysql/models";


export class ScheduleRepository {

    static async fetch_schedule(): Promise<any> {
        try {
            return await db.schedule.findAll({
                raw: true
            });

        } catch (e) {
            console.log("error fetching schedules", e);
        }

    }
}
