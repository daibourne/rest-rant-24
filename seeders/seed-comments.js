const db = require('../models/index')

async function seed() {
    let place = await db.Place.findOne({ name: 'Test' })

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false, 
        stars: 5.0,
        content: 'Place is trash'
    })
    place.comments.push(comment.id)

    await place.save()

    process.exit()
};

seed();