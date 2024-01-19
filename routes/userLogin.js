const express = require("express");
const db = require("../config/dbInfo");
const router = express.Router();

const conn = db.init();

router.get("/:email/:password", function (req, res, next) {
  const params = req.params;
  const sql =
    "SELECT userEmail, userPasswd FROM Users WHERE userEmail=? AND userPasswd=?";
  conn.query(sql, [params.email, params.password], function (err, result) {
    if (err) console.log("query is not excuted : " + err);
    else
      res.status(200).json({
        data: result,
      });
  });
});

module.exports = router;
