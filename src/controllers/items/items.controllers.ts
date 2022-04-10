import { Request, Response } from "express";

export const getAllItemsHandler = (req: Request, res: Response) =>
  res.send("It works");
export const createItemHandler = (req: Request, res: Response) =>
  res.send("It works");
export const deleteAllItemsHandler = (req: Request, res: Response) =>
  res.send("It works");
export const getOneItemHandler = (req: Request, res: Response) =>
  res.send("It works");
export const overrideOrCreateItemHandler = (req: Request, res: Response) =>
  res.send("It works");
export const updateItemHandler = (req: Request, res: Response) =>
  res.send("It works");
export const deleteItemByIdHandler = (req: Request, res: Response) =>
  res.send("It works");
