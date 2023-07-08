import express, { Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./src/routes";


dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());


app.use("/", Routes);

function error404(req: Request, res: Response) {
    return res.status(404).send({
        success: false,
        message: "Invalid URL"
    });
}

app.use(error404);

export default app;
