const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');
var email = require("emailjs/email");

module.exports.register = (req, res, next) => {
    // console.log('inside register fnc');
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.contactno = req.body.contactno;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['fullName', 'email']) });
        }
    );
}

module.exports.email = function (req, res) {
    
    var server = email.server.connect({
        user: "bhavya.pathak29@gmail.com",
        password: "bppp0605",
        host: "smtp.gmail.com",
        ssl: true,
        port: 587
    });

    // send the message and get a callback with an error or details of the message that was sent
    server.send({
        text: "i hope this works",
        from: "you <bhavya.pathak29@gmail.com>",
        to: req.body.email , 
        // another <another@your-email.com>",
        cc: "",
        subject: "testing emailjs"
    }, function (err, message) { console.log(err || message); });
}

