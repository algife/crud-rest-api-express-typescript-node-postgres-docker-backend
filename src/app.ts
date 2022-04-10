import express, { Application } from "express";
import path from "path";
import { API_VERSION_PREFIX, PORT } from "./configs/app.config";
import docsRouter from "./routes/docs.router";
import itemsRouter from "./routes/items.router";
import rootRouter from "./routes/root.router";
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
app
  // Static public folder at the Root level
  .use("/", express.static(path.join(__dirname, "public")))
  .use("/docs", docsRouter)
  .use(`${API_VERSION_PREFIX}/items`, itemsRouter)
  .use(API_VERSION_PREFIX, rootRouter);

// Run the server
app.listen(PORT, () => console.log(`API SERVER RUNNING AT PORT ${PORT}`));

export default app;
