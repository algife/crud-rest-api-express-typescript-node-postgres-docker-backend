import express, { Application } from "express";
import { PORT } from "./configs/app.config";
const cors = require("cors");

const app: Application = express();

// ! MIDDLEWARES
// ! -----------
app
  .use(express.json()) // parse json request body
  .use(express.urlencoded({ extended: true })) // parse urlencoded request body
  .use(cors())
  .options("*", cors()); // enable cors

// ! API ROUTES
// ! -----------
app.get("/ping", (req, res) => res.send("pong"));

// Run the server
app.listen(PORT, () => console.log(`API SERVER RUNNING AT PORT ${PORT}`));

export default app;
