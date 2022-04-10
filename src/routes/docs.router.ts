import { Router } from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { PORT } from "../configs/app.config";

const swaggerDoc: swaggerUI.JsonObject = swaggerJsDoc({
  swaggerDefinition: {
    // openapi: "3.0.0",
    info: {
      title: "The Building blocks for the modern web and mobile",
      version: "0.0.1",
      description:
        "This is a REST API application made with Express. It retrieves data from third-party APIs and performs the most common tasks of enterprise-grade apps",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Alexandre Gimenez",
        url: "https://algife.com",
      },
      servers: [
        {
          url: "http://localhost:" + PORT,
          description: "Development server",
        },
      ],
    },
  },
  apis: [
    // Output Docs with JSDoc comments to auto-generate the API Documentation
    "src/app.ts",
    "src/routes/**/**.ts",
  ],
});

export const docsRouter: Router = Router();

docsRouter.use(
  "/docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDoc, { explorer: true })
);

export default docsRouter;
