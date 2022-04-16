import { Router, Request, Response } from "express";
import APP_CONFIG from "../config/app.config";

const rootRouter = Router();

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
rootRouter.get("/", (req: Request, res: Response) =>
  res.json({
    message: `API Server up and running at ${APP_CONFIG.API_VERSION_PREFIX}`,
  })
);

export default rootRouter;
