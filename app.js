import express from 'express';
import database from './database.js';
import { abc } from './Banner.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import e from 'express';
const app = express();
app.use(cors());
const port = 3001;


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.set('view engine', 'ejs');


app.get('/home', (req, res) => {
  database.query(`SELECT * FROM Banner`, (err, data) => {
    if (err) throw err;
    res.json([{
      Banner: data},{data: abc._results}]
    );
  });
}),

app.get('/post' , (req , res) =>{
  res.render("index.ejs" ,)
    
})
app.post('/post' , (req , res) =>{

 database.query(`INSERT INTO Banner ( Imgbanner) VALUES ('${req.body.Imgbanner}')` , (err) =>{
  if(err) res.json(err)
  res.render("index.ejs")
 })

})

app.get('/delete/:id' , (req , res) =>{
console.log(req.params.id)
  database.query(`DELETE FROM Banner WHERE id = ${req.params.id})` , (err) =>{
   if(err) res.json(err)
   res.json('ok')
  })
 })

  app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
  })