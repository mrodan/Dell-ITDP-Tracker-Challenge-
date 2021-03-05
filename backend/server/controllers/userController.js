import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import Event from '../models/EventModel.js';
import Participation from '../models/ParticipationModel.js';

// @desc Fetch user
// @route GET /users/:id
// @access Authenticated
export const getUser = async (req, res) => {
    try {
        await User.findById(req.params.id)
            .then(selectedUser => {
                if (!selectedUser)
                    return res.status(403).json({ message: { messageBody: "Error, no user", messageError: true } });

                selectedUser.password = undefined;
                return res.status(200).send(selectedUser);
            })
            .catch(err => {
                //console.log(err);
                return res.status(403).json({ message: { messageBody: "Error getting user from DB", messageError: true } });
            })
    } catch (error) {
        console.log(error);
        return res.status(403).json({ message: { messageBody: "Error getting user from DB", messageError: true } });
    }
}

// @desc Register user to event
// @route POST /users/eventregister
// @access P (only profile owner), CL & PM
export const registerToEvent = async (req, res) => {
    try {
        // Check req data
        if (!req.body.participant)
            res.status(422).json({ message: { messageBody: "Please, specify participant", messageError: true } });
        
        const newParticipation = new Participation({
        })

        // Get participant
        await User.findById(req.body.userid)
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
        await Event.findById(req.body.eventid)
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
                //console.log(err);
                res.status(500).json({ message: { messageBody: "Error has occured (saving Participation)", messageError: true } });
            })
    } catch (error) {
        //console.log(error);
        res.status(500).json({ message: { messageBody: "Error has occured", messageError: true } });
    }
}


// @desc Fetch user registered events
// @route GET /users/events:id
// @access Authenticated
export const getUserEvents = async (req, res) => {
    await Participation.find({participant: req.params.id}).populate("event")
        .then(events => {
            return res.status(200).send(events);
        })
        .catch(err => {
            console.log(err);
            return res.status(403).json({ message: { messageBody: "Error getting user from DB", messageError: true } });
        })
}

// @desc Fetch from search bar
// @route GET /users/searchbar
// @access PM
export const searchUser = (req, res) => {
    if (req.body.searchValue == "")
        return res.status(200);

    const searchPattern = new RegExp('^' + req.body.searchValue);
    User.find({ fullName: { $regex: searchPattern } })
        .select('_id username fullName profileImage_PublicId')
        .then(user => {
            return res.status(200).json({ user })
        })
        .catch(err => {
            return res.status(403).json({ message: { messageBody: "Error searching user from DB", messageError: true } });
        })
}