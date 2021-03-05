import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser';
import connectMongodb from './config/mongodb.js';
import authRouter from './routes/authRouter.js'
import eventRouter from './routes/eventRouter.js'
import userRouter from './routes/userRoute.js'


dotenv.config(); // Init dotenv
connectMongodb(); // DB connection

///// ******************** ADD TO DB CONFIG FILE
// Event triggers when the connection gives an error
mongoose.connection.on('error', (error) => {
    console.log(error);
});
// Event triggers when the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log("Connection to DB is closed");
});

const app = express(); // Init app
app.use(morgan('dev')); // Request log
app.use(cookieParser());
app.use(express.json()); // Parse json data from client
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API is running...');
})

// Routes
app.use('/auth', authRouter);
app.use('/events', eventRouter);
app.use('/users', userRouter);


// Server connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`);
});