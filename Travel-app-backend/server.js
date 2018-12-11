require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
// let express = require('express'),
//     app = express(),
//     port = process.env.PORT || 3000,
//     mongoose = require('mongoose'), //created model loading here
//     bodyParser = require('body-parser');

// // mongoose instance connection url connection
// mongoose.connect('mongodb://localhost:27017/Travel-app', {
//     useMongoClient: true
// });
const rtsIndex = require('./routes/index.router');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', rtsIndex);

// error handling for whole application
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
    else{
        console.log(err);
    }
});

// mongodb://localhost:27017/Travel-app


// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));