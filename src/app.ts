import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import * as http from "http";
import * as https from "https";
import path from "path";
import {
  API_VERSION_PREFIX,
  APP_HOST,
  APP_PORT,
  APP_PORT_SSL,
} from "./configs/app.config";
import { SSL_CREDENTIALS } from "./configs/ssl-cert.config";
import { enforceHTTPS } from "./middleware/enforce-https.middleware";
import routeValidationMiddleware from "./middleware/route-validation.middleware";
import docsRouter from "./routes/docs.router";
import itemsRouter from "./routes/items.router";
import rootRouter from "./routes/root.router";

const app: Application = express();

// ! MIDDLEWARES
app
  .use(enforceHTTPS)
  .use(express.json()) // parse json request body
  .use(express.urlencoded({ extended: true })) // parse urlencoded request body
  // enable cors
  .use(cors())
  // Set-up Route validation (Requests, ...)
  .use(routeValidationMiddleware);

// ! API ROUTES
app
  // Static public folder at the Root level
  .use("/", express.static(path.join(__dirname, "public")))
  .use("/docs", docsRouter)
  .use(`${API_VERSION_PREFIX}/items`, itemsRouter)
  .use(API_VERSION_PREFIX, rootRouter);

// Run the server
// ! HTTP
const httpServer = http.createServer(app);
httpServer.listen(APP_PORT, () =>
  console.log(`API SERVER RUNNING AT PORT http://${APP_HOST}:${APP_PORT}/`)
);

// ! HTTPS
const httpsServer = https.createServer(SSL_CREDENTIALS, app);
httpsServer.listen(APP_PORT_SSL, () =>
  console.log(`API SERVER RUNNING AT PORT https://${APP_HOST}:${APP_PORT_SSL}/`)
);

export default app;
