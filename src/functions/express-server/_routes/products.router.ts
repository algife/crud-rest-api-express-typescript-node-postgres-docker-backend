import { Router } from "express";

const productsRouter: Router = Router();

productsRouter.get("/", (req, res) => {
  res.send("from products router");
});

export default productsRouter;
