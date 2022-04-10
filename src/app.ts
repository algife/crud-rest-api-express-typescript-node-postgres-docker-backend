import express, { Application } from "express";
import path from "path";
import { API_VERSION_PREFIX, PORT } from "./configs/app.config";
import itemsRouter from "./routes/items.router";
import rootRouter from "./routes/root.router";
import docsRouter from "./routes/docs.router";
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
  /**
   * @swagger
   * /v1/ping:
   *   get:
   *     summary: Replies "pong"
   *     responses:
   *       200:
   *         description: Success.
   *
   */
  .get("/ping", (req, res) => res.send("pong"))
  // Static public folder at the Root level
  .use("/", express.static(path.join(__dirname, "public")))
  .use(docsRouter) // Set-up swagger for documentation
  .use(`${API_VERSION_PREFIX}/items`, itemsRouter)
  .use(API_VERSION_PREFIX, rootRouter);

// Run the server
app.listen(PORT, () => console.log(`API SERVER RUNNING AT PORT ${PORT}`));

export default app;
