// mongoose model for a student

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    username:{ 
        type: String,
        required:true,
        
    },
    email: {
        type: String,
        required:true,
    },
    grade: {
        type: String
    },
    school: {
        type: String
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: false,
   
    }
});