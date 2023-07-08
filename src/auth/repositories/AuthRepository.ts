import db from "../../../database/mysql/models";


export class AuthRepository {

    static async fetch_user(email: string): Promise<any> {
        try {
            return db.user.findOne({
                raw: true,
                where: {
                    email: email
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            });

        } catch (e) {
            console.log("error fetching user details", e);
        }

    }

}
