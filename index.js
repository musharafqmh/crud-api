const express = require("express")
const app = express()
const connectToMongo = require("./db")
const User = require("./database/User")
const router = require("./router/api")

//show in the json formate data............
app.use(express.json())


//Server Port
const port = 7000

//Using mongo Connecting.....
connectToMongo()

//Api calling method........
app.use(router)

// //Genrating token 
// const jwt = require("jsonwebtoken")
// const createToken = async () => {
//   const token = await jwt.sign({ _id: "61cde65c31ffc9459e70e3e0" }, "a"
//   )
//   console.log("Gentraing token a unique identy =>", token)
//   const userver = await jwt.verify(token, "a")
//   console.log(userver)
// }
// createToken()



//Server creating............
app.listen(port, () => {
  console.log(` App listening at http://localhost:${port}`)
});
