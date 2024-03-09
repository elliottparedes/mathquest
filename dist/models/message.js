"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    comments: {
        type: String
    }
});
const Message = mongoose.model("Message", messageSchema);
exports.default = Message;
