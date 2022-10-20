import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";
import { ResReadSingleType, SavedItemDataType } from "../../../utils/types";

const getSingleItem = async(req:NextApiRequest, res:NextApiResponse<ResReadSingleType>) => {
  try {
    await connectDB();
    const singleItem: SavedItemDataType | null = await ItemModel.findById(req.query.id);
    if (singleItem) {
      return res.status(200).json({message: "read single!", singleItem: singleItem});
    }
  } catch (error) {
    return res.status(400).json({message: "read single failure..."});
  }
}
export default getSingleItem;