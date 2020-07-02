const mysql = require("mysql2/promise")

let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgerApp",
    });
}

// connection.connect();

module.exports = connection
