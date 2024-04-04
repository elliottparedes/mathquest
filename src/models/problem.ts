import mongoose, { Document, Schema } from 'mongoose';
import { StaarInfo}  from '../types/types';

    interface StaarProblem {
    instruction: string;
    answer: string;
    imageUrl: string;
    imageFileName: string;
    standard: string;
    difficultyLevel: string;
    staarInfo: StaarInfo;
    createdAt: Date;
}

const problemSchema = new Schema<StaarProblem & Document>({
    instruction:{ 
        type: String,
        required:true,
        
    },
    answer: {
        type: String,
        required:true,
    },
    imageUrl: {
        type: String,
        required: false
    },
    imageFileName: {
        type: String,
        required: false
    },
    standard : {
        type: String
        // some type of hash code
        //  example would be a TEK
    },
    difficultyLevel : {
        type: String
        //  blooms taxonomy 
    },
    staarInfo : {
        type: {
            year: Number,
            questionNumber: Number
        },
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: false,
   
    }
});

const problemModel = mongoose.model<StaarProblem & Document>("Problem",problemSchema);

export default problemModel;