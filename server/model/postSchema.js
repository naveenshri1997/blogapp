const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    post_author:{
        type:String,
    },
    category:{
        type:String,
    },
    post_title:{
        type:String,
    },
    post_para:{
        type:String,
    } ,
    image:{
        type:String,
    }
   
})

const Post = mongoose.model('POST',postSchema);
module.exports= Post;
