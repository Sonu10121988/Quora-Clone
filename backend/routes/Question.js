const express = require('express');
const router = express.Router();

const questionDB = require('../models/Question');

router.post('/', async(req,res)=>{
    console.log(req.body);
try{
   await questionDB.create({
    questionName: req.body.questionName,
    questionUrl: req.body.questionUrl
   })
   .then(()=>{
    res.status(201).send({
        status: true,
        message: "Question added Successfully."
    })
  }).catch((err)=>{
        res.status(400).send({
            status: false,
            message: "Bed Request"
        })
    })
   
}catch(e){
  res.status(500).send({
    status: false,
    message: "Error while add question"
  })
}
});

router.get('/', async (req,res)=>{
  try{
   await questionDB.aggregate([
    {
    $lookup: {
      from: "answers",  //join collection
      localField: "_id", //field from input document  
      foreignField: "questionId",
      as: "allAnswers" //output array me aayega
    }
  }
   ]).exec().then((doc)=>{
    res.status(200).send(doc)
   }).catch((error)=>{
    res.status(500).send({
      status: false,
      message: "unable to get question detail"
    })
   })
  } catch(e){
   res.status(500).send({
    status: false,
    message: "error look up"
   })
  }
})
module.exports = router;