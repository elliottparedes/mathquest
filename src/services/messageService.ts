const messageRepository = require('../repositories/messageRepository');
const mailer = require('../helpers/mailer');

const messageService = {
    addMessage:async (messageData) => {
      await messageRepository.addMessage(messageData);
    }
}

export default messageService;