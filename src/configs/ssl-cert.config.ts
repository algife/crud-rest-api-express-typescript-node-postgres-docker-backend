import { readFileSync } from "fs";
import path from "path";

export const SSL_CERT_DIR: string = path.join(__dirname, "../", "sslcert");

export const SSL_CREDENTIALS = {
  key: readFileSync(path.join(SSL_CERT_DIR, "app.key"), "utf8"),
  cert: readFileSync(path.join(SSL_CERT_DIR, "app.cert"), "utf8"),
};
