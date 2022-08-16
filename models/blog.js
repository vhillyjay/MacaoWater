const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema); // name of the model should be on capital leter. 1st parameter is name of this model/singular term for the collection, 2nd paramter is the schema/object we made that we are going to store to the collection
module.exports = Blog;