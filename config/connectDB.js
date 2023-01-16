const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://radhi:radhi123@cluster0.say3u17.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("db is connected");
  } catch (error) {
    console.log("db is not connected");
  }
};
module.exports = connectDB;
