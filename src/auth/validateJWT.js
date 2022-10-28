require('dotenv/config');
const jwt = require('jsonwebtoken');
const UserService = require('../services/User.service');

const { JWT_SECRET } = process.env;

const validateJWT = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await UserService.getByUserId(decoded.data.userId);
    
    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateJWT;