import { Response, Request } from "express";
import { QuoteService } from "../services";
import { ResponseHelper } from "../../utils/ResponseHelper";


export default class QuoteController {

    static async update_quote(req: Request, res: Response) {
        try {

            const data: any = await QuoteService.update_quote(req);

            return ResponseHelper.send_response(res, data?.http_status || 200, data?.data, data?.message);

        } catch (e) {
            console.log(e);
            return ResponseHelper.send_response(res, 500, {}, "An error occurred");
        }
    }

}
