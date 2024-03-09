import eventRepository from '../repositories/eventRepository';
const mailer = require('../helpers/mailer');

const eventService = {
    addEvent:async (eventData) => {
      await eventRepository.addEvent(eventData);
    }
}
export default eventService;