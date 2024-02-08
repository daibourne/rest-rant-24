const express = require('express');
const router = express.Router();
const render = require('../render').default;
const places = require('../models/places');

router.get('/new', (req, res) => {
    res.render(render('places/new'));
});

router.get('/', (req, res) => {
    res.send(render('places/Index', { places: places }));
});


router.post('/', (req, res) => {
    const newPlace = { ...req.body };
    if (!newPlace.pic) {
        newPlace.pic = 'https://via.placeholder.com/300';
    }
    if (!newPlace.city) {
        newPlace.city = 'Unknown';
    }
    if (!newPlace.state) {
        newPlace.state = 'USA';
    }
    places.push(newPlace);
    res.redirect('/places');
});

module.exports = router;