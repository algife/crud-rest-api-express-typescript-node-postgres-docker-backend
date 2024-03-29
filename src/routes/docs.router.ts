import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import { swaggerDoc } from "../config/swagger.config";

const docsRouter: Router = Router();

docsRouter.use(
  "/",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDoc, { explorer: true })
);

export default docsRouter;
