const express = require('express');
const userRoutes = express.Router();
const {addUser,getAllUsers,getUser} = require('../controller/user2.controll');

userRoutes.post('/add-user', addUser);
userRoutes.get('/get-all-users', getAllUsers);
userRoutes.get('/get-user', getUser);

module.exports = userRoutes; 