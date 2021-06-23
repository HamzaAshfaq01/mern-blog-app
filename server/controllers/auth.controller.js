const User = require('../models/auth.model');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandling');
const SendMail = require('../helpers/sendMail');

exports.registerController =async (req, res) => {
	const { name, email, password } = req.body;

try {

	const user = await User.findOne({ email });

	if(user) return res.status(400).json({
					error: 'Email is already taken',
				});
	
		const token = jwt.sign(
			{
				name,
				email,
				password,
			},
			process.env.JWT_ACCOUNT_ACTIVATION,
			{
				expiresIn: '10m',
			}
		);

		const emailData = {
			from: process.env.EMAIL_FROM,
			to: email,
			subject: 'Account activation link',
			html: `
                <h1>Please use the following to activate your account</h1>
                <p>${process.env.CLIENT_URL}/activate/${token}</p>
                <hr />
                <p>This email may containe sensetive information</p>
                <p>${process.env.CLIENT_URL}</p>
            `,
		};

		SendMail(emailData, res); 
			
} catch (error) {
	console.log(error);
		return res.status(400).json({
			error: error,
		});
}
};

exports.activationController =async (req, res) => {
	const { token } = req.body;

	console.log(token);

	if (token) {
		try {
			const decoded=  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION)

			 const { name, email, password } = decoded;

		const user =await User.create({
					name,
					email,
					password,
				});
				

				if(!user)
				{
                    return res.status(401).json({
							errors: "Please try again",
						});
				}
				return res.json({
					token,
							message: 'Your Account has been created',
						});
 
		} catch (error) {
				return res.json({
				error: 'Expired link. Signup again',
		});
		}
       
	} else {
		return res.json({
			error: 'error happening please try again',
		});
	}
};

exports.signinController = async (req, res) => {
	const { email, password } = req.body;

	// check if user exist
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({
				error: 'User with that email does not exist. Please signup',
			});
		}
		if (!user.authenticate(password)) {
			return res.status(400).json({
				error: 'Email and password do not match',
			});
		}
	try {

	
			const token = jwt.sign(
				{
					_id: user._id,
				},
				process.env.JWT_SECRET,
				{
					expiresIn: '7d',
				}
			);
			const { _id, name, email, role } = user;

			return res.json({
				message: 'Login Succesfull',
				token,
				user: {
					_id,
					name,
					email,
					role,
				},
			});
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			error: error,
		});
	}
};

exports.requireSignin = expressJwt({
	secret: process.env.JWT_SECRET, // req.user._id
});

exports.adminMiddleware = (req, res, next) => {
	User.findById({
		_id: req.user._id,
	}).exec((err, user) => {
		if (err || !user) {
			return res.status(400).json({
				error: 'User not found',
			});
		}

		if (user.role !== 'admin') {
			return res.status(400).json({
				error: 'Admin resource. Access denied.',
			});
		}

		req.profile = user;
		next();
	});
};

exports.forgotPasswordController = async(req, res) => {
	const { email } = req.body;

	const user=await User.findOne({email})

	if(!user) return  res.status(400).json({
						error: 'User with that email does not exist.Please Sign up',
					});
		const token = jwt.sign(
					{
						_id: user._id,
					},
					process.env.JWT_RESET_PASSWORD,
					{
						expiresIn: '10m',
					}
				);

			const emailData = {
					from: process.env.EMAIL_FROM,
					to: email,
					subject: `Password Reset link`,
					html: `
                    <h1>Please use the following link to reset your password</h1>
                    <p>${process.env.CLIENT_URL}/password/reset/${token}</p>
                    <hr />
                    <p>This email may contain sensetive information</p>
                    <p>${process.env.CLIENT_URL}</p>
                `,
				};

		const updatedUser=await user.updateOne({resetPasswordLink:token})

		if(!updatedUser) return  res.status(400).json({
								error: 'Database connection error on user password forgot request',
							});

			SendMail(emailData,res)

};

exports.resetPasswordController =async (req, res) => {
	// const { resetPasswordLink, newPassword } = req.body;
	const { password1,password2,token} = req.body;

	if(password1 !==password2) return res.status(400).json({
							error: 'Passwords don\'t matches',
	});

	if(token)
	{
		try {
			const decoded=jwt.verify(token,process.env.JWT_RESET_PASSWORD)
			const user=await User.findOne({resetPasswordLink:token})
			if(!user) 	return res.status(400).json({
									error: 'Invalid token',
								});
			const updatedFields = {
								password: password1,
								resetPasswordLink: '',
							};

			user.password=password1
			user.resetPasswordLink=""
			
		await user.save();

		res.status(201).json({
			message: 'Password Updated Success',
		});
			
	
		} catch (error) {
			return res.status(400).json({
							error: 'Expired link. Try again' ,
	});
		}

	}

		
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
// Google Login
exports.googleController = (req, res) => {
	const { idToken } = req.body;

	console.log(idToken);

	client
		.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
		.then((response) => {
			const { email_verified, name, email } = response.payload;
			if (email_verified) {
				User.findOne({ email }).exec((err, user) => {
					if (user) {
						const token = jwt.sign(
							{ _id: user._id },
							process.env.JWT_SECRET,
							{
								expiresIn: '7d',
							}
						);
						const { _id, email, name, role } = user;
						return res.json({
							token,
							user: { _id, email, name, role },
						});
					} else {
						let password = email + process.env.JWT_SECRET;
						user = new User({ name, email, password });
						user.save((err, data) => {
							if (err) {
								console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
								return res.status(400).json({
									error: 'User signup failed with google',
								});
							}
							const token = jwt.sign(
								{ _id: data._id },
								process.env.JWT_SECRET,
								{ expiresIn: '7d' }
							);
							const { _id, email, name, role } = data;
							return res.json({
								token,
								user: { _id, email, name, role },
							});
						});
					}
				});
			} else {
				return res.status(400).json({
					error: 'Google login failed. Try again',
				});
			}
		});
};

exports.facebookController = (req, res) => {
	console.log('FACEBOOK LOGIN REQ BODY', req.body);
	const { userID, accessToken } = req.body;

	const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

	return fetch(url, {
		method: 'GET',
	})
		.then((response) => response.json())
		.then((response) => {
			const { email, name } = response;
			User.findOne({ email }).exec((err, user) => {
				if (user) {
					const token = jwt.sign(
						{ _id: user._id },
						process.env.JWT_SECRET,
						{
							expiresIn: '7d',
						}
					);
					const { _id, email, name, role } = user;
					return res.json({
						token,
						user: { _id, email, name, role },
					});
				} else {
					let password = email + process.env.JWT_SECRET;
					user = new User({ name, email, password });
					user.save((err, data) => {
						if (err) {
							console.log('ERROR FACEBOOK LOGIN ON USER SAVE', err);
							return res.status(400).json({
								error: 'User signup failed with facebook',
							});
						}
						const token = jwt.sign(
							{ _id: data._id },
							process.env.JWT_SECRET,
							{ expiresIn: '7d' }
						);
						const { _id, email, name, role } = data;
						return res.json({
							token,
							user: { _id, email, name, role },
						});
					});
				}
			});
		})
		.catch((error) => {
			res.json({
				error: 'Facebook login failed. Try later',
			});
		});
};
