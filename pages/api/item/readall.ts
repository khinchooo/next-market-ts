import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";
import { SavedItemDataType, ResReadAllType } from "../../../utils/types";

// type Data = {
//   message: string
//   allItems?: any
// }

const getAllItems = async(req: NextApiRequest, res: NextApiResponse<ResReadAllType>) => {
  try {
    await connectDB();
    const allItems: SavedItemDataType[] = await ItemModel.find();
    console.log(allItems);
    return res.status(200).json({message: "read all!", allItems: allItems});
  } catch (err) { 
    return res.status(400).json({message: "read all failure..."});
  }
}
export default getAllItems;