const express = require("express");
const db = require("../config/dbInfo");
const router = express.Router();

const conn = db.init();

router.get("/:email", function (req, res, next) {
  const params = req.params;
  const sql = "SELECT userEmail FROM Users WHERE userEmail=?";
  conn.query(sql, params.email, function (err, result) {
    if (err) console.log("query is not excuted : " + err);
    else
      res.status(200).json({
        data: result,
      });
  });
});

module.exports = router;
