const express = require("express");
// const cors = require('cors')
// const morgan = require('morgan')
const app = express();

const helloRouter = require("./routes/hello");

app.use("/hello", helloRouter);
// app.use(cors())
// app.use(morgan('combined'))

app.get("/ping", function (req, res, next) {
  res.json({ message: "pong" });
});

app.listen(3000, function () {
  console.log("server listening on port 3000");
});
