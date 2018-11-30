import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let blogSchema = new Schema({
    name: {
        type: String
    },

    review: {
        type: String
    },

    email: {
        type: String
    },

    experience: {
        type: String
    }

});

// export default mongoose.model('blog', blogSchema);
var Blog = module.exports = mongoose.model('blog', blogSchema);