// =============== Dependencies =============== //
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

// =============== Controllers =============== //
const destinationsController = require('./controllers/destinations.js')
const userController = require('./controllers/users_controller.js')

// =============== Middleware =============== //
app.use(express.json())
app.use(cors())
require('dotenv').config()
app.use('/destinations', destinationsController)
app.use('/', userController)


// =============== Database =============== //
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI ,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)

app.get('/', (req, res) => {
    // res.redirect('/destinations')
    res.send('hello')
})

mongoose.connection.once('open', () => {
    console.log('Connected to Mongod...');
})

// =============== Port =============== //
app.listen(3000, () => {
    console.log('listening on port...', 3000);
})
