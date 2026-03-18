let express = require("express")
const login = require("../controllers/login")
let loginRouter = express.Router()

loginRouter.post("/", login)

module.exports = loginRouter