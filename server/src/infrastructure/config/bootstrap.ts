import { DBSetup } from "../database/setup";

export class Bootstarp {
  public static async init() {
    await DBSetup.connectDB();
  }
}
