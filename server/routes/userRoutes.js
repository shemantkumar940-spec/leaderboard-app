import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Get all users sorted by points (leaderboard)
router.get('/', async (req, res) => {
  const users = await User.find().sort({ points: -1 });
  users.forEach((user, idx) => (user.rank = idx + 1));
  res.json(users);
});

// Add a new user
router.post('/', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name required' });
  try {
    const user = new User({ name });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
