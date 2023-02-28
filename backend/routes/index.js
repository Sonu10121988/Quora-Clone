const express = require('express');

const router = express.Router();

const questionRouter = require('./Question');
const answerRouter = require('./answer');

router.get('/', (req,res)=>{
    res.send("this api is quora clone")
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);


module.exports = router ;