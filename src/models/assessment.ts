import mongoose from 'mongoose';
import Problem from './problem';
const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
    problems: [Problem],

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: false,
   
    }
});

const Assessment = mongoose.model("Assessment",assessmentSchema);

export default Assessment;