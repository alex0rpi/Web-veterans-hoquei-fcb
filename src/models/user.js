import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

// Middleware to delete user's posts when user is removed
userSchema.pre('remove', function (next) {
  Post.deleteMany({ author: this._id }).exec();
  next();
});

export default mongoose.model('User', userSchema);
