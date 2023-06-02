import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import config from "./Utils/Config";
import bankRouter from "./Routes/BankRoutes";
import connect from "./Utils/dalMongoDB";

// Create Server
const server = express();

// Handle CORS
server.use(cors());

//How we send the data back
server.use(express.json());

//Parse the body as JSON
server.use(bodyParser.json());

// How to use routes
server.use("/api/v1/mongoBank", bankRouter);

// Start the server
server.listen(config.webPort, () => {
  console.log(`listinging on http://${config.myHost}:${config.webPort}`);
  connect();
});
