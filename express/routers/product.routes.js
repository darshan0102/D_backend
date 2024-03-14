const express = require('express');
const ProjectRoutes = express.Router();

const {addProject, getAllProject, getProject, updateProduct, deleteProduct} = require('../controller/product.controll');

ProjectRoutes.post('/add-Product', addProject);
ProjectRoutes.get('/get-all-Product', getAllProject);
ProjectRoutes.get('/get-Product', getProject);
ProjectRoutes.put('/put-Product', updateProduct); 
ProjectRoutes.delete('/delete-Product', deleteProduct); ;

module.exports = ProductRoutes;