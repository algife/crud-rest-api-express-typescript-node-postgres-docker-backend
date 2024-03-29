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
import { RouteValidator } from "./validators/route.validator";

const itemsRouter = Router();

/**
 * @swagger
 * /v1/items:
 *   get:
 *     summary: Get all Items
 *     description: Get a list containing all Items sorted by prop1
 *     parameters:
 *       - in: query
 *         name: asc
 *         schema:
 *           type: boolean
 *           allowEmptyValue: true
 *           default: false
 *           nullable: true
 *           description: if true, the endpoint returns the results sorted by ascending order, from smaller to greater. Otherwise, it returns result descending order by default.
 *     responses:
 *       200:
 *         description: Success. It returns a list of Items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: The item ID.
 *                         example: '135d4c08-d093-4616-91c5-f00bef3015af'
 *                       prop1:
 *                         type: string
 *                         description: The Item's property 1
 *                         example: 'cross-platform strategy fault-tolerant Wisconsin Industrial proactive'
 *                         minLength: 20
 *                         maxLength: 85
 *                       prop2:
 *                         type: number
 *                         format: float
 *                         minimum: 1.0
 *                         maximum: 12345678.95
 *                         exclusiveMinimum: false
 *                         exclusiveMaximum: false
 *                         description: The Item's property 2
 *                         example: 21141.55
 *   post:
 *     summary: Creates an item
 *     description: Creates an item
 *     responses:
 *       200:
 *         description: Success.
 *   delete:
 *     summary: Deletes all the items
 *     description: Deletes all the items
 *     responses:
 *       200:
 *         description: Success.
 *
 * /v1/items/:itemId:
 *   get:
 *     summary: Gets an item by Id
 *     description: Gets a specific item by Id
 *     responses:
 *       200:
 *         description: Success.
 *   put:
 *     summary: Updates or creates (Upsert) an item
 *     description: Updates an item by itemId or creates the item if does not exists (upsert)
 *     responses:
 *       200:
 *         description: Success.
 *   patch:
 *     summary: Updates PARTIALLY an item (just some fields)
 *     description: Updates PARTIALLY an item (just some fields)
 *     responses:
 *       200:
 *         description: Success.
 *   delete:
 *     summary: Deletes an item by itemId
 *     description: Deletes an item by itemId
 *     responses:
 *       200:
 *         description: Success.
 */
itemsRouter
  .get("/", getAllItemsHandler)
  .post("/", RouteValidator.createItem, createItemHandler)
  .delete("/", deleteAllItemsHandler)
  .get("/:id", RouteValidator.getOneItem, getOneItemHandler)
  .put("/:id", RouteValidator.overrideOrCreateItem, overrideOrCreateItemHandler)
  .patch("/:id", RouteValidator.updateItem, updateItemHandler)
  .delete("/:id", RouteValidator.deleteItemById, deleteItemByIdHandler);

export default itemsRouter;
