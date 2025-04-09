import mongoose from "mongoose";

class Database {
  private dbUrl: string;

  constructor(dbUrl: string) {
    this.dbUrl = dbUrl;
  }

  async connect():Promise<void> {
    try {
      await mongoose.connect(this.dbUrl, { dbName: "job-service" });
      console.log("DB Connected");
    } catch (error) {
      console.log("DB Connection error");
      process.exit(1);
    }
  }

  async disconnect():Promise<void> {
    try {
        await mongoose.disconnect()
    } catch (error) {
        console.log("Error in disconnecting database",error);
        
    }
  }
}

export default Database;
