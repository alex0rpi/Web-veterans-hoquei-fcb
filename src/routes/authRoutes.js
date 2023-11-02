import bcrypt from 'bcrypt';
import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

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
  return res.status(204).redirect('/auth/login');
});

router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ message: 'User does not exist.' });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ message: 'Invalid credentials' });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    req.session.isLoggedIn = true;
    res.cookie('token', token, { maxAge: 1000 * 60 * 60, httpOnly: true });
    // if we deploy this app, we should add the property secure: true to the cookie

    res.status(204).redirect('/admin/user-posts');
  } catch (error) {
    res.json({ message: error.message });
  }
});

export default router;
