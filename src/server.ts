import { config } from "dotenv";
import Server from "./app/express";
import Database from "./core/database";
config();


const db = new Database(process.env.DATABASE_URL as string);



db.connect();









const PORT = process.env.PORT || 3003;

const expressServer = new Server();
expressServer.start(PORT);
