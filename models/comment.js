const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    author: { type: String, default: 'Anonymous'},
    rant: { type: Boolean, },
    stars: { type: Number, required: true, },
    content: {type: String, default: ''}
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;