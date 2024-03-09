const database = require('./config/databaseConnection');
const server = require('./config/server');

require("dotenv").config();

const initializeApp = async () => {
    try {
        await database.connect();
        await server.start();
    } catch (error) {
      console.error('Error initializing the app:', error);
      process.exit(1); 
    }
  };
  
  initializeApp();