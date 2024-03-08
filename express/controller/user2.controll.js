const User = require('../model/user2.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




exports.addUser = async (req,res) => {
    try{
        const {firstName, lastName, gender, email, password, age} = req.body;
        console.log(req.body);
        let newUser = await User.create({
            firstName,
            lastName,
            gender,
            email,
            password,
            age
        });
        newUser.save();
        res.status(201).json({user : newUser, message : 'New User Is Added...'});
    }catch(err){
        console.log(err);
        res.status(500).json({message : 'Internal Server Error...'});
    }
};

exports.getAllUsers = async(req, res) => {
    try {
        let users = await User.find();
        res.status(201).json(users);
    }
    catch (error) {
     console.log(error);
     res.status(500).json({message : 'Internal Server Error...'});
}
};

exports.getUser = async (req, res) => {
    try {
        let userId = req.query.userId;
        let user = await User.findById(userId);
        // let user = await user.findOne({ firstName: userId})
        if (!user) {
            return res.status(404).json({message :'User not found'});
        }
        res.status(200).json(user);
       }
       catch (error) {
        console.log (error);
        res.status(500).json({ message: 'Internal Server Error...'});
       }
};
