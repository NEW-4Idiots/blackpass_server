const express = require("express");
const db = require("../config/dbInfo");
const router = express.Router();

const conn = db.init();

router.post("/", function (req, res, next) {
  const body = req.body;
  const sql = "SELECT COUNT(*)+1 as blackboxId FROM Blackbox";
  conn.query(sql, function (err, result) {
    if (err) console.log("query is not excuted : " + err);
    else {
      const sql =
        "INSERT INTO Blackbox (blackboxId, blackboxName, registrationDate) VALUES(?, ?, NOW())";
      const params = [result[0].blackboxId, body.blackboxName];
      conn.query(sql, params, function (err) {
        if (err) console.log("query is not excuted : " + err);
        else res.sendStatus(200);
      });
    }
  });
});

module.exports = router;
