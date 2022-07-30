const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
  name: String,
  ranking: String,
  lastName: String,
  userName: String,
  email: String,
  password: String
});

module.exports = mongoose.model("users", userschema);
