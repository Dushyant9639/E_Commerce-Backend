const UserModel = require("../models/UserModel");
let bcrypt = require("bcrypt");
let salt_Rounds = Number(process.env.SALT_ROUNDS) || 10;
let signupController = async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (user) {
      res.status(409).json({ message: "User Already Exists, Please Login!!" });
    } else {
      let hashed = await bcrypt.hash(password, salt_Rounds);
      let newUser = await UserModel.create({ name, email, password: hashed });
      res.status(201).json({ message: "User Created Successfully!!", name:newUser.name, email: newUser.email });
    }
  } catch (error) {
    res.status(500).json({ message: "Error in Signup", error: error.message });
  }
};

module.exports = signupController;
