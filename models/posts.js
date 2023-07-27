const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const postSchema = new Schema({
	title: { type: String, required: true },
	body: { type: String, required: true },
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }]
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
