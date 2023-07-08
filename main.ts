import app from "./app";
import { connectToCluster } from "./database/mongo_db/connectToCluster";

const processPort = process.env.NODE_PORT || "3001";
const PORT = parseInt(processPort, 10);

const ENV = process.env.NODE_ENV || "development";

app.listen(PORT, async () => {
    // await connectToCluster();
    console.log(`App running in ${ENV} mode on port ${PORT}`);

});
