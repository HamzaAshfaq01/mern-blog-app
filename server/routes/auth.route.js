const express = require('express');
const router = express.Router();

// Load Controllers
const {
	registerController,
	activationController,
	signinController,
	forgotPasswordController,
	resetPasswordController,
	googleController,
	facebookController,
} = require('../controllers/auth.controller');

router.post('/register', registerController);

router.post('/login', signinController);

router.post('/activation', activationController);

// forgot reset password
router.put('/forgotpassword', forgotPasswordController);
router.put('/resetpassword', resetPasswordController);

// Google and Facebook Login
router.post('/googlelogin', googleController);
router.post('/facebooklogin', facebookController);
module.exports = router;
