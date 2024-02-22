const express = require('express');
const router = express.Router();
const render = require('../render');
const places = require('../models/places');
const db = require('../models');

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
        res.send(render('places/index', { places }))
    })
    .catch(err => {
        console.log(err)
        res.send(render('error404'))
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

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.send(render('places/show', { place }))
    })
    .catch(err => {
        console.log('err', err)
        res.send(render('error404'))
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


router.post('/', (req, res) => {
    db.Place.create(req.body)
    .then(() => {
        res.redirect('/places')
    })
    .catch(err => {
        console.log('err', err)
        res.send(render('error404'))
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
    db.Place.findById(req.params.id)
        .then((place) => {
            res.send(render('places/Edit', { place }));
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send(render('Error404'));
        });
});

router.put('/:id', (req, res) => {
    db.Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedPlace) => {
            res.redirect(`/places/${updatedPlace.id}`);
        })
        .catch((err) => {
            console.log(err);
            // res.status(404).render('Error404');
            res.status(404).send(render('Error404'));
        });
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

router.get('/:id/comments/new', (req, res) => {
    db.Place.findById(req.params.id)
    .populate('comments')
    .then(place => {
        console.log(place.comments)
        res.send(render('comments/New', { place }));
    })
    .catch(err => {
        console.log('err', err)
        res.send(render('error404'))
    })
});

router.post('/:id/comments', (req, res) => {
    let commentData = req.body;
    commentData.rant = commentData.rant === 'on';
    commentData.stars = parseFloat(commentData.stars);
    db.Comment.create(commentData)
        .then((comment) => {
            db.Place.findById(req.params.id)
                .then((place) => {
                    place.comments.push(comment);
                    place.save();
                    res.redirect(`/places/${place._id}`);
                })
                .catch((err) => {
                    console.log(err);
                    res.status(404).send('Not Found');
                });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send('Bad Request');
        });
});

module.exports = router;