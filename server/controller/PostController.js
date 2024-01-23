require('../db/conn');
const express = require('express');
const Post = require('../model/postSchema');
const fs = require('fs');

module.exports.addpost = async (req,res)=>{
    const {post_author,post_category,post_title,post_para}= req.body;
    // const {post_author_img} = req.file.path;
    console.log('this=',req.body);
    try{
        const pdata = new Post({post_author,post_category,post_title,post_para});
        await pdata.save();
        
    }catch(e){
        console.log(e);
    }
} 
