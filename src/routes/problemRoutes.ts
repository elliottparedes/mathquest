import express from 'express';
const router = express.Router();
import multer, { Multer } from 'multer';

import problemController from '../controllers/problemController';

// Initialize multer for file uploads
const upload: Multer = multer();

router.post('/addProblem',upload.single('file') ,problemController.addStaarProblem);

router.get('/getStaarProblemsByYear', problemController.getStaarProblemsByYear);

router.delete('/deleteStaarProblem', problemController.deleteStaarProblemById);

export default router;