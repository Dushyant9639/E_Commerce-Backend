let express = require("express");
const signupController = require("../controllers/signup");
let signupRouter = express.Router();

signupRouter.post("/", signupController);

module.exports = signupRouter;
