const express = require("express");
const db = require("../config/dbInfo");
const router = express.Router();

const conn = db.init();

router.get("/", function (req, res, next) {
  const sql = "SELECT * FROM Users";
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted : " + err);
    else
      res.status(200).json({
        data: result,
      });
  });
});

module.exports = router;
