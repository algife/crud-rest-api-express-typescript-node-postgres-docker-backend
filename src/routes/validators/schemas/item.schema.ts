import { JSONSchema7 } from "json-schema";
import { idPropertySchema } from "./id.schema";

export const itemBaseSchema: JSONSchema7 = {
  type: "object",
  properties: {
    id: idPropertySchema,
    p1: {
      type: "string",
    },
    p2: {
      type: "number",
    },
  },
};

export const itemSchema: JSONSchema7 = {
  ...itemBaseSchema,
  required: ["p1", "p2"],
};
