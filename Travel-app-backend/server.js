import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import User from './models/User';
import Blog from './models/blog';
import Feedback from './models/feedback';

const app = express();
const router = express.Router();

app.use(cors());

//using bodyparser middleware to parse data from json
app.use(bodyParser.json());

//mongoose connection to mongodb
mongoose.connect('mongodb://localhost:27017/Travel-app');

/*const connection = mongoose.connection;

//event listener on open event of mongoose connection
connection.once('open', () => {
    console.log('MongoDB database connection successfully');
});
*/
//attach end points to server
router.route('/users').get((req, res) => {
    console.log('-------');
    console.log(req.body);
    User.find((err, users) => {
        if(err)
            console.log(err);
        else
            res.json(users);
    })
});

router.route('/blog').get((req, res) => {
    console.log('-------');
    console.log(req.body);
    User.find((err, blog) => {
        if(err)
            console.log(err);
        else
            res.json(blog);
    })
});

router.route('/feedback').get((req, res) => {
    console.log('-------');
    console.log(req.body);
    User.find((err, feedback) => {
        if(err)
            console.log(err);
        else
            res.json(feedback);
    })
});



router.route('/users/register').post((req, res) => {
    
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'Added Successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/users/login').post((req, res) => {
    // let user = new User(req.body);
    // if (user.username === req.body.username && user.password === req.body.password){
    //   console.log('Login successful');
    // }
    console.log('---1111----');
    console.log(req.body);
    console.log('---1111----');
    console.log(req.body.username);
    // if(req.body.username === )
    User.find((err, users) => {
        if(err)
            console.log(err);
        else
            res.json(users);
    })
    // user.save()
    //     .then(user => {
    //         res.status(200).json({'login': 'Login Successful'});
    //     })
    //     .catch(err => { 
    //         res.status(400).send('Failed to login');
    //     });
});



app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));