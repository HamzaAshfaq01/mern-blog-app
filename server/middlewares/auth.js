const jwt = require('jsonwebtoken');
const User = require('../models/auth.model');

exports.protect = async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1];
	}
	if (token == ' undefined') {
		return res.status(401).json({
			error: 'Not authorized to access this route',
		});
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findById(decoded._id);
		console.log(user);
		if (!user)
			return res.status(401).json({
				error: 'Not user found with this id',
			});
		req.user = user;
		next();
	} catch (error) {
		console.log(error, 'error');
		return res.status(401).json({
			error: 'Not authorized to access this route',
		});
	}
};
