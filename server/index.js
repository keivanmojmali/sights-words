require('dotenv/config');
const pg = require('pg');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();
const jsonMiddleware = express.json();
app.use(jsonMiddleware, staticMiddleware);



app.get('/store/getWords',(req,res,next)=>{
  const sql = `
  select *
  from "sightWords"
  `;
  db.query(sql)
  .then(result=>{
    res.status(201).json(result.rows)
  })
  .catch(err=>{
    console.error(err)
    next(err)
  })
})















app.use(errorMiddleware);

app.listen(process.env.PORT, () => {

});
