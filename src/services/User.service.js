const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (id) => User.findOne({ where: { id } });

module.exports = {
  getByEmail,
  getByUserId,
};