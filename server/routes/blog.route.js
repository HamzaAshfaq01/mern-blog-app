const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth');
const {
	createBlogController,
	getUserBlogsController,
	getAllBlogsController,
	getBlogDetailController,
} = require('../controllers/blog.controller');

var multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './server/uploads');
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, uniqueSuffix + '-' + file.originalname);
	},
});

var upload = multer({ storage: storage });

router.post('/create/blog', protect, upload.single('image'), createBlogController);
router.get('/userblogs', protect, getUserBlogsController);
router.get('/blogdetail/:id', getBlogDetailController);
router.get('/allblogs', getAllBlogsController);

module.exports = router;
