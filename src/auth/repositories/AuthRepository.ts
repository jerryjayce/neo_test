import { db } from "../../../database/mongo_db/connectToCluster";


export class AuthRepository {

    static async get_user(email: string): Promise<any> {
        try {
            return db.collection("user").findOne({
                email: email
            });

        } catch (e) {
            console.log("error fetching user details", e);
        }

    }

}
