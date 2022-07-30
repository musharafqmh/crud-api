const mongoose = require("mongoose")

const URI = "mongodb://127.0.0.1:27017/Comsat"

const connectToMongo = async () => {
  mongoose.connect(URI, () => {
    console.log("connected to mongoo-DB succesfully")
  })
};

module.exports = connectToMongo;
