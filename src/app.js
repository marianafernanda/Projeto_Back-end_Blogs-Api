const express = require('express');
const Login = require('./controllers/Login.controller');
const User = require('./controllers/User.controller');
const validateUser = require('./auth/validateUser');
const validateJWT = require('./auth/validateJWT');
// ...

const app = express();

app.use(express.json());

// ...

app.post('/login', Login);
app.post('/user', validateUser, User.createUser);
app.get('/user', validateJWT, User.getAll);
app.get('/user/:id', validateJWT, User.getByUserId);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
