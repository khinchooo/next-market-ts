import mongoose from "mongoose";
import { ItemDataType } from "./types";

const Schema = mongoose.Schema;

const ItemSchema = new Schema<ItemDataType>({
  title: String,
  image: String,
  price: String,
  description: String,
  email: String,
});
export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema);