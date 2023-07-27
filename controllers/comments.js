require('dotenv').config();
const Comments = require('../models/comments');
const Posts = require('../models/posts');

//  CREATE ROUTE
exports.create = async function (req, res) {
	try {
		req.body.comment = req.comment._id;
		const comment = await comment.create(req.body);
		req.body.comment
			? req.body.comment.addToSet({ _id: comment._id }) // if there is a comment already
			: (req.body.comment = [{ _id: comment._id }]); // if not, create a new array and insert the comment
		await comment.save(); // save comment to database
		res.json(comment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//  INDEX ROUTE - SHOW ALL
exports.index = async function (req, res) {
	try {
		const foundComments = await comments.find({});
		res.json({ foundComments });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//  SHOW  ROUTE
exports.show = async function (req, res) {
	try {
		const comment = await comments.findOne({ _id: req.params.id });
		res.json(comment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//  DELETE  ROUTE
exports.delete = async function (req, res) {
	try {
		const comment = await comments.finOneAndDelete({ _id: req.params.id });
		res.sendStatus(200);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//  UPDATE  ROUTE
exports.update = async function (req, res) {
	try {
		const comment = await comments.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true }
		);
		res.json(comment);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
