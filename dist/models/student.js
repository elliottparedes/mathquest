"use strict";
// mongoose model for a student
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const studentSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
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
