import path from "path";

export const API_VERSION_PREFIX: string = "/v1";
export const APP_HOST: string = "0.0.0.0";
export const APP_PORT: number = parseInt(
  process.env.API_SERVER_PORT || "3000",
  10
);
