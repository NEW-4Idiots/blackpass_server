const express = require("express");
const signInRouter = require("./routes/signIn");
const getUserRouter = require("./routes/getUser");
const memberVerificationRouter = require("./routes/memberVerification");
const registerBlackboxRouter = require("./routes/registerBlackbox");
const userLoginRouter = require("./routes/userLogin");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/sign-in", signInRouter);
app.use("/get-user", getUserRouter);
app.use("/member-verification", memberVerificationRouter);
app.use("/register-blackbox", registerBlackboxRouter);
app.use("/user-login", userLoginRouter);
app.use(cors());
app.use(morgan("combined"));

app.listen(3000, function () {
  console.log("server listening on port 3000");
});
