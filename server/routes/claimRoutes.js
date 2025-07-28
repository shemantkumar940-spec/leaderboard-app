import express from 'express';
import User from '../models/User.js';
import ClaimHistory from '../models/ClaimHistory.js';

const router = express.Router();

// Claim random points for a user (allow multiple claims)
router.post('/', async (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ error: 'userId required' });
  const points = Math.floor(Math.random() * 10) + 1;
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  user.points += points;
  await user.save();
  const history = new ClaimHistory({ userId, points });
  await history.save();
  res.json({ user, points });
});

export default router;
