const express= require('express');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.category);
        return cb(null, "./public/upload");
    },
    filename: function (req, file, cb) {

        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });
const uploadPhoto = require("../middleware/uploads");

const User = require('../model/userSchema');
const Post = require('../model/postSchema');
const {addpost}= require('../controller/PostController');
router.post('/addpost', uploadPhoto.single('image'),addpost);
router.post('/login', async(req,res)=>{    
    try {
        const {username,password} = req.body;
        if(!username||!password){
            res.status(400).json({'msg':'username or password not entered!'})
        }        
        const userLogin = await User.findOne({username:username})

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
