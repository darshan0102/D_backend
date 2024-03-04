const mongoose = require('../model/user2.model');

exports.addUser = async (req, res) => {
    try {
        const {firstName, lastName, gender, email, password, age} = req.body;
        console.log(req.body);
        let newUser = await UserActivation.create({
            firstName,
            lastName,
            email,
            password,
            age,
            gender
        });

        newUser.save();
        res.status(201).json({user: newUser, message: 'New User is added'});
    } catch(error){
        console.log(error);
        res.status(500).json({message: 'internal Server Error'});
    }
}