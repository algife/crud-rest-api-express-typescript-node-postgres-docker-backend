import { NextFunction, Request, Response } from "express";
import APP_CONFIG from "../config/app.config";

export const enforceHTTPS = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Connected through secure protocol HTTPS:", req.secure);
  if (APP_CONFIG.ENFORCE_HTTPS && !req.secure)
    // return res
    //   .status(400)
    //   .send("Please use HTTPS protocol instead at port " + APP_CONFIG.PORT.HTTPS);
    return res.redirect(
      `https://${req.headers.host}:${APP_CONFIG.PORT.HTTPS}${req.url}`
    );

  next();
};
