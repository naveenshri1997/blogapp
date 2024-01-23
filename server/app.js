const dotenv = require('dotenv');
const cors = require('cors')
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json());
dotenv.config({path:'./config.env'});
require('./db/conn');
app.use(require('./router/auth'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
    })
)

app.get('/', (req, res) => {
    res.send('hello from server');
});

const PORT= process.env.PORT||5000||'localhost';


app.listen(PORT,(req,res)=>{
    console.log('listen');
})