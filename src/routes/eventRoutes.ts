import express from 'express';
const router = express.Router();
import eventController from '../controllers/eventController';
import messageController from '../controllers/messageController';

router.post('/addEvent', eventController.addEvent);



export default router;