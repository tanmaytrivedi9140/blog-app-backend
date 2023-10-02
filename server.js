const express = require("express")
const bodyparser = require('body-parser');
const cors = require('cors');
const dbConnect = require("./config/dbconfig");
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const database = dbConnect();

const app = express();

app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
const router = require('./routes/routes');

app.use('/api/v1',router);

// we dont need to use cors in postman 
// app.use('*' ,(req ,res, next)=>{
//     res.status(404).json({"msg" : "module not found"});
// })

app.listen(PORT , (req,res)=>{
    console.log('server listening at port 3000');
})
app.get('/',(req,res)=>{
    res.send('blog app started at port 3000');
});
