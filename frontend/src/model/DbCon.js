"use strict";
exports.__esModule = true;
var mysql2_1 = require("mysql2");
var connection = mysql2_1["default"].createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ecommerce_testing"
});
connection.connect(function (err) {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL database!");
});
connection;
exports["default"] = connection;
