import mongoose from 'mongoose';
import dotenv from 'dotenv';
import usersTest from './server/data/usersTest.js';
import eventsTest from './server/data/eventsTest.js';
import User from './server/models/UserModel.js';
import Event from './server/models/EventModel.js';
import Participation from './server/models/ParticipationModel.js';
//import Review from './server/models/ReviewModel.js';
import connectMongodb from './server/config/mongodb.js';

dotenv.config()
connectMongodb()

const importEntries = async () => {
    try {
        // Delete all entries
        await Participation.deleteMany();
        //await Review.deleteMany();
        await Event.deleteMany();
        await User.deleteMany();

        // Import new entries
        const newUsers = await User.insertMany(usersTest);
        const programManager = newUsers[0]._id; // Get PM
        const committeeLead = newUsers[1]._id; // Get CL
        const newEvents = eventsTest.map(event => {
            // Add committee Lead as creator of the events
            return { ...event, creator: committeeLead}
        })
        await Event.insertMany(newEvents);

        // Print entries and exit
        console.log('Entries imported');
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const deleteAllEntries = async () => {
    try {
        // Delete all entries
        await Participation.deleteMany();
        //await Review.deleteMany();
        await Event.deleteMany();
        await User.deleteMany();

        // Status and exit
        console.log('Entries deleted');
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

if (process.argv[2] === '-d')
    deleteAllEntries();
else
    importEntries();
