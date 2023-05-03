// const express = require('express')
import express from 'express'
import configViewEngine from './config/configEngine.js'
import initWebRoute from './routes/web.js'
import * as dotenv from 'dotenv'
// import connection from './config/connectDB.js'
dotenv.config()

const app = express()
const port = process.env.PORT || 3000;

configViewEngine(app)
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})