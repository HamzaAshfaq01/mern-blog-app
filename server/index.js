require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
connectDB();
app.use(cors());
// app.use(
// 	cors({
// 		origin: process.env.CLIENT_URL,
// 		credentials: true, //access-control-allow-credentials:true
// 	})
// );

app.use(morgan('dev'));

app.use(function (req, res, next) {
	console.log(req.protocol + '://' + req.get('host'));
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	next();
});

app.use(express.static(path.join(__dirname, './uploads')));
// Load routes
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const blogRouter = require('./routes/blog.route');

// Use Routes
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', blogRouter);

app.get('/', (req, res) => {
	console.log('Api');
	res.status(404).json({
		msg: 'Node Api',
	});
});

app.use((req, res) => {
	res.status(404).json({
		success: false,
		msg: 'Page not founded',
	});
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'PRODUCTION') {
	// Set static folder
	app.use(express.static('client-react/build'));
	app.use(express.static(path.join(__dirname, './uploads')));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client-react', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
