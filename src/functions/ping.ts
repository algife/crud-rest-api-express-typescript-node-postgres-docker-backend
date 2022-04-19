// GET /api/ping/
// -------------------------------

import { CONSTANTS_PING_MESSAGE } from "./_shared/_constants";

// Serverless Function published through Vercel for demo purposes
export default function handler(req: any, res: any) {
  res.status(200).json({
    message: CONSTANTS_PING_MESSAGE,
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
}
