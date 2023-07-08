import db from "../../../database/mysql/models";
import { is_valid_date, get_beginning_of_week } from "../../utils/date_functions";
import { Op } from "sequelize";


export class ScheduleRepository {

    static async fetch_schedule(query: any = {}): Promise<any> {
        try {

            const model_config: any = {
                raw: true,
                where: {},
                order: [["createdAt", "DESC"]]
            };


            //if date is passed, query with that, else, query from start of week

            if (query.from && query.to && is_valid_date(query.from) && is_valid_date(query.to)) {

                const start_date = new Date(query.from);
                const end_date = new Date(query.to);

                // Set end_date to the end of the day
                end_date.setHours(23, 59, 59, 999);

                model_config.where.start_date = {
                    [Op.between]: [start_date, end_date]
                };
            } else {

                model_config.where.start_date = {
                    [Op.gte]: get_beginning_of_week()
                };

            }


            return await db.schedule.findAll(model_config);

        } catch (e) {
            console.log("error fetching schedules", e);
        }

    }

    static async fetch_schedule_details(params: any = {}): Promise<any> {
        try {

            const model_config: any = {
                raw: true,
                where: {
                    id: params.id
                },
            };

            return await db.schedule.findAll(model_config);

        } catch (e) {
            console.log("error fetching schedules", e);
        }

    }

    static async fetch_driver_schedule(query: any = {}, params: any): Promise<any> {
        try {

            const model_config: any = {
                raw: true,
                where: {
                    driver_id: params.id
                },
                order: [["createdAt", "DESC"]]
            };


            //if date is passed, query with that

            if (query.from && query.to && is_valid_date(query.from) && is_valid_date(query.to)) {

                const start_date = new Date(query.from);
                const end_date = new Date(query.to);

                // Set end_date to the end of the day
                end_date.setHours(23, 59, 59, 999);

                model_config.where.start_date = {
                    [Op.between]: [start_date, end_date]
                };
            }


            return await db.schedule.findAll(model_config);

        } catch (e) {
            console.log("error fetching schedules", e);
        }

    }

    static async fetch_vehicle_schedule(query: any = {}, params: any): Promise<any> {
        try {

            const model_config: any = {
                raw: true,
                where: {
                    vehicle_id: params.id
                },
                order: [["createdAt", "DESC"]]
            };


            //if date is passed, query with that

            if (query.from && query.to && is_valid_date(query.from) && is_valid_date(query.to)) {

                const start_date = new Date(query.from);
                const end_date = new Date(query.to);

                // Set end_date to the end of the day
                end_date.setHours(23, 59, 59, 999);

                model_config.where.start_date = {
                    [Op.between]: [start_date, end_date]
                };
            }


            return await db.schedule.findAll(model_config);

        } catch (e) {
            console.log("error fetching schedules", e);
        }

    }
}
