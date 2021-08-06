//dependencies
const mongoose = require('mongoose')

//Schema
const destinationSchema = new mongoose.Schema(
    {
        location: String,
        image: String,
        language: String,
        population: Number
    }
)

const Destinations = mongoose.model('Destination', destinationSchema)


//exporting
module.exports = Destinations;
