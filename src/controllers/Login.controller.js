const UserService = require('../services/User.service');
const generateJWT = require('../auth/generateJWT');

const isBodyValid = (email, password) => email && password;

module.exports = async (req, res) => {
    const { email, password } = req.body;
    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await UserService.getByEmail(email);

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = generateJWT(user);

    res.status(200).json({ token });
};