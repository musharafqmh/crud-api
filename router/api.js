const express = require("express")
const router = new express.Router()
const User = require("../database/User")



//Get Api Calling.........

router.get("/user", async (req, res) => {
    try {
        const getdata = await User.find({}).sort({ "ranking": 1 })
        res.status(201).send(getdata)
    } catch (e) {
        res.status(404).send(e)
    }
})


//get api call handle requst by one by one...........

router.get("/user/:id", async (req, res) => {
    try {

        const getdata = await User.findById({ _id })
        res.status(201).send(getdata)
    } catch (e) {
        res.status(404).send(e)
    }
})




//Post Api CAlling.............

router.post("/user", async (req, res) => {
    try {
        const user = new User(req.body)
        const result = await user.save()
        res.status(201).send(result)
    } catch (e) {
        res.status(404).send(e)
    }
})

// //Login

// router.post("/login", async (req, res) => {
//     try {
//         const email = req.body.email;
//         const password= req.body.password;
//         const useremail = await User.findOne({email:email});
//         if(useremail.password=== password){
//         res.status(201).render("index");
//     }else{
//         res.send("password are not matching");
//     }
//     } catch (error) {
//         res.status(404).send("invalid email")
//     }
// })


//upadate data by API............

router.patch("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const getdata = await User.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.status(201).send(getdata)
    } catch (e) {
        res.status(500).send(e)
    }
})


//Delete data by API............

router.delete("/user/:id", async (req, res) => {
    try {
        const getdata = await User.findByIdAndDelete(req.params.id)
        res.status(201).send(getdata)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router;