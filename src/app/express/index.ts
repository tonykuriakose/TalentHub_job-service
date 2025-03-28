import express, { Application } from "express";

class Server {
  public app: Application;
  private server: any;

  constructor() {
    this.app = express();
    this.initialize();
  }

  async initialize() {
    try {
      console.log("Initializing server...");
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  }

  start(PORT: string | number) {
    this.server = this.app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
}

export default Server;
