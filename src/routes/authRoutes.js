import express from 'express';

const router = express.Router();

router.get('/auth/login', (req, res) => {
  res.render('auth/login');
});

export default router;
