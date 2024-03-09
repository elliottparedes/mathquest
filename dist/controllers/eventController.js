"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventService_1 = __importDefault(require("../services/eventService"));
const mailService = require('../services/mailService');
const eventController = {
    addEvent: (req, res) => {
        try {
            const eventData = req.body;
            eventService_1.default.addEvent(eventData);
            mailService.sendNewEventEmail(eventData);
            res.status(200).json({ eventData });
        }
        catch (error) {
            console.error('Error creating event: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
exports.default = eventController;
