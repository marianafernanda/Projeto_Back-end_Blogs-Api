const UserService = require('../services/User.service');
const generateJWT = require('../auth/generateJWT');

const getAll = async (req, res) => {
  try {
    const users = await UserService.getAll();
    if (!users) return res.status(400).json({ message: 'Usuários não encontrados' });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getByUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getByUserId(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

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
  getAll,
  getByUserId,
  createUser,
};