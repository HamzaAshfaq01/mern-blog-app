require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

connectDB();
app.use(express.json());
app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true, //access-control-allow-credentials:true
		optionSuccessStatus: 200,
	})
);
app.use(morgan('dev'));
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	next();
});

// Load routes
const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');

// Use Routes
app.use('/api', authRouter);
app.use('/api', userRouter);
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

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client-react', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
