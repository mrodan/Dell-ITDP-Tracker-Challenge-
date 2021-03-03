import passport from 'passport'; // Auth middleware
import passportLocal from 'passport-local';
import passportJwt from 'passport-jwt';
import User from './models/UserModel.js';

// Extracts jwt token from the request
const cookieExtractor = req => {
    let token = null;
    if (req && req.cookies)
        token = req.cookies["access_token"];
    return token;
}

// Authorization
const JwtStrategy = passportJwt.Strategy;
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtractor, // jwtFromRequest : function to extract cookie
    secretOrKey: "key" // Key used to sign token to verify if token is legit ***************** passport key from process.env
}, (payload, done) => {
    // payload -> data within token (payload.sub is the PK of the user)
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return done(err, false); // Query error
        if (user)
            return done(null, user); // If user exists, return user 
        else
            return done(null, false); // No error, but no user
    });
}));

// Login
export const LocalStrategy = passportLocal.Strategy;
passport.use(new LocalStrategy( (username, password, done) => {
    User.findOne({username}, (err, user) => {
        if (err)
            return done(err); // Query error
        if (!user)
            return done(null, false); // no user exists
        user.comparePassword(password, done); // Check if password is correct
    });
}));