import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";
import { ResMessageType } from '../../../../utils/types';

const deleteItem = async(req:NextApiRequest, res:NextApiResponse) => {
  try {
    await connectDB();
    await ItemModel.deleteOne({_id: req.query.id});
    return res.status(200).json({message:"delete Item!"});
  } catch (error) {
    return res.status(400).json({message:"delete Item failure!"});
  }
}
export default deleteItem;