const express= require('express');
const router = express.Router();
const User = require('../model/userSchema');
const Post = require('../model/postSchema');
const {addpost}= require('../controller/PostController');
router.post('/addpost',addpost);
router.post('/login', async(req,res)=>{    
    try {
        const {username,password} = req.body;
        if(!username||!password){
            res.status(400).json({'msg':'username or password not entered!'})
        }        
        const userLogin = await User.findOne({username:username})
         res.setHeader('Access-Control-Allow-Credentials', 'true');   
        if(!password == userLogin.password){
            res.status(400).json({'msg':'invalid password'});
        }else{
            res.json({'msg':'user login successfuly'});
        }

    } catch (error) {
        console.log(error);
    }
})
module.exports = router;
