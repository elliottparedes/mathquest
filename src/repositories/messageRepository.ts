const Message = require('../models/message');

const messageRepository = {
    addMessage: async (messageData) => {
        
        try {
            const message =  new Message(messageData);
            const savedMessage = await message.save();
            console.info("Saved this message: \n" + JSON.stringify(savedMessage));
            return message;
        } catch (error) {
            console.error(error);
            throw error;
            
        }

    },

    getMessageById: async (messageId) => {
        try {
            const message = await Message.findById(messageId);
            return message;
          } catch (error) {
            console.error(error);
            throw error;
          }
    },

}

export default messageRepository;