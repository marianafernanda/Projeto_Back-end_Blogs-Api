const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (id) => User.findOne({ where: { id } });

const createUser = ({ displayName, email, password, image }) => {
  const user = User.create({ displayName, email, password, image });
  return user;
};

module.exports = {
  getByEmail,
  getByUserId,
  createUser,
};