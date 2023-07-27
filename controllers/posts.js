const Comments = require('../models/comments');
const Posts = require('../models/posts');

//  CREATE ROUTE
exports.create = async function (req, res) {
	try {
		req.body.post = req.post._id;
		const post = await Post.create(req.body);
		req.body.post
			? req.body.post.addToSet({ _id: post._id }) // if there is a post already
			: (req.body.post = [{ _id: post._id }]); // if not, create a new array and insert the post
		await post.save(); // save post to database
		res.json(post);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//  INDEX ROUTE - SHOW ALL
exports.index = async function (req, res) {
	try {
		const foundPosts = await Posts.find({});
		res.json({ foundPosts });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//  SHOW  ROUTE
exports.show = async function (req, res) {
	try {
		const post = await Posts.findOne({ _id: req.params.id });
		res.json(post);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//  DELETE  ROUTE
exports.delete = async function (req, res) {
	try {
		const post = await Posts.finOneAndDelete({ _id: req.params.id });
		res.sendStatus(200);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

//  UPDATE  ROUTE
exports.update = async function (req, res) {
	try {
		const post = await Posts.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{ new: true }
		);
		res.json(post);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};
