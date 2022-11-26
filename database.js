import mysql from 'mysql';

var connection = mysql.createConnection({
  host: 'localhost',
  database: 'nemshop',
  user: 'root',
  password: 'password',
});

connection.connect()

export default connection;

