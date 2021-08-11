// =============== Dependencies =============== //
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const db = mongoose.connection;

// =============== Controllers =============== //
const destinationsController = require('./controllers/destinations.js')
const userController = require('./controllers/users_controller.js')

// =============== Middleware =============== //
app.use(express.json())
app.use(cors())
require('dotenv').config()
app.use('/destinations', destinationsController)
app.use('/destinations', userController)

db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", MONGODB_URI));
db.on("disconnected", () => console.log("mongo disconnected "));

// =============== Database =============== //
const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI ,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)

app.get('/', (req, res) => {
    res.redirect('/destinations')
    // res.send('hello')
})

mongoose.connection.once('open', () => {
    console.log('Connected to Mongod...');
})

// =============== Port =============== //
app.listen(PORT, () => {
    console.log('listening on port...', PORT);
})
