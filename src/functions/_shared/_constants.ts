// SHARED LIBRARY NOT EXPOSED THROUGH VERCEL
// -------------------------------

import express, { Application } from "express";

export const CONSTANTS_PING_MESSAGE = "bar";
export const EXPRESSJS_API_SERVER: Application = express();
