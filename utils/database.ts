import mongoose from "mongoose";

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb://root:password123@localhost:27017/next-market");
    console.log("success!");
  } catch (err) {
    console.log("error!");
  }
};
export default connectDB;