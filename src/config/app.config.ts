interface AppConfig {
  API_VERSION_PREFIX: string;
  APP_HOST: string;
  PORT: {
    HTTPS: number;
    HTTP: number;
  };
  ENFORCE_HTTPS: boolean;
}

const APP_CONFIG: AppConfig = {
  API_VERSION_PREFIX: "/v1",
  APP_HOST: "127.0.0.1",
  PORT: {
    HTTPS: parseInt(process.env.API_SERVER_PORT_SECURE || "443", 10), // HTTPS
    HTTP: parseInt(process.env.API_SERVER_PORT || "80", 10), // HTTP
  },
  ENFORCE_HTTPS: true,
};

export default APP_CONFIG;
