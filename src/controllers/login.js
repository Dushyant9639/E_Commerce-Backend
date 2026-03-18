let bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");
let jwt = require("jsonwebtoken");
let login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found!!" });
    } else {
      let isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid Password" });
      } else {
        let access_Token = jwt.sign(
          { userId: user._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "7d" },
        );
        let refresh_Token = jwt.sign(
          { userId: user._id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "15m" },
        );
        res.status(200).json({
          message: "Login Successfully!!",
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
          access_Token,
          refresh_Token,
        });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Error in Login", error: error.message });
  }
};

module.exports = login