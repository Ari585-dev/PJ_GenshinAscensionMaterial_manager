const app = require('./app');
const mysql = require('mysql');
require('dotenv').config();

//dotenv data
const port = process.env.SERVER_PORT;
const USER = process.env.USERDB;
const PASSWORD = process.env.PASSWORD;
const DBNAME = process.env.DBNAME
const HOST = process.env.HOST

//Connection with DB
const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DBNAME
});

try {
    connection.connect();
    console.log('Valid Connection');
    app.listen(port, () => {
        console.log("Server UP")
    })
} catch (error) {
    console.error('An error has occurred while connecting to the database : ' + error.stack);
} finally {
    connection.end();
}