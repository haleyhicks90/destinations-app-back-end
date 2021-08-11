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

//seed route (GET)
// post.get ('/sdjfsjdkfjsdkfdks/seed', (req, res) => {
//     Post.deleteMany({}, () => {})

router.get('/seed', (req, res) => {
    Destinations.create(
        [
            {
                location: "Italy",
                image1: "https://thepointsguy.global.ssl.fastly.net/uk/originals/2020/10/GettyImages-1170100071.jpg",
                image2: "https://www.state.gov/wp-content/uploads/2018/11/Italy-2109x1406.jpg",
                image3: "https://www.planetware.com/wpimages/2020/02/italy-in-pictures-beautiful-places-to-photograph-venice-canal.jpg",
                language: "Italian",
                population: 60.36
            },
            {
                location: "Rio de Janeiro, Brazil",
                image1: "https://gsg-61ea.kxcdn.com/media/contents/Rio%20city%20and%20rocks%20lucas-campoi-pHnzdSAEkRM-unsplash.jpg",
                image2: "https://www.businessdestinations.com/wp-content/uploads/2018/08/Rio.jpg",
                image3: "https://landedtravel.com/wp-content/uploads/2020/02/Brazil-Private-Custom-Travel-Design-Rio-de-Janiero-Copacabana-Purple.jpg",
                language: "Portuguese",
                population: 6.748
            },
            {
                location: "New Zealand",
                image: "https://deih43ym53wif.cloudfront.net/travel-to-new-zealand-rough-guides_1436a026cc.jpeg",
                language: "English, Te Reo Māori",
                population: 4.917
            }
        ],
        (error, data) => {
            res.redirect('/')
        }
    )
})


//exporting
module.exports = router;
