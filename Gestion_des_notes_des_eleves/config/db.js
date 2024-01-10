const mongoose = require('mongoose')
require('dotenv').config({path:'.env'})

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER_PASS}@cluster0.rpoxfua.mongodb.net/eleve`)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log('Failed to connect to MongoDB', err))
