require('../db/conn');
const express = require('express');
const Post = require('../model/postSchema');
const fs = require('fs');

module.exports.addpost = async (req,res)=>{
    const {post_author,category,post_title,post_para}= req.body;
    const image = req.file.path;
    console.log(image);
    console.log(req.file, req.body);
    try{
        const data = new Post({post_author,category,post_title,post_para,image});
        const result = await data.save();
        console.log(result);
        if (result) {
            res.status(201).json({ message: 'post saved' });
        } else {
            res.status(500).json({ message: 'post not saved' })
        }
        
    }catch(e){
        console.log(e);
    }
} 
