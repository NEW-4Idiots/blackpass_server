const express = require("express");
const db = require("../config/dbInfo");
const router = express.Router();

const conn = db.init();

router.post("/", function (req, res, next) {
  const body = req.body;
  const sql = "SELECT COUNT(*)+1 as userId FROM Users";
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted : " + err);
    else {
      const sql =
        "INSERT INTO Users (userId, userEmail, userPasswd, userNickname, blackboxId) VALUES(?, ?, ?, ?, ?)";
      const params = [
        result[0].userId,
        body.userEmail,
        body.userPasswd,
        body.userNickname,
        null,
      ];
      conn.query(sql, params, function (err) {
        if (err) console.log("query is not excuted : " + err);
        else res.sendStatus(200);
      });
    }
  });
});

module.exports = router;
