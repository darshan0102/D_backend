const express = require('express');
const app = express();
const port = 7070;
const morgan = require('morgan');
const mongoose = require('mongoose');

async function main()  {
    await mongoose.connect('mongodb://127.0.0.1:27017/darshan');
}
main()
.then(() => console.log('Db is connnected....'))
.catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(morgan('dev'));

const userRoutes = require('./routers/users.routes');
app.use('/users',userRoutes)

app.listen(port,() => {
    console.log(`Server Start At http://localhost:7070`);
});  