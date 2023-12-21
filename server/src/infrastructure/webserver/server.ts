import express, {json, urlencoded} from "express";
import cors from "cors";

export class Server {
  public static createServer() {
    const app = express();

    app.use(cors());
    app.use(json());
    app.use(urlencoded({extended: true}));

    //use route

    return app;
  }
}
