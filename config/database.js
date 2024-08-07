import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      dbName: "ChatApp",
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database facing connection issue");
    console.log(error);
    process.exit(1);
  }
};

export {connectDB};

