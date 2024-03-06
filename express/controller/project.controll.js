const Project = require('../model/project.model');

exports.addProject = async(req,res) => {
    try{
        const {Title,Description,Price,Category}= req.body;
        console.log(req.body);
        let newProject = await Project.create({
            Title,
            Description,
            Price,
            Category
        });
       newProject.save();
        res.status(201).json({Project:newProject,message: 'Project is added.....'})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message : 'Internal Server Error...'});
    }
};