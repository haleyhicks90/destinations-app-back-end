//dependencies
const mongoose = require('mongoose')

//Schema
const destinationSchema = new mongoose.Schema(
    {
        location: String,
        image1: String,
        image2: String,
        image3: String,
        language: String,
        population: Number
    }
)

const Destinations = mongoose.model('Destination', destinationSchema)


//exporting
module.exports = Destinations;
