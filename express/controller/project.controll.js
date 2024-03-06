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
        const Project = await Project.find();
        res.status(201).json(Project);
    }
    catch (error) {
     console.log(error);
     res.status(500).json({message : 'Internal Server Error...'});
}
};

// exports.getProject = async (req, res) => {
//     try {
//         let ProjectPrice = req.query.ProjectPrice;
//         let Project = await Project.findByPrice(ProjectPrice);
//         // let user = await user.findOne({ firstName: userId})
//         if (!Project) {
//             return res.status(404).json({message :'User not found'});
//         }
//         res.status(200).json(Project);
//        }
//        catch (error) {
//         console.log (error);
//         res.status(500).json({ message: 'Internal Server Error...'});
//        }
// };
