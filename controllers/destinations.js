//dependencies
const express = require('express')
const router = express.Router()
const Destinations = require('../models/destinations.js')

//index route (GET)
router.get('/', (req, res) => {
    Destinations.find({}, (error, foundDestinations) => {
        res.json(foundDestinations)
    })
})

//delete route (DELETE)
router.delete('/:id', (req, res) => {
    Destinations.findByIdAndRemove(req.params.id, (error, deletedDestination) => {
        res.json(deletedDestination)
    })
})

//create route (POST)
router.post('/', (req, res) => {
    Destinations.create(req.body, (error, createdDestination) => {
        res.json(createdDestination)
    })
})

//update route (PUT)
router.put('/:id', (req, res) => {
    Destinations.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedDestination) => {
        res.json(updatedDestination)
    })
})



//exporting
module.exports = router;
