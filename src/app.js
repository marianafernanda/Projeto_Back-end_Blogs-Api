const express = require('express');
const Login = require('./controllers/Login.controller');
const User = require('./controllers/User.controller');
const Category = require('./controllers/Category.controller');
const BlogPost = require('./controllers/BlogPost.controller');
const validateUser = require('./auth/validateUser');
const validateJWT = require('./auth/validateJWT');
// ...

const app = express();

app.use(express.json());

// ...

app.get('/user', validateJWT, User.getAll);
app.get('/user/:id', validateJWT, User.getByUserId);
app.get('/categories', validateJWT, Category.getAll);
app.get('/post', validateJWT, BlogPost.getAll);
app.post('/login', Login);
app.post('/user', validateUser, User.createUser);
app.post('/categories', validateJWT, Category.createCategory);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
