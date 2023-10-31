import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: {
      value: true,
      message: 'Title is required',
    },
  },
  slug: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

export default mongoose.model('User', userSchema);
