import { Request, Response } from "express";
import { FindOptionsWhere } from "typeorm";
import { HttpStatusCode } from "../../helpers/http-status-code";
import { Item } from "../../models/entity/item";
import databaseService from "../../services/database.service";

export const getAllItemsHandler = async (req: Request, res: Response) => {
  const items = await databaseService.itemsRepo.find(); // We want them all

  // NO CONTENT RESPONSE
  if (!items || items.length === 0)
    return res.sendStatus(HttpStatusCode.NO_CONTENT);

  // items found
  return res.json(items);
};

export const createItemHandler = async (req: Request, res: Response) => {
  try {
    const payload: Item = req.body;

    // invalid request
    if (
      !payload ||
      Object.keys(payload).length === 0 ||
      // id is created at the DB level once the resource is created
      payload.id
    )
      return res.sendStatus(HttpStatusCode.BAD_REQUEST);

    // created
    const item = await databaseService.itemsRepo.create(payload);
    const result = await databaseService.itemsRepo.save(item);

    return res.status(HttpStatusCode.CREATED).json(result);
  } catch (err) {
    return res.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
  }
};

export const getOneItemHandler = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  // Invalid request
  if (!id) return res.sendStatus(HttpStatusCode.BAD_REQUEST);

  const findConditions: FindOptionsWhere<Item> = { id: id };
  const item = await databaseService.itemsRepo.findOneBy(findConditions);

  // not found response
  if (!item) return res.status(HttpStatusCode.NOT_FOUND).json(null);

  // found
  return res.json(item);
};

export const getManyItemsHandler = async (req: Request, res: Response) => {
  async (req: Request, res: Response) => {
    const findConditions: FindOptionsWhere<Item> = req.body || {};

    // Invalid request
    if (!findConditions || Object.keys(findConditions).length === 0)
      return res.sendStatus(HttpStatusCode.BAD_REQUEST);

    const item = await databaseService.itemsRepo.findBy(findConditions);

    // not found response
    if (!item) return res.status(HttpStatusCode.NOT_FOUND).json(null);

    // found
    return res.json(item);
  };
};
export const overrideOrCreateItemHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const payload: Item = req.body;
    const id: string = req.params.id;

    // invalid request
    if (
      !payload ||
      Object.keys(payload).length === 0 ||
      // enforce payload.id to be equal to id (if exists)
      (payload.id && payload.id !== id)
    )
      return res.sendStatus(HttpStatusCode.BAD_REQUEST);

    const now: Date = new Date();

    const found = await databaseService.itemsRepo.findOneBy({ id });

    // Override the whole object if exists or create It
    const item = {
      ...payload,
      // make sure some properties are preserved
      id,
      updated_at: found?.updated_at || now,
      created_at: found?.created_at || now,
    };
    const result = await databaseService.itemsRepo.save(item);

    if (result) return res.json(result);
  } catch (err) {
    console.error(err);
  }
  return res.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
};

export const updateItemHandler = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const id: string = req.params.id;

    // invalid request
    if (
      !payload ||
      Object.keys(payload).length === 0 ||
      // enforce payload.id to be equal to id (if exists)
      (payload.id && payload.id !== id)
    )
      return res.sendStatus(HttpStatusCode.BAD_REQUEST);

    // updated or created
    const found = await databaseService.itemsRepo.findOneBy({ id });

    if (!found) return res.sendStatus(HttpStatusCode.NOT_FOUND);

    // updated/merged
    const item = await databaseService.itemsRepo.merge(found, payload);
    const result = await databaseService.itemsRepo.save(item);

    if (result) return res.json(result);
  } catch (err) {
    console.error(err);
  }
  return res.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
};

export const deleteItemByIdHandler = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  const deleted = await databaseService.itemsRepo.delete({ id });

  if (!deleted) return res.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);
  else if (deleted?.affected === 1) return res.json([id]);
  else return res.sendStatus(HttpStatusCode.NOT_FOUND);
};

export const deleteAllItemsHandler = async (req: Request, res: Response) => {
  const ids = ((await databaseService.itemsRepo.find()) || []).map(
    (item: Item) => item.id
  );
  const deleted = await databaseService.itemsRepo.delete({});

  if (ids.length === 0 || !deleted || deleted.affected == null)
    return res.sendStatus(HttpStatusCode.INTERNAL_SERVER_ERROR);

  if (deleted.affected > 0) return res.json(ids);
  else return res.sendStatus(HttpStatusCode.NOT_FOUND);
};
