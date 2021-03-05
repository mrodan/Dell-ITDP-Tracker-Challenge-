import express from 'express';
import passport from 'passport';
import * as userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/info/:id', passport.authenticate('jwt', {session: false}), userController.getUser);
userRouter.get('/events/:id', passport.authenticate('jwt', {session: false}), userController.getUserEvents);
userRouter.post('/eventregister', passport.authenticate('jwt', {session: false}), userController.registerToEvent);
userRouter.post('/search', userController.searchUser);


export default userRouter;