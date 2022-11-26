import database from '../database.js';

const abc =() =>{
    database.query( `SELECT * FROM Home` ,(err , data) => {
        if (err) throw err;
       console.log(data)
      });

} 

abc()