const { getByEmail } = require('../services/User.service');

const validateName = (name) => {
  if (!name || name.length < 8) {
    return { status: 400, message: '"displayName" length must be at least 8 characters long' };
  }
};

const validatePassword = (password) => {
  if (!password || password.length < 6) {
    return { status: 400, message: '"password" length must be at least 6 characters long' };
  }
};

// Função para validar email. Fonte: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
const valideEmail = (email) => {
  const re = /\S+@\S+/;
  return re.test(email);
};

const validateEmail = async (email) => {
  if (valideEmail(email) === false) {
    return { status: 400, message: '"email" must be a valid email' };
  }

  const userEmail = await getByEmail(email);
  if (userEmail) {
    return { status: 409, message: 'User already registered' };
  }
};

const validateUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  let error = null;

  error = validateName(displayName);

  if (!error) {
    error = validatePassword(password);

    if (!error) {
      error = await validateEmail(email);
    }
  }

  if (error) {
    return res.status(error.status).json({ message: error.message });
  }

  next();
};

module.exports = validateUser;