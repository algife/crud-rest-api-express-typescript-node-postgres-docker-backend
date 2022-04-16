import cors from "cors";
import express, { Application } from "express";
import * as http from "http";
import * as https from "https";
import path from "path";
import APP_CONFIG from "./config/app.config";
import { SSL_CREDENTIALS } from "./config/sslcert";
import { enforceHTTPS } from "./middleware/enforce-https.middleware";
import routeValidationMiddleware from "./middleware/route-validation.middleware";
import apiV1Router from "./routes/api-v1.router";
import docsRouter from "./routes/docs.router";
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
  .use(APP_CONFIG.API_VERSION_PREFIX, apiV1Router);

// Run the server
// ! HTTP
const httpServer = http.createServer(app);
httpServer.listen(APP_CONFIG.PORT.HTTP, () =>
  console.log(
    `API SERVER RUNNING AT PORT http://${APP_CONFIG.APP_HOST}:${APP_CONFIG.PORT.HTTP}/`
  )
);

// ! HTTPS
const httpsServer = https.createServer(SSL_CREDENTIALS, app);
httpsServer.listen(APP_CONFIG.PORT.HTTPS, () =>
  console.log(
    `API SERVER RUNNING AT PORT https://${APP_CONFIG.APP_HOST}:${APP_CONFIG.PORT.HTTPS}/`
  )
);

export default app;
