"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require('../models/message');
const messageRepository = {
    addMessage: (messageData) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const message = new Message(messageData);
            const savedMessage = yield message.save();
            console.info("Saved this message: \n" + JSON.stringify(savedMessage));
            return message;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }),
    getMessageById: (messageId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const message = yield Message.findById(messageId);
            return message;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }),
};
exports.default = messageRepository;
