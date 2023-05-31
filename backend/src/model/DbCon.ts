import mysql from "mysql2";

const dbCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ecommerce_testing",
});

dbCon.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL database!");
});

export default dbCon;
