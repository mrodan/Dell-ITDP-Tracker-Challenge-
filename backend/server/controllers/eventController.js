import mongoose from 'mongoose';
import Event from '../models/EventModel.js';
import Participation from '../models/ParticipationModel.js';
import User from '../models/UserModel.js';
import asyncHandler from 'express-async-handler'

// @desc Fetch featured events
// @route GET /events/featured
// @access Public
export const getFeaturedEvents = asyncHandler(async (req, res) => {
    const featuredEvents = await Event.find({});
    res.json(featuredEvents);
})


// @desc Fetch event by id
// @route GET /events/:id
// @access Authenticated
export const getEventById = asyncHandler(async (req, res) => {
    const event = await Event.findById(req.params.id);
    
    if (event)
        res.json(event);
    else
        res.status(404).json({ message: 'Event not found' });
})


// @desc New event
// @route POST /events/newevent
// @access CL & PM
export const newEvent = async (req, res) => {
    try {
        // Check req data
        if (!req.body.name || !req.body.description || !req.body.type || !req.body.location || !req.body.date || !req.body.time)
            res.status(422).json({ message: { messageBody: "Please, fill necessary event info", messageError: true } });
        
        // Init new event
        const newEvent = new Event({
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            location: req.body.location,
            date: req.body.date,
            time: req.body.time,
        })

        const eventCreator = req.user;
        eventCreator.password = undefined;
        if (eventCreator.role == 'P')
            res.status(422).json({ message: { messageBody: "Participants cannot create new events", messageError: true } });
        newEvent.creator = eventCreator;

        // Save new event
        try {
            await newEvent.save()
                .then(event => {
                    res.status(200).json({ message: { messageBody: "Succesfully created", messageError: false } });
                })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: { messageBody: "Error has ocurred (saving event)", messageError: true } });
        }
    } catch (error) {
        //console.log(error);
        res.status(500).json({ message: { messageBody: "Error (creating event)", messageError: true } });
    }
}


// @desc Register to Event
// @route POST /events/register
// @access P (only profile owner), CL & PM
export const registerToEvent = async (req, res) => {
    try {
        // Check req data
        if (!req.body.participant)
            res.status(422).json({ message: { messageBody: "Please, specify participant", messageError: true } });
        
        const newParticipation = new Participation({
        })

        // Get participant
        await User.findOne({$or: [{ username: req.body.participant }, { fullName: req.body.participant }, { email: req.body.participant }]})
            .then(user => {
                if (user)
                    newParticipation.participant = user;
                else
                    res.status(422).json({ message: { messageBody: "No user found", messageError: true } });
            })
            .catch(err => {
                //console.log(err);
                res.status(500).json({ message: { messageBody: "Error has occured (searching for user creating new Participation)", messageError: true } });
            })
        
        // Get event
        await Event.findById(req.params.id)
            .then (event => {
                if (event)
                    newParticipation.event = event;
                else
                    res.status(422).json({ message: { messageBody: "No event found", messageError: true } });
            })
            .catch(err => {
                //console.log(err);
                res.status(500).json({ message: { messageBody: "Error has occured (searching for event creating new Participation)", messageError: true } });
            })

        await newParticipation.save()
            .then(participation => {
                res.status(200).json({ message: { messageBody: "Succesfully registered", messageError: false } });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ message: { messageBody: "Error has occured (saving Participation)", messageError: true } });
            })
    } catch (error) {
        //console.log(error);
        res.status(500).json({ message: { messageBody: "Error has occured", messageError: true } });
    }
}
