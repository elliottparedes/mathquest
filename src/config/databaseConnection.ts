 //mongoose = require('mongoose');
 import mongoose from 'mongoose';
mongoose.set('strictQuery',true);

const databaseConnection = {
  connect: async () => {
    try {
      const uri = process.env.CONNECTIONSTRING;
      await mongoose.connect(uri);
      
      console.info('Connected to MongoDB Atlas');
    } catch (err) {
      console.error('Error connecting to MongoDB Atlas:', err);
      throw err;
    }
  },
};

module.exports = databaseConnection;