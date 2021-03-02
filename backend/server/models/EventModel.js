import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: {type: String, required: true },
}, { timestamps: true })

const eventSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true, unique: true },
    description: { type: String },
    type: {type: String, required: true },
    location: { type: String, default: 'virtual' },
    date_start: { type: String, required: true },
    date_end: { type: String, required: true },
    image: { type: String, default: "" },
    reviews: [reviewSchema],
    rating: {type: Number, required: true, default: 0},
    reviewCount: {type: Number, required: true, default: 0},
}, { timestamps: true })

export default mongoose.model('Event', eventSchema);