import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  season: {
    type: String,
    required: {
      value: true,
      message: 'Season is required',
    },
  },
  title: {
    type: String,
    required: {
      value: true,
      message: 'Title is required',
    },
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
