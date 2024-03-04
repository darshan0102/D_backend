const express = require('express');
const userRouter = express.Router();
const{addUser} = require('../controller/user2.controll');

userRoutes.post('/add-user',addUser);

module.exports = userRoutes;