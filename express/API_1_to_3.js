const express = require('express');
const app = express();
const port = 7070;
const morgan = require('morgan');
const products = require('../express/products.json');

// middleware

app.use(express.json());
app.use(morgan('dev'));

// End-point - CRUD

app.post('/products', (req, res) => {
    // console.log(req.body);
    const products = req.body.body;
    products.push(product);
    // products.push({...req.body});
    res.status(201).json({message: 'product is added.....'})
});


app.get('/products', (req, res) => {
    res.status(201).json(products);
});

app.get('/products/single-product', (req, res) => {
    const id = +req.params.id;
    // console.log(id);
    let product = products.find((item)=> item.id === id)
    res.status(201).json(product);
});

app.listen(port, () => {
    console.log(`server atart at http://localhost:7070`);
})