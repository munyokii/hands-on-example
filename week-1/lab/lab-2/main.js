const mysql = require('mysql2');

// Create a connection to MySQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mysql123!@#" // Replace with your MySQL password
});

console.log(connection.password)

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL!");

    // SQL Query to Create Database
    const dbName="products" // Add a unique database name
    const createDBQuery = `CREATE DATABASE IF NOT EXISTS ${dbName}`;

    connection.query(createDBQuery, (err, result) => {
        if (err) {
            console.error("Error creating database:", err);
            return;
        }
        console.log(`Database '${dbName}' created successfully!`);
    });

    // Close the connection
    connection.end();
});
