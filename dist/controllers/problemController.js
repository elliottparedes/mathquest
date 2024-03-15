"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const problemService_1 = __importDefault(require("../services/problemService"));
//const mailService = require('../services/mailService');
const problemController = {
    getProblem: (req, res) => {
        try {
            const problemData = req.query;
            // grab parameters from request
            const returnedProblem = problemService_1.default.getProblem(problemData);
            // eventService.addEvent(eventData);
            // mailService.sendNewEventEmail(eventData);
            res.status(200).json({ returnedProblem });
        }
        catch (error) {
            console.error('Error fetching problem: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
exports.default = problemController;
