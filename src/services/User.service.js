const { User } = require('../models');

const getAll = () => {
  const users = User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getByEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (id) => {
  const user = User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return user;
};

const createUser = ({ displayName, email, password, image }) => {
  const user = User.create({ displayName, email, password, image });
  return user;
};

module.exports = {
  getAll,
  getByEmail,
  getByUserId,
  createUser,
};