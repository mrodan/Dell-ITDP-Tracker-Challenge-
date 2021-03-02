import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    password: {type: String, required: true },
    email: { type: String, default: 'abc@dell.com', lowercase: true },
    mobile: { type: String, default: '123', trim: true },
    image: { type: String, default: "" },
    department: { type: String, default: 'None'},
    role: { type: String, required: true, default: 'participant'},
    quarterGoal: {type: Number, default: 2}
}, { timestamps: true })

// Runs before save
userSchema.pre('save', (function (next) {
    // If password has not been modified, then dont hash it
    if (!this.isModified('password'))
        return next();

    // If modified, hash it
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if (err)
            return next(err);
        
        this.password = hashedPassword;
        next();
    });
}));


// Compare plain text password from client to encrypted from DB
userSchema.methods.comparePassword = function (password, callback) {
    // callback is passport 'done' function
    // bcrypt.compare(password, encryptedPassword, callback(err, isMatch))
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err)
            return callback(err);
        else {
            if (!isMatch)
                return callback(null, isMatch); // Does not match

            return callback(null, this); // When match.. 'this' is the user
        }
    });
}

export default mongoose.model('User', userSchema);