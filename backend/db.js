const mongoose = require('mongoose');

const url = "mongodb+srv://sonunew:sonu10121988@mongodbtutorial.ouy1fom.mongodb.net/quora-clone-mern?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

module.exports.connect = ()=>{
  mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
    console.log("Connection mongodb successfull")
  }).catch((error)=>{
     console.log("Error show: ", error)
  })
};


