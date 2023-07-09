import { MongoClient } from "mongodb";

export let db;
export const connectToCluster = async () => {
    const uri = process.env.MONGO_DB_URI;
    const db_name = process.env.MONGO_DB_NAME;
    let mongoClient;

    try {
        mongoClient = new MongoClient(uri);
        console.log("Connecting to MongoDB Atlas cluster...");
        await mongoClient.connect();
        db = mongoClient.db(db_name);

        console.log("Successfully connected to MongoDB Atlas!");

        return mongoClient;
    } catch (error) {
        console.error("Connection to MongoDB Atlas failed!", error);
        process.exit();
    }
};


