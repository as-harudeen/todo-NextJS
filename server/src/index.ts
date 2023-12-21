import { Bootstarp } from "./infrastructure/config/bootstrap";
import { Server } from "./infrastructure/webserver/server";
import dotenv from "dotenv";
dotenv.config();

const start = async () => {
  await Bootstarp.init();
  const app = Server.createServer();

  const port = process.env.PORT || 3002;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

start();
