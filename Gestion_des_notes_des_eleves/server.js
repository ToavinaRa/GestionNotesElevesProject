const express = require('express');
const app = express()
var cors = require('cors')
require('dotenv').config({path:'./config/.env'})
const eleveRoutes = require('./routes/eleve.routes')
require('./config/db')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//pour éviter l'erreur CORS
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type', 'Origin', 'X-Requested-With', 'Content', 'Accept', 'Authorization'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }
app.use(cors(corsOptions));

app.use('/api/eleve',eleveRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})

module.exports = app