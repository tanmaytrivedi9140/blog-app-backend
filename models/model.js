const mongooose = require('mongoose');

const BlogModel = mongooose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    }
},
{
    timestramps: true,
}
);


module.exports = mongooose.model('Blog',BlogModel);