"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testFn = void 0;
const format_json_response_1 = require("@libs/format-json-response");
const testFn = async (event) => {
  return (0, format_json_response_1.formatJSONResponse)({
    message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    event,
  });
};
exports.testFn = testFn;
