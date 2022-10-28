require('dotenv/config');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateJWT = (user) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId: user.id } }, JWT_SECRET, jwtConfig);
  return token;
};

module.exports = generateJWT;