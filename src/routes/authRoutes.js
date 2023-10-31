import express from 'express';

const router = express.Router();

router.get('/auth/login', (req, res) => {
  res.render('auth/login');
});

router.get('/auth/register', (req, res) => {
  res.render('auth/register');
});

router.post('/auth/register', async (req, res) => {
  const { name, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.json({ message: 'Password does not match' });
  }
  const hashedPassword = await bcrypt.hash(password, 12);
  await User.create({ name, email, password: hashedPassword });
  res.status(204).render('post/userPosts');
});

router.post('/auth/login', async (req, res) => {
  const { name, password } = req.body;

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.json({ message: 'Invalid credentials' });
  }
  await User.create({ name, email, password: hashedPassword });
  // crear token, store in cookies etc.
  res.status(204).render('post/userPosts');
});

export default router;
