const express = require('express');
const userRoutes = express.Router();
const {registerUser,
       loginUser, 
       addUser,
       getAllUsers,
       getUser} = require('../controller/user2.controll');

userRoutes.post('/register-user',registerUser);
userRoutes.post('/login-user',loginUser);
// userRoutes.post('/add-user', addUser);
userRoutes.get('/get-all-users', getAllUsers);
// userRoutes.get('/get-user', getUser);

module.exports = userRoutes;    