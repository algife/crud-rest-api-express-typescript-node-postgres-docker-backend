// EXPRESS API ROUTER
// -------------------------------
// Express-Node API Router published through Vercel for demo purposes
import { EXPRESSJS_API_SERVER } from "../../_shared/_constants";
import productsRouter from "../_routes/products.router";

EXPRESSJS_API_SERVER.use("/api/express-server/products", productsRouter);

export default EXPRESSJS_API_SERVER;
