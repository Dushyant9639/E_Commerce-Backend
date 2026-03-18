let jwt = require("jsonwebtoken")

let authmiddleware = (req, res, next)=>{
    try{
        let token = req.headers.authorization.split(" ")[1]
        if(!token){
           return res.status(404).json({messgae:"Token Missing, Please Login First!!"})
        }else{
            let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.user = decoded
            next()
        }
    }catch(error){
        res.status(500).json({message:"Error in Authentication", error: error.message})
    }
}

module.exports = authmiddleware