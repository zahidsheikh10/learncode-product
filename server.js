const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//bring all routes
const save = require("./routes/api/save");

// Middleware for bodyparser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json()); 

// mongoDB config
const db = require('./setup/myurl').mongoURL

// Connect to Database
mongoose
    .connect(db)
    .then(() => {
        console.log('Connection Sucessful');
    })
    .catch( (error) => {
        console.log(error);
    })
    

//Routes

// Testing route
app.get('/',(req,res) => {
    res.send('Assignment task of SIS ');
});

//Actual Route
app.use('/api/save',save);

app.listen(port,() => {
    console.log(`Server is running at Port : ${port}`);
});
