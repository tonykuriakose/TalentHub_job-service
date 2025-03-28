import Server from "./app/express";












const PORT = process.env.PORT || 3002;

const expressServer = new Server();
expressServer.start(PORT);
