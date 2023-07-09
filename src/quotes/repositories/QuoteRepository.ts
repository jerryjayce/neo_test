import { db } from "../../../database/mongo_db/connectToCluster";


export class QuoteRepository {

    static async fetch_quote(id: number): Promise<any> {
        try {

            return await db.collection("quotes").findOne({
                id: `${id}`
            });

        } catch (e) {
            console.log("error fetching quote", e);
        }

    }

    static async fetch_all_quote(): Promise<any> {
        try {

            return await db.collection("quotes").find().sort({ field: -1 }).toArray();

        } catch (e) {
            console.log("error fetching quote", e);
        }

    }

    static async update_quote(quote: object, id: number): Promise<any> {
        try {

            await db.collection("quotes").updateOne(
                { id: `${id}` },
                { $set: quote }
            );

        } catch (e) {
            console.log("error updating quote", e);
        }

    }


    // static async update_quote(quote: object, id: number): Promise<any> {
    //     try {
    //
    //         const filter = { id};
    //         const update = { $set: quote };
    //         const options = { returnDocument: 'after' };
    //
    //         console.log(filter, update, options);
    //         await db.collection("quotes").findOneAndUpdate(filter, update, options);
    //
    //     } catch (e) {
    //         console.log("error updating quote", e);
    //     }
    //
    // }


}
