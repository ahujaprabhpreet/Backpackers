import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let feedbackSchema = new Schema({
    name: {
        type: String
    },

    review: {
        type: String
    },

    email: {
        type: String
    },

    rating: {
        type: String
    }

});
// var Login = module.exports = mongoose.model('Login',loginSchema);
// export default mongoose.model('blog', feedbackSchema);

var Feedback = module.exports = mongoose.model('feedback', feedbackSchema);