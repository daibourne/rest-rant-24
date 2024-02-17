const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

let placesFormatted = data.places.map((place) => {
    return (
        <div className='col-sm-6'>
        <h2>
            <a href={`/places/${place.id}`}>{place.name}</a>
        </h2>
        </div>
    )
}); 

module.exports.Place = require('./places');