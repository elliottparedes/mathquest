import express from 'express';
const router = express.Router();
import eventController from '../controllers/eventController';
import problemController from '../controllers/problemController';
import {ProblemType} from '../types/types';
import messageController from '../controllers/messageController';


router.get('/getProblem', problemController.getProblem);

router.get('/getProblemTypes', (req,res) => {res.send("Here are the problem types" + "addition")});

export default router;