import { Types } from "mongoose";
import { NextApiRequest } from "next";

export interface ItemDataType {
  title: string,
  image: string,
  price: string,
  description: string,
  email: string,
}

export interface ResMessageType {
  message: string
}

// readAll.ts
export interface SavedItemDataType extends ItemDataType {
  _id: Types.ObjectId
}

export interface ResReadAllType extends ResMessageType {
  allItems?: SavedItemDataType[]
}

// [id].ts
export interface ResReadSingleType extends ResMessageType {
  singleItem?: SavedItemDataType
}

// create.ts
export interface ExtendedNextApiRequestItem extends NextApiRequest {
  body: ItemDataType
}

