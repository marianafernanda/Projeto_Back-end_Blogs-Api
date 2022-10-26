const { getByEmail } = require('../services/User.service');

// Função para validar email. Fonte: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
const validateEmail = (email) => {
  const re = /\S+@\S+/;
  return re.test(email);
};

const registeredEmail = async (email) => {
  const userEmail = await getByEmail(email);
  return userEmail;
};

const validateUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  if (validateEmail(email) === false) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }

  const check = await registeredEmail(email);
  
  if (check) {
    return res.status(409).json({ message: 'User already registered' });
  } 
    next();
};

module.exports = validateUser;