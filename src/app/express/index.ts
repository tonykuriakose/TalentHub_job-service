import express, { Application,Request,Response } from "express";

class Server {
  public app: Application;
  private server: any;

  constructor() {
    this.app = express();
    this.initialize();
    this.setUpRoutes();
  }

  async initialize() {
    try {
      console.log("Initializing server");
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  }

  private setUpRoutes(){
    this.app.get("/",(req: Request,res: Response)=>{
      res.status(200).json({ message:"Job API is working"})
    })
  }

  start(PORT: string | number) {
    this.server = this.app.listen(PORT, () => {
      console.log(`Job Server running on ${PORT}`);
    });
  }
}

export default Server;
