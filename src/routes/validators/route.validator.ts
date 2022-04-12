// ! Route Validation
// ! ----------------
import { Request } from "express";
import { Validator } from "express-json-validator-middleware";
import { idParamRequiredSchema } from "./schemas/id.schema";
import { itemBaseSchema, itemSchema } from "./schemas/item.schema";

const { validate } = new Validator({ verbose: true });

const isIdRequestValid = (req: Request): Boolean => {
  // check that the id match the body and the request param
  const cond = Boolean(
    req.params.id &&
      (!req.body || !req.body.id || req.body.id === req.params.id)
  );

  if (!cond)
    throw new Error(
      "There is a mismatch between the id of the body and the id of the URL parameters"
    );
  return cond;
};
export abstract class RouteValidator {
  static readonly createItem = validate({ body: itemSchema });
  static readonly getOneItem = validate({ params: idParamRequiredSchema });
  static readonly overrideOrCreateItem = validate({
    body: (req: Request) => isIdRequestValid(req) && itemSchema,
    params: idParamRequiredSchema,
  });
  static readonly updateItem = validate({
    body: (req: Request) => isIdRequestValid(req) && itemBaseSchema,
    params: idParamRequiredSchema,
  });
  static readonly deleteItemById = validate({ params: idParamRequiredSchema });
}
