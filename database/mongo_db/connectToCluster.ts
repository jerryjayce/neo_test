import { MongoClient } from "mongodb";
import { config } from "dotenv";
import mongo_config from "./config.js";


config();

export let db;
export const connectToCluster = async () => {
    const uri = mongo_config.MONGO_DB_URI;
    const db_name = mongo_config.MONGO_DB_NAME;
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


