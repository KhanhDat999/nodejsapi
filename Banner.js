import database from './database.js';
import express, { json } from 'express';
const app = express();


export const abc = database.query(`SELECT * FROM test`, (err, data) => {
    if (err) throw err;
    return data;

});


