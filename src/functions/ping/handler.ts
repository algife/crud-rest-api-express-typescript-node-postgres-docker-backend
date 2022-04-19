// import { formatJSONResponse } from "../../libs/format-json-response";

export const handler = (_req: any, _res: any) => {
  return _res.json({ foo: "bar" });
  // return formatJSONResponse({
  //   message: `It works!`,
  // });
};
