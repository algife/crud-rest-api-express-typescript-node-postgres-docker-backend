// EXPRESS API SERVER (MONOLITH)
// -------------------------------
// Express-Node API Server published through Vercel for demo purposes
import cors from "cors";
import express, { Request, Response } from "express";
import { EXPRESSJS_API_SERVER } from "../_shared/_constants";
import productsRouter from "./_routes/products.router";

EXPRESSJS_API_SERVER.use(express.json()) // parse json request body
  .use(express.urlencoded({ extended: true })) // parse urlencoded request body
  // enable cors
  .use(cors());

// Static public folder at the Root level
// ! Automatically published by Vercel assets located at "public" folder
// EXPRESSJS_API_SERVER.use("/", express.static(path.join(__dirname, "public")));

EXPRESSJS_API_SERVER.use("/api/express-server/products", productsRouter);
EXPRESSJS_API_SERVER.get(
  "/api/express-server",
  (req: Request, res: Response) => {
    res.statusCode = 200;
    res.send(`Hello from API Express Server - NO PARAM`);
  }
);

export default EXPRESSJS_API_SERVER;
