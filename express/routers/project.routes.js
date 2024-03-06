const express = require('express');
const ProjectRoutes = express.Router();

const {addProject, getAllProject} = require('../controller/project.controll');

ProjectRoutes.post('/add-Project', addProject);
ProjectRoutes.get('/get-all-Project', getAllProject);
// ProjectRoutes.get('/get-Project', getProject);

module.exports = ProjectRoutes;