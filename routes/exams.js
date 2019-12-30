const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const Exam = require('../models/exam');

router.post('/addExam',(req,res,next) => {
    let d =new Date();
   
    let newExam = new Exam({
        // fullname:req.body.fullname,
        examination: req.body.examination,
        deadline: req.body.deadline,
        title: req.body.title,
        studentType:req.body.studentType,
        year: req.body.year,
        description: req.body.description,
        date: d.toUTCString(),
        // semester:req.body.semester
                
    });


        Exam.addExam(newExam,(err,exam) => {
            if(err){                
                res.json({success:false,msg:'Failed to add exam', error:err});
            } else {                
                res.json({success:true,msg:'Exam Succuessfully'});
            }
        });

    });


router.get('/allExams',(req,res,next) => {
   
    Exam.getAllExams((err,examlist) => {
        if(err){
           
            res.json({success:false,msg:'failed to load all labes'});
        } else {
            res.json({success:true,examlist:examlist});
        }
    });
})



router.get('/getExam/:id',(req,res,next) => {
    const id = req.params.id;
    //console.log(id);
    Exam.getExam(id,(err,exam) => {
     if(err) {
         res.json({success:false,msg:'Failed to load that specific lab'});
     } else  {
         res.json({success:true,exam:exam});
     }
    });
    
});


router.get('/getUndergraduateExams',(req,res,next) => {
    
    Exam.getExamByStudentType("Undergraduate",(err,exam) => {
     if(err) {
         res.json({success:false,msg:'Failed to load that specific lab'});
     } else  {
         res.json({success:true,exam:exam});
     }
    });
    
});


router.get('/getPostgraduateExams',(req,res,next) => {
    
    Exam.getExamByStudentType("Postgraduate",(err,exam) => {
     if(err) {
         res.json({success:false,msg:'Failed to load that specific lab'});
     } else  {
         res.json({success:true,exam:exam});
     }
    });
    
});



module.exports = router;






















