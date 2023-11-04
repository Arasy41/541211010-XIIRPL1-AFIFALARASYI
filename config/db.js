const mongoose = require("mongoose");

const connectDB = async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
  console.log("Database Connected!");
};

module.exports = connectDB;
