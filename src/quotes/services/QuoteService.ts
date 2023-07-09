import { QuoteRepository } from "../repositories";
import { ResponseHelper } from "../../utils/ResponseHelper";
import { Request } from "express";

export class QuoteService {
    static async update_quote(req: Request): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {
            const fetch_quote = await QuoteRepository.fetch_quote(parseInt(req.params?.id));

            if (!fetch_quote?.id) {
                response.message = "No quote with such id";
                response.data = {};
                response.http_status = 404;
                return response;
            }

            await QuoteRepository.update_quote(req.body, parseInt(req.params?.id));


            response.message = "Quote updated successfully";
            response.data = {};

            return response;

        } catch (e) {
            response.message = "An error occurred";
            response.http_status = 500;

            console.log("An error occurred", e);
            return response;
        }
    }

    static async get_quote(): Promise<object> {

        const response: any = ResponseHelper.response_object();

        try {
            const all_quotes = await QuoteRepository.fetch_all_quote();

            console.log({all_quotes});

            if (!all_quotes?.length) {
                response.message = "Quotes not available";
                response.data = {};
                response.http_status = 200;
                return response;
            }

            response.message = "successful";
            response.data = all_quotes;

            return response;

        } catch (e) {
            response.message = "An error occurred";
            response.http_status = 500;

            console.log("An error occurred", e);
            return response;
        }
    }


}
