const mongoose = require('mongoose');
const crypto = require('crypto');

const blogScheama = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Users',
		},
		title: {
			type: String,
			required: true,
		},
		description: String,
		image: String,
		creator: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Blog', blogScheama);
