const UserService = require('../services/User.service');
// const validateUser = require('../auth/validateUser');
const generateJWT = require('../auth/generateJWT');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await UserService.createUser({ displayName, email, password, image });

    const token = generateJWT(user);
    
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,
};