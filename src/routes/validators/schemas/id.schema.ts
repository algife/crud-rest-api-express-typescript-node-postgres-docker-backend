import { JSONSchema7, JSONSchema7Definition } from "json-schema";

export const idPropertySchema: JSONSchema7Definition = {
  type: "string",
  // uuid
  minLength: 36,
  maxLength: 36,
};

export const idParamRequiredSchema: JSONSchema7 = {
  type: "object",
  required: ["id"],
  properties: {
    id: idPropertySchema,
  },
};
