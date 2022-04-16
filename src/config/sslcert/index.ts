import { readFileSync } from "fs";
import path from "path";

const SSL_CERT_DIR: string = __dirname;

export const SSL_CREDENTIALS = {
  key: readFileSync(path.join(SSL_CERT_DIR, "app.key"), "utf8"),
  cert: readFileSync(path.join(SSL_CERT_DIR, "app.cert"), "utf8"),
};
