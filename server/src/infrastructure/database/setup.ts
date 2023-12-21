import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

export class DBSetup {
  public static async connectDB() {
    try {
      const mongo = await MongoMemoryServer.create();
      const mongoUri = mongo.getUri();

      const con = await mongoose.connect(mongoUri, {});

      console.log(`[database] Database connected ${con.connection.host}`);
    } catch (err) {
      console.log(`[databasee] Error while trying to connect with db`);
      console.log(err);
      process.exit(1);
    }
  }
}
