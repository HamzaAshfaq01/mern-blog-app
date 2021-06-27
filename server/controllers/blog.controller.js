const Blog = require('../models/blog.model');

exports.createBlogController = async (req, res) => {
	const { title, description } = req.body;
	if (!title && !description && !req.file)
		return res.status(400).json({
			error: 'Please fill all fields',
		});
	const img_url = req.protocol + '://' + req.get('host') + '/' + req.file.filename;

	try {
		const blog = await Blog.create({
			user: req.user._id,
			title,
			description,
			image: img_url,
			creator: req.user.name,
		});
		return res.json({ message: 'Blog Posted Successfull', blog });
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			error: 'Blog Posted Fail',
		});
	}
};

// user blogs

exports.getAllBlogsController = async (req, res) => {
	try {
		const blogs = await Blog.find({});
		return res.json({ blogs });
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			error: error,
		});
	}
};
exports.getBlogDetailController = async (req, res) => {
	console.log(req.body, req.params.id);
	try {
		const blogDetail = await Blog.findById(req.params.id);
		return res.json({ blogDetail });
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			error: error,
		});
	}
};

// user blogs
exports.getUserBlogsController = async (req, res) => {
	try {
		const blogs = await Blog.find({ user: req.user._id });
		return res.json({ blogs });
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			error: error,
		});
	}
};
