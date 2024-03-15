import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import statusCheckRoutes from '../routes/statusCheckRoutes';
import eventRoutes from '../routes/eventRoutes';
import messageRoutes from '../routes/messageRoutes';
import problemRoutes from '../routes/problemRoutes';
import loggerMiddleware from '../middlewares/loggerMiddleware';
import corsMiddleware from '../middlewares/corsMiddleware';
import corsOptions from '../config/corsOptions';

const serverConnection = {
  start: async () => {
    try {
      const app = express();

      // Static files middleware
      app.use(express.static('public'));

      // Body parser middleware
      app.use(bodyParser.json());
  
      // configuring Cross Origin Request Sharing
      app.use(corsMiddleware);
      app.use(cors(corsOptions));

      // Logger middleware
      app.use(loggerMiddleware);
      
      // Routes
      app.use(eventRoutes);
      app.use(messageRoutes);
      app.use(statusCheckRoutes);
      app.use(problemRoutes);

      // Start the server
      app.listen(process.env.PORT || 3000);
      console.info(`Node.js Express listening on port: ${process.env.PORT || 3000}`);

    } catch (error) {
      console.error('Error starting the server:', error);
      throw error; 
    }
  },
};

module.exports = serverConnection;
