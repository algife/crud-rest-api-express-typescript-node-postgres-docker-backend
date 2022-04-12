import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { APP_HOST, APP_PORT_SSL } from "../configs/app.config";

export const swaggerDoc: swaggerUI.JsonObject = swaggerJsDoc({
  swaggerDefinition: {
    // openapi: "3.0.0",
    info: {
      title: "CRUD REST API",
      version: "0.0.1",
      description:
        "CRUD REST API that performs the common tasks that the average enterprise-grade or start-up might need",
      license: {
        name: "Licensed Under MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Author's Website",
        url: "https://algife.com",
      },
      servers: [
        {
          url: `https://${APP_HOST}:${APP_PORT_SSL}`,
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
