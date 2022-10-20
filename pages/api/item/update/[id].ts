import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from "../../../../utils/database";
import { ItemModel } from "../../../../utils/schemaModels";
import { ExtendedNextApiRequestItem, ResMessageType } from '../../../../utils/types';

const updateItem = async(req:ExtendedNextApiRequestItem, res:NextApiResponse<ResMessageType>) => {
  try {
    await connectDB();
    await ItemModel.updateOne({_id: req.query.id}, req.body)
    return res.status(200).json({message: "update Item!"}); 
  } catch (error) {  
    return res.status(400).json({message: "update Item failure..."});
  }
}
export default updateItem;