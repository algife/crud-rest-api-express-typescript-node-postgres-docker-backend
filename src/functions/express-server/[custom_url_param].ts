// GET /api/:custom_url_param
// -------------------------------
// Serverless Function with URL params published through Vercel for demo purposes
// Check: https://blog.logrocket.com/serverless-deployments-vercel-node-js/

import { Request, Response } from "express";
import { EXPRESSJS_API_SERVER } from "../_shared/_constants";

// ! this kind of request should be deployed independently as /api/[foobar].js serverless function!
EXPRESSJS_API_SERVER.get(
  "/api/:custom_url_param",
  (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send(`Hello from API Express Server ${req.params.custom_url_param}`);
  }
);

export default EXPRESSJS_API_SERVER;
