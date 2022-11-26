import express from 'express';
import mysql from 'mysql';
import database from './database.js';
const app = express();
const port = 3001;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  database.query( `SELECT * FROM test` ,(err , data) => {
    if (err) throw err;
    res.json(data);
  });
}),

app.post('/post', (req, res) => {
   console.log(req.body.name)
}),


  app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
  })