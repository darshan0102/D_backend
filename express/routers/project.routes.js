const express = require('express');
const ProjectRoutes = express.Router();

const {addProject} = require('../controller/project.controll');

ProjectRoutes.post('/add-Project', addProject);

module.exports = ProjectRoutes;