const mongoose = require("mongoose");
const { connect } = require("mongoose");

async function connectDB(params) {
  const DB_URL = process.env.DB_URL;

  try {
    await mongoose.connect(DB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB ERROR", error);
  }
}

module.exports = connectDB;
