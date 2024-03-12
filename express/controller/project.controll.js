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

exports.getAllProject = async(req, res) => {
    try {
        const project = await Project.find({isDelete: false});
        res.status(201).json(project);
    }
    catch (error) {
     console.log(error);
     res.status(500).json({message : 'Internal Server Error...'});
}
};

exports.getProject = async (req, res) => {
    try {
        let projectId = req.query.projectId;
        let project = await Project.findOne({_id:projectId,isDelete:false});
        // let user = await user.findOne({ firstName: userId})
        if (!project) {
            return res.status(404).json({message :'User not found'});
        }
        res.status(200).json(project);
       }
       catch (error) {
        console.log (error);
        res.status(500).json({ message: `Internal Server Error... ${error.message}` });
       }
};
exports.updateProduct = async(req, res) => {
    try {
        let projectId = req.query.projectId;
        let project = await Project.findById(projectId);
        // let user = await user.findOne({ firstName: userId})
        if (!project) {
            return res.status(404).json({message :'User not found'});
        }
        
        //
        project = await Project.findOneAndUpdate({_id:project._id},{$set: {...req.body}},{new: true});
        res.status(200).json({project, message: 'Updated successfully'});
    }
    catch (error) {
        console.log (error);
        res.status(500).json({ message: 'Internal Server Error...'});
    }
};
exports.deleteProduct = async (req, res) => {
    try {
        let projectId = req.query.projectId;
        let project = await Project.findById(projectId);
        // let user = await user.findOne({ firstName: userId})
        if (!project) {
            return res.status(404).json({message :'User not found'});
        }
        
        //
        project = await Project.findOneAndUpdate({_id:project._id},{isDelete:true},{new:true});
        res.status(200).json({project, message: 'Deleted successfully'});
    }
    catch (error) {
        console.log (error);
        res.status(500).json({ message: 'Internal Server Error...'});
    }
}; 