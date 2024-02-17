const mongoose = require('mongoose');
const { Schema } = mongoose;

const placeSchema = new Schema({
    name: { type: String, required: true },
    pic: { type: String },
    cuisines: { type: String },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: { type: Number },
});

const Place = mongoose.model('Place', placeSchema);

placeSchema.methods.showEstablished = function() {
    return
    `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = Place;

// let places = [
//     {
//         name: 'Le Croissant 🤌',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'French, Bakery',
//         pic: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     },
//     {
//         name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     },
//     {
//         name: 'Coding Cat Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: 'https://images.pexels.com/photos/2290753/pexels-photo-2290753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     },
// ];

// module.exports = places;