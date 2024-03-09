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
const nodemailer = require('nodemailer');
const fs = require('fs');
const ejs = require('ejs');
const mailer = {
    sendNewEventEmail: (eventInfo) => __awaiter(void 0, void 0, void 0, function* () {
        const emailTemplate = fs.readFileSync('src/api/V1/HTML_Templates/newEventTemplate.ejs', 'utf-8', function (err, data) {
            ejs.render(data, { eventInfo });
        });
        const htmlContent = ejs.render(emailTemplate, { eventInfo });
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAILUSERNAME,
                pass: process.env.EMAILPASSWORD
            }
        });
        var mailOptions = {
            from: process.env.EMAILUSERNAME,
            to: process.env.RECIPIENT,
            subject: "NEW EVENT REQUESTED",
            html: htmlContent
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
    }),
    sendMessageEmail: (messageInfo) => __awaiter(void 0, void 0, void 0, function* () {
        const emailTemplate = fs.readFileSync('src/api/V1/HTML_Templates/newMessageTemplate.ejs', 'utf-8', function (err, data) {
            ejs.render(data, { messageInfo });
        });
        const htmlContent = ejs.render(emailTemplate, { messageInfo });
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAILUSERNAME,
                pass: process.env.EMAILPASSWORD
            }
        });
        var mailOptions = {
            from: process.env.EMAILUSERNAME,
            to: process.env.RECIPIENT,
            subject: "MESSAGE RECEIVED",
            html: htmlContent
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
    })
};
exports.default = mailer;
