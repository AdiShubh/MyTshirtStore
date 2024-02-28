import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.DataBase_URL);
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
};

export default ConnectDB;
