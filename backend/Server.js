const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// use middleware
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({extended: true, limit:"50mb"}));

// use cors here
app.use((req,res, next) => {
    req.headers("Access-Control-Allow-Origin", "*")
    req.headers("Access-Control-Allow-Headers", "*");
    next()
});
// it's for routes


app.use('/uploads', express.static(path.join(__dirname, "/../uploads")));
app.use('/uploads', express.static(path.join(__dirname, "/../frontend/bulid")));

app.get("*", (req,res)=>{
    try{
    res.sendFile(path.join)
    } catch (e){

    }
})