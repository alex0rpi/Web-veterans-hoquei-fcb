import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const { token } = req.cookies;
  // console.log('token: ', token);
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // we add the userId to the request object so that we can access it in the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authenticate;
