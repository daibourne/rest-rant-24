const express = require('express');
const router = express.Router();
const render = require('../render').default;
const places = require('../models/places');

router.get('/', (req, res) => {
    res.send(render('places/Index', {places: places}));
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        // res.status(400).render('Error 404')
        res.status(400).send(render('Error 404'))
    } else if (!places[id]) {
        res.status(400).send(render('Error 404'))
    } else {
        res.send(render('places/Show', {place: places[id] }));
    }
});

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