import { NextFunction, Request, Response } from "express";
import { ValidationError } from "express-json-validator-middleware";
import HttpStatusCode from "../helpers/http-status-code";

/**
 * Error handler middleware for validation errors.
 */
const routeValidation = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Check the error is a validation error
  if (err instanceof ValidationError) {
    // Handle the error
    res.status(HttpStatusCode.BAD_REQUEST).json({
      message: "There are VALIDATION ERRORS in the request or the response",
      errors: err.validationErrors?.body,
    });
    next();
  } else {
    // Pass error on if not a validation error
    next(err);
  }

  // TODO Improve using Swagger Documentation for Validation (swagger-express-validator)
  // validator(swaggerValidationOptions);
  // next();
};

export default routeValidation;
