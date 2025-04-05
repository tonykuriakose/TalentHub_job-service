import Server from "./app/express";

const PORT = process.env.PORT || 3003;

const expressServer = new Server();
expressServer.start(PORT);
