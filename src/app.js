const express = require('express');
const Login = require('./controllers/Login');
// const validateJWT = require('./auth/validateJWT');
// ...

const app = express();

app.use(express.json());

// ...

app.post('/login', Login);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
