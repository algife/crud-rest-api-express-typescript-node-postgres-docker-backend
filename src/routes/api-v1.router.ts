import { Request, Response, Router } from "express";
import APP_CONFIG from "../config/app.config";
import itemsRouter from "./items.router";

const apiV1Router = Router();

/**
 * @swagger
 * /v1:
 *   get:
 *     summary: Root endpoint
 *     description: Root endpoint that replies a JSON message saying the API is up and running.
 *     responses:
 *       200:
 *         description: Success
 */
apiV1Router.get("/", (req: Request, res: Response) =>
  res.json({
    message: `API Server up and running at ${APP_CONFIG.API_VERSION_PREFIX}`,
  })
);

apiV1Router.use(`/items`, itemsRouter);

export default apiV1Router;
