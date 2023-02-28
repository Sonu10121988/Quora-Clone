const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = 5000;
const db = require("./db");
const router = require('./routes');

// databaes connection
db.connect();

app.use(express.json());

// use middleware
app.use(bodyParser.json({limit:"50mb"}));
app.use(bodyParser.urlencoded({extended: true, limit:"50mb"}));

// use cors here
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*")
    req.header("Access-Control-Allow-Headers", "*");
    next()
});
// it's for routes
app.use('/api', router);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req,res)=>{
    try{
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    } catch (e){
   res.send("oops, error come");
    }
});
// use cors
app.use(cors());

// server start
app.listen(process.env.PORT || PORT, ()=>{
   console.log(`server started ${PORT}`);
});