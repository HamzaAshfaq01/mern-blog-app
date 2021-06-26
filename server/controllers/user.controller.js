const User = require('../models/auth.model');

exports.readController = (req, res) => {
	const userId = req.params.id;
	User.findById(userId).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'User not found',
			});
		}
		user.hashed_password = undefined;
		user.salt = undefined;
		res.json(user);
	});
};

exports.updateController = async (req, res) => {
	const { name, password } = req.body;

	const user = await User.findById(req.user._id);

	if (!user)
		return res.status(400).json({
			error: 'User not found',
		});
	if (!name) {
		return res.status(400).json({
			error: 'Name is required',
		});
	} else {
		user.name = name;
	}
	if (password) {
		if (password.length < 6) {
			return res.status(400).json({
				error: 'Password should be min 6 characters long',
			});
		} else {
			user.password = password;
		}
	}

	user.save((err, updatedUser) => {
		console.log(updatedUser);
		if (err) {
			return res.status(400).json({
				error: 'User update failed',
			});
		}
		const { email, name, role, _id } = updatedUser;
		res.json({
			message: 'Updated Succesfully',
			user: {
				email,
				name,
				role,
				_id,
			},
		});
	});
};
