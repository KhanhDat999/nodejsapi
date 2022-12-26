import express from 'express';
import database from './database.js';
import { abc } from './Banner.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import e from 'express';
import ZingMp3 from 'zingmp3-api';
const app = express();
app.use(cors());
const port = 3001;


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.set('view engine', 'ejs');
app.set("views","./views");

// app.get('/home' , (req , res) =>{
//   ZingMp3.getHome(1)
// .then(ress => res.json(ress)) 


// })

// app.get('/top100' , (req , res) =>{
//   ZingMp3.getChartHome()
// .then(ress => res.json(ress)) 


// })

// app.get('/info/q=:id' , (req , res) =>{
//   ZingMp3.getFullInfo(req.params.id)
//   .then(ress => res.json(ress)) 

// })




app.get('/home', (req, res) => {
  database.query(`SELECT * FROM hocsinh`, (err, data) => {
    if (err) throw err;
    res.json(data)
    console.log(data)
    // res.render('index.ejs' , {data : data});
  });
}),


// app.get('/post' , (req , res) =>{
//   res.render("index.ejs" ,)
    
// })
app.post('/post' , (req , res) =>{

 database.query(`INSERT INTO Banner ( Imgbanner) VALUES ('${req.body.Imgbanner}')` , (err) =>{
  if(err) res.json(err)
  res.render("index.ejs")
 })

})

// app.get('/delete/:id' , (req , res) =>{
// console.log(req.params.id)
//   database.query(`DELETE FROM Banner WHERE id = ${req.params.id})` , (err) =>{
//    if(err) res.json(err)
//    res.json('ok')
//   })
//  })

  app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
  })