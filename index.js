require('dotenv').config();
const express = require('express');
const app = express();
const render = require('./render');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;
console.log(PORT);

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to mongo: ' + MONGO_URI);
    })
    .catch((err) => {
        console.log('Error connecting to mongo: ' + err);
    });

// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send(render('Home'));
});

// Load the places controller
app.use('/places', require('./controllers/places'));

app.use(express.urlencoded({ extended: true }));

// Wildcard/404 route
app.get('*', (req, res) => {
    console.log('user requested unknown route: ', req.url);
    res.status(404).send(render('Error404'));
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});