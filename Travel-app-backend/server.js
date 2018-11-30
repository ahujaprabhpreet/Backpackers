import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import User from './models/User';

const app = express();
const router = express.Router();

app.use(cors());

//using bodyparser middleware to parse data from json
app.use(bodyParser.json());

//mongoose connection to mongodb
mongoose.connect('mongodb://localhost:27017/Travel-app');

//attach end points to server
router.route('/users').get((req, res) => {
    User.find((err, users) => {
        if(err)
            console.log(err);
        else
            res.json(users);
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

app.use('/', router);

app.listen(4000, () => console.log('Express server running on port 4000'));