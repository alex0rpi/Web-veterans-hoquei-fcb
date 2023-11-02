import express from 'express';
import Post from '../models/post.js';
import authenticate from '../middleware/authenticate.js';
import slugify from 'slugify';

const router = express.Router();

router.get('/admin/user-posts', authenticate, (req, res) => {
  res.render('admin/userPosts');
});

router.get('/admin/create-post', authenticate, (req, res) => {
  res.render('admin/createPost');
});

router.post('/admin/create-post', authenticate, async (req, res) => {
  const { season, title, summary, content } = req.body;

  try {
    const slug = slugify(title, { lower: true, strict: true });
    await Post.create({ season, title, slug, summary, content, author: req.userId });

    console.log('post created');

    res.status(204).redirect('/admin/user-posts');
  } catch (error) {
    console.log('error: ', error);
  }
});

router.post('admin/post/update/:id', authenticate, async (req, res) => {});
router.post('admin/post/delete/:id', authenticate, async (req, res) => {});

export default router;
