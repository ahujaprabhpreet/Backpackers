import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    name: {
        type: String
    },

    email: {
        type: String
    },

    contactno: {
        type: String
    },

    username: {
        type: String
    },

    password: {
        type: String
    }

});

export default mongoose.model('User', User);