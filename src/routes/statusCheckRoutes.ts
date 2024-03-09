import express from 'express';
const router = express.Router();

// Return status 200 OK for health check
router.get('/', (req, res) => {
    res.status(200).send('OK');
});


export default router;