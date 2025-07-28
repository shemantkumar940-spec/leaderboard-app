import express from 'express';
import ClaimHistory from '../models/ClaimHistory.js';

const router = express.Router();

// Get claim history
router.get('/', async (req, res) => {
  const history = await ClaimHistory.find().populate('userId', 'name').sort({ timestamp: -1 });
  res.json(history);
});

export default router;
