import { NextFunction, Request, Response } from "express";
import { APP_PORT_SSL, ENFORCE_HTTPS } from "../configs/app.config";

export const enforceHTTPS = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Connected through secure protocol HTTPS:", req.secure);
  if (ENFORCE_HTTPS && !req.secure)
    // return res
    //   .status(400)
    //   .send("Please use HTTPS protocol instead at port " + APP_PORT_SSL);
    return res.redirect(
      `https://${req.headers.host}:${APP_PORT_SSL}${req.url}`
    );

  next();
};
