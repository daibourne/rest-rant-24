const express = require('express');
const router = express.Router();
const render = require('../render');
const places = require('../models/places');
const db = require('../models');

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.render('places/index', { places })
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
});
//     // res.send(render('places/Index', { places: places }));
//     places.find().then((places) => {
//         res.send(render('Index', { places: places }));
//     });
// });

router.get('/new', (req, res) => {
    res.send(render('places/new'));
});

router.get('/:id', (req, res))

//     places.findById(req.params.id).then((place) => {
//         res.send(render('Show',{ place: place }));
//     }).catch((err) => {
//         res.send(render('error404'));
//     });
// });

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { place })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
});

//     const id = Number(req.params.id);
//     if (isNaN(id)) {
//         res.status(400).send(render('Error 404'))
//     } else if (!places[id]) {
//         res.status(400).send(render('Error 404'))
//     } else {
//         res.send(render('places/Show', { place: places[id], id:id }));
//     }
// });

router.get('/', (req, res) => {
    res.send(render('places/Index', { places: places }));
});


router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
});

// const newPlace = { ...req.body };
// if (!newPlace.pic) {
//     newPlace.pic = 'https://via.placeholder.com/300';
// }
// if (!newPlace.city) {
//     newPlace.city = 'Unknown';
// }
// if (!newPlace.state) {
//     newPlace.state = 'USA';
// }
// db.place.create(req.body)
// // places.push(newPlace);
// res.redirect('/places');


router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.send(render('error404'))
    }
    else if (!places[id]) {
        res.send(render('error404'))
    }
    else {
        res.send(render('places/edit', { place: places[id] }))
    }
});

router.put('/:id', (req, res) => {
    const id = NUmber(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.redirect(`/places/${id}`)
    }
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
});

module.exports = router;