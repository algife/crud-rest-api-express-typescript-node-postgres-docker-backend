import { Router } from "express";
import {
  createItemHandler,
  deleteAllItemsHandler,
  deleteItemByIdHandler,
  getAllItemsHandler,
  getOneItemHandler,
  overrideOrCreateItemHandler,
  updateItemHandler,
} from "../controllers/items/items.controllers";

const itemsRouter = Router()
  .get("/", getAllItemsHandler)
  .post("/", createItemHandler)
  .delete("/", deleteAllItemsHandler)
  .get("/:id", getOneItemHandler)
  .put("/:id", overrideOrCreateItemHandler)
  .patch("/:id", updateItemHandler)
  .delete("/:id", deleteItemByIdHandler);

export default itemsRouter;
