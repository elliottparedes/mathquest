import eventService from '../services/eventService';
const mailService = require('../services/mailService');

const eventController = {
    addEvent :  ( req, res) => {
        try {
        const eventData = req.body;
        eventService.addEvent(eventData);
        mailService.sendNewEventEmail(eventData);
        res.status(200).json({eventData});

        } catch ( error){
            console.error('Error creating event: ', error);
            res.status(500).json({error:'Internal Server Error'});
        }
      
    },
};

export default eventController;