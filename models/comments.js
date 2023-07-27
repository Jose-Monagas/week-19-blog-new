const { model, Schema } = require('mongoose');
const mongoose = require('mongoose');

const commentsSchema = new Schema({
	name: { type: String, required: true },
	message: { type: String, required: true }
});

const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;
