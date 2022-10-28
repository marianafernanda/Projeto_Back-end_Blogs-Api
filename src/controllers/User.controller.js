const UserService = require('../services/User.service');
const generateJWT = require('../auth/generateJWT');

const getAll = async (_req, res) => {
    const users = await UserService.getAll();
    return res.status(200).json(users);
};

const getByUserId = async (req, res) => {
    const { id } = req.params;
    const user = await UserService.getByUserId(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
};

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const user = await UserService.createUser({ displayName, email, password, image });

    const token = generateJWT(user);
    
    return res.status(201).json({ token });
};

module.exports = {
  getAll,
  getByUserId,
  createUser,
};