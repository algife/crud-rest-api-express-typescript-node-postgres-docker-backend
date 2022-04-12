import { NextFunction, Request, Response } from "express";
import { ENFORCE_HTTPS } from "../configs/app.config";

export const enforceHTTPS = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (ENFORCE_HTTPS && !req.secure) {
    console.log("xxxxxx\r\nxxxxxxxxxx");
    return res.redirect("https://" + req.headers.host + req.url);
  }

  next();
};
