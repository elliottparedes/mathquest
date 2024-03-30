"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const problem_1 = __importDefault(require("./problem"));
const Schema = mongoose_1.default.Schema;
const assessmentSchema = new Schema({
    problems: [problem_1.default],
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: false,
    }
});
const Assessment = mongoose_1.default.model("Assessment", assessmentSchema);
exports.default = Assessment;
