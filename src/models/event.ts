import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name:{ 
        type: String,
        required:true,
        
    },
    email: {
        type: String,
        required:true,
    },
    phone: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    people: {
        type : String
    },
    type: {
        type: String
    },
    location: {
        type: String
    },
    hear : {
        type: String
    },
    comments : {
        type: String
    },
    
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: false,
   
    }
});

const Event = mongoose.model("Event",eventSchema);

export default Event;