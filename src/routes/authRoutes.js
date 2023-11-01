import bcrypt from 'bcrypt';
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.get('/auth/login', (req, res) => {
  res.render('auth/login');
});

router.get('/auth/register', (req, res) => {
  res.render('auth/register');
});

router.post('/auth/register', async (req, res) => {
  const { email, name, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.json({ message: 'Passwords do not match' });
  }
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await User.create({ email, name, password: hashedPassword });
  return res.status(204).send();
});

router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    return res.json({ message: 'User does not exist.' });
  }

  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) {
    return res.json({ message: 'Invalid credentials' });
  }
  await User.create({ name, email, password: hashedPassword });
  // crear token, store in cookies etc.
  res.status(204).render('post/userPosts');
});

export default router;
