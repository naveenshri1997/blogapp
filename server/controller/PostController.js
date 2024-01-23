require('../db/conn');
const express = require('express');
const Post = require('../model/postSchema');
const fs = require('fs');

module.exports.addpost = async (req,res)=>{
    const {post_author,post_category,post_title,post_para}= req.body;
    // const {post_author_img} = req.file.path;
    console.log('this=',req.body);
    try{
        const data = new Post({post_author,post_category,post_title,post_para});
        const result = await data.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'Post saved' });
        } else {
            res.status(500).json({ message: 'Post not saved' })
        }
        
    }catch(e){
        console.log(e);
    }
} 
