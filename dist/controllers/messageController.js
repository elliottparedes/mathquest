"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messageService = require('../services/messageService');
const mailService = require('../services/mailService');
const messageController = {
    addMessage: (req, res) => {
        try {
            const messageData = req.body;
            messageService.addMessage(messageData);
            mailService.sendMessageEmail(messageData);
            res.status(200).json({ messageData });
        }
        catch (error) {
            console.error('Error creating message: ', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};
exports.default = messageController;
