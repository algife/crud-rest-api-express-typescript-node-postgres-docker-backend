// import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
// import schema from "./schema";
// import { middyfy } from "@libs/lambda";
import { formatJSONResponse } from "@libs/format-json-response";

export const testFn = async (event: any) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};

// const handler = middyfy(hello);

// export default handler;
