const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getByEmail = (email) => User.findOne({ where: { email } });

const getByUserId = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return user;
};

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.create({ displayName, email, password, image });
  return user;
};

module.exports = {
  getAll,
  getByEmail,
  getByUserId,
  createUser,
};