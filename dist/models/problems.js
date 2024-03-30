"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const eventSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String
    },
    standard: {
        type: String
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: false,
    }
});
const Event = mongoose_1.default.model("Event", eventSchema);
exports.default = Event;
