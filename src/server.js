// const express = require('express')
import express from 'express'
import configViewEngine from './config/configEngine.js'
import initWebRoute from './routes/web.js'
import initAPIRoute from './routes/api.js'
import * as dotenv from 'dotenv'

// import connection from './config/connectDB.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
configViewEngine(app)
initWebRoute(app);
initAPIRoute(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})