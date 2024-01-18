const mysql = require("mysql2")

const db_info = {
    host: "blackpass-rds-mysql.c784okag0xv7.ap-northeast-2.rds.amazonaws.com",
    port: "3306",
    user: "sanbonai0728",
    password: "jun5036511*",
    database: "blackpass_DB"
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function (conn) {
        conn.connect(function (err) {
            if (err) console.error("mysql connection error : " + err);
            else console.log("mysql is connected successfully!")
        })
    }
}