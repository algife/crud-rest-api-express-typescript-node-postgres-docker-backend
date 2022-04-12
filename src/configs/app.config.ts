export const API_VERSION_PREFIX: string = "/v1";
export const APP_HOST: string = "127.0.0.1";
export const APP_PORT_SSL: number = parseInt(
  process.env.API_SERVER_PORT_SECURE || "443",
  10
);
export const APP_PORT: number = parseInt(
  process.env.API_SERVER_PORT || "8080",
  10
);
export const ENFORCE_HTTPS: boolean = true;
