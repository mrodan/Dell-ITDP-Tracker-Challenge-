import mongoose from 'mongoose';

const participationSchema = new mongoose.Schema({
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
    participant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    attendance: { type: Boolean, default: false }
}, { timestamps: true })

export default mongoose.model('Participation', participationSchema);