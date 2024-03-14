const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// exports.addUser = async (req,res) => {
//     try{
//         const {firstName, lastName, gender, email, password, age} = req.body;
//         console.log(req.body);
//         let newUser = await User.create({
//             firstName,
//             lastName,
//             gender,
//             email,
//             password,
//             age
//         });
//         newUser.save();
//         res.status(201).json({user : newUser, message : 'New User Is Added...'});
//     }catch(err){
//         console.log(err);
//         res.status(500).json({message : 'Internal Server Error...'});
//     }
// };

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, gender, email, password, age } = req.body;
    let user = await User.findOne({ email: email, isDelete: false });
    console.log(user, "User not found");
    if (user) {
      return res.status(400).json({ message: "User is already registered..." });
    }
    // hash password
    let hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword, "pwd");
    user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
      age,
      gender,
    });
    user.save();
    res.status(201).json({ user: user, message: "New User is Added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error ${error.message}` });
  }
};

exports.loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email, isDelete: false });
    if (!user) {
      return res.status(404).json({ message: "User is not found" });
    }
    let chackPassword = await bcrypt.compare(req.body.password, user.password);
    if (!chackPassword) {
      return res.status(400).json({ message: "Password is not correct" });
    }
    let token = jwt.sign({ userId: user._id }, "darshan");
    res.status(200).json({ token, message: "Login successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};

exports.getUser = async (req, res) => {
  try {
    let userId = req.query.userId;
    let user = await User.findById(userId);
    // let user = await user.findOne({ firstName: userId})
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error..." });
  }
};




// const users = require('../user.json');

// exports.addUsers = (req,res) => {
//     const user = req.body;
//     console.log(user);
//     users.push(user);
//     res.status(201).json({message : 'Users Details Added SuccessFully.......'});
// };

// exports.getAllUsers = (req,res) => {
//     res.status(200).json(users);
// };

// exports.getUsers = (req,res) => {
//     const id = +req.query.id;
//     let user = users.find((info) => info.id === id);
//     res.status(200).json(user);
// };

// exports.replaceUsers = (req,res) => {
//     const id = +req.query.id;
//     let usersIndex = users.findIndex((info) => info.id === id);
//     let user = users[usersIndex];
//     users.splice(usersIndex, 1, { ...req.body});
//     res.status(200).json({message : 'Users Data Replace SuccessFully........'});
// };

// exports.updateUsers = (req,res) => {
//     const id = +req.query.id;
//     let usersIndex = users.findIndex((info) => info.id === id);
//     let user = users[usersIndex];
//     users.splice(usersIndex, 1, { ...user, ...req.body});
//     res.status(200).json({message : 'Users Data Replace SuccessFully........'});
// };

// exports.deleteUsers = (req,res) => {
//     const id = +req.query.id;
//     let usersIndex = users.findIndex((info) => info.id === id);
//     let user = users[usersIndex];
//     users.splice(usersIndex, 1);
//     res.status(200).json({message : 'Users Data Delete Successfully.........'});
// };