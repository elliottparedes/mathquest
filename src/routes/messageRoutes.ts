import express from 'express';
const router = express.Router();
import messageController from '../controllers/messageController';


router.post('/addMessage', messageController.addMessage);

export default router;