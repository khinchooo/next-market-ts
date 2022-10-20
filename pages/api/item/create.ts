import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";
import { ExtendedNextApiRequestItem, ResMessageType } from "../../../utils/types";

const CreateItem = async(req: ExtendedNextApiRequestItem, res: NextApiResponse<ResMessageType>) => {
  try {
    connectDB();
    console.log(req.body);
    await ItemModel.create(req.body);
    return res.status(200).json({message: "create item"});
  } catch (err) {  
    console.log(err);
    return res.status(400).json({message: "create item failure"});
  }
};
export default CreateItem;