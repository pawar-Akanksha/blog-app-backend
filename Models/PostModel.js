const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostModel = new Schema({
    title:{type:String , required:true},
    image:{type:String , required:true},
    description:{type:String , required:true},
    date: {type: String},
    author: {type:String},
    time: {type: String}
},{timestamps:true})

const Post = mongoose.model('posts' , PostModel)

module.exports = Post