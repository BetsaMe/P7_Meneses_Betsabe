const express = require('express');
const app = express();
const postRoutes= require('./routes/post');
const userRoutes= require('./routes/user');
require('./database/associations');


// Body pars
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/', (req, res, next) => {
  res.json('Hello world')

});


app.use('/api/posts', postRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;