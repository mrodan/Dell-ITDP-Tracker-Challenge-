import mongoose from 'mongoose';

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

export default mongoose.model('User', userSchema);