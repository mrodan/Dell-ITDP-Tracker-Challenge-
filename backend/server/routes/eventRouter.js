import express from 'express';
import passport from 'passport';
import Event from '../models/EventModel.js';
import * as eventController from '../controllers/eventController.js';

const eventRouter = express.Router();


eventRouter.get('/featured', eventController.getFeaturedEvents);
eventRouter.get('/:id', passport.authenticate('jwt', { session: false }), eventController.getEventById);
eventRouter.post('/newevent', passport.authenticate('jwt', { session: false }), eventController.newEvent);
eventRouter.post('/register/:id', passport.authenticate('jwt', { session: false }), eventController.registerToEvent)
//eventRouter.post('/attendance/:id', passport.authenticate('jwt', { session: false }), eventController.attendedToEvent)


//postRouter.post('/like', passport.authenticate('jwt', { session: false }), postController.likePost);
//postRouter.post('/unlike', passport.authenticate('jwt', { session: false }), postController.unlikePost);
//postRouter.get('/checklike/:_id', passport.authenticate('jwt', { session: false }), postController.checkLike);

export default eventRouter;