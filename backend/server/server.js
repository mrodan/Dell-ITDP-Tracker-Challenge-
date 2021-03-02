import express from 'express';
import dotenv from 'dotenv';
import connectMongodb from './config/mongodb.js';
import eventsTest from './data/eventsTest.js';
import mongoose from 'mongoose';
//const morgan = require('morgan');




dotenv.config(); // Init dotenv
connectMongodb(); // DB connection

// Event triggers when the connection gives an error
mongoose.connection.on('error', (error) => {
    console.log(error);
});
// Event triggers when the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log("Connection to DB is closed");
});

const app = express(); // Init app
//app.use(morgan('dev')); // Request log


app.get('/', (req, res) => {
    res.send('API is running...');
})

app.get('/api/events', (req, res) => {
    res.json(eventsTest);
})

app.get('/api/events/:id', (req, res) => {
    const event = eventsTest.find(event => event._id === req.params.id);
    res.json(event);
})



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`);
});