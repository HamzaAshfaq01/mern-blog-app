const express = require('express');
const router = express.Router();

// import controller
// const { adminMiddleware } = require('../controllers/auth.controller');
const { protect } = require('../middlewares/auth');
const {
	readController,
	updateController,
} = require('../controllers/user.controller');

router.get('/user/:id', protect, readController);
router.put('/user/update', protect, updateController);
// router.put('/admin/update', protect, adminMiddleware, updateController);

module.exports = router;
