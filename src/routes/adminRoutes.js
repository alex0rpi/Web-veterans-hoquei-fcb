import express from 'express';
import Post from '../models/post.js';
import authenticate from '../middleware/authenticate.js';
import slugify from 'slugify';

const router = express.Router();

router.get('/admin/user-posts', authenticate, async (req, res) => {
  const user = req.session.user;
  try {
    const posts = await Post.find({ author: user.userId }).sort({ createdAt: -1 }).exec();
    // console.log('posts: ', posts);
    // send the posts array to the view 'admin/userPosts'

    res.render('admin/userPosts', { posts });
  } catch (error) {}
});

router.get('/admin/create-post', authenticate, (req, res) => {
  res.render('admin/createPost');
});

router.post('/admin/create-post', authenticate, async (req, res) => {
  const { season, title, summary, content } = req.body;
  const user = req.session.user;
  try {
    const slug = slugify(title, { lower: true, strict: true });
    await Post.create({ season, title, slug, summary, content, author: user.userId });

    res.status(204).redirect('/admin/user-posts');
  } catch (error) {
    console.log('error: ', error);
  }
});

router.get('/admin/me', authenticate, (req, res) => {
  res.render('admin/userData');
});

router.post('admin/post/update/:id', authenticate, async (req, res) => {});
router.post('admin/post/delete/:id', authenticate, async (req, res) => {});

export default router;
