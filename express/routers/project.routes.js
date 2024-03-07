const express = require('express');
const ProjectRoutes = express.Router();

const {addProject, getAllProject, getProject, updateProduct, deleteProduct} = require('../controller/project.controll');

ProjectRoutes.post('/add-Project', addProject);
ProjectRoutes.get('/get-all-Project', getAllProject);
ProjectRoutes.get('/get-Project', getProject);
ProjectRoutes.put('/put-Project', updateProduct); 
ProjectRoutes.delete('/delete-Project', deleteProduct); ;

module.exports = ProjectRoutes;