import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://dbAdminBerke:mXCSpT0BMvbaIOrh@cluster0.gidrncn.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};