let express = require("express")
const authmiddleware = require("../middlewares/authMiddleware")
const UserModel = require("../models/UserModel")
let profileRouter = express.Router()

profileRouter.get("/", authmiddleware, async (req, res)=>{
    try {
        let user = await UserModel.findById(req.user.userId).select("-password")
        res.status(200).json({message: "Profile fetched Successfully!!", user})
    }
     catch (error) {
        res.status(500).json({message: "Error in feching profile", error: error.message})
    }
})

module.exports = profileRouter