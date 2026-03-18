require("dotenv").config();
let express = require("express");
const connectDB = require("./configs/db");
const signupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const profileRouter = require("./routes/profile");
let app = express();
let PORT = process.env.PORT || 3000;
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to E-Commerece App");
});
app.use("/api/signup", signupRouter);
app.use("/api/login", loginRouter);
app.use("/api/profile", profileRouter)
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
