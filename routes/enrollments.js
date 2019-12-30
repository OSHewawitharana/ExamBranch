const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const RepeatRegistration = require('../models/repeatRegistration');
const Enrollment = require('../models/enrollment');


router.post('/addEnrollment',(req,res,next) => {
    // let d =new Date();
    // this.route.params.subscribe(params => {
    //         this.subjects = params['subjects'];
            
        
    //      });

    let newEnrollment = new Enrollment({
    date: req.body.date, 
    indexno:req.body.indexno,    
    uniId:req.body.uniId,
    subjects:req.body.subjects,
    noofsubjects:req.body.noofsubjects,
    examname:req.body.examname

    // subjects:req.body.subjects
                
    });
    // console.log(req.body.subje);
    


        Enrollment.addEnrollment(newEnrollment,(err,enrollment) => {
            if(err){                
                res.json({success:false,msg:'Failed to add exam', error:err});
            } else {                
                res.json({success:true,msg:'Enrolled Succuessfully'});
            }
        });

    });


router.get('/allEnrollments',(req,res,next) => {
   
    Exam.getAllnErollments((err,enrollmentlist) => {
        if(err){
           
            res.json({success:false,msg:'failed to load all labes'});
        } else {
            res.json({success:true,enrollmentlist:enrollmentlist});
        }
    });
})





router.post('/addRepeatRegistration',(req,res,next) => {
    // let d =new Date();
    // this.route.params.subscribe(params => {
    //         this.subjects = params['subjects'];
            
        
    //      });

    let newRepeatRegistration = new RepeatRegistration({
        fullname:req.body.fullname,
        indexno:req.body.indexno,
        // userType:req.body.userType,
        year:req.body.year,
        semester:req.body.semester,
        course:req.body.course,
        subjects:req.body.subjects

    // subjects:req.body.subjects
                
    });



    RepeatRegistration.addRepeatRegistration(newRepeatRegistration,(err,RepeatRegistration) => {
            if(err){                
                res.json({success:false,msg:'Failed to add exam', error:err});
            } else {                
                res.json({success:true,msg:'Enrolled Succuessfully'});
            }
        });

    });


router.get('/getEnrollment/:uniId',(req,res,next) => {
    const uniId = req.params.uniId;
    // console.log(uniId);
    Enrollment.getEnrollmentByRegNo( uniId, (err,subjectlist) => {
        console.log(subjectlist);
     if(err) {
         res.json({success:false,msg:'Failed to load that specific details'});
     } else  {
         console.log(subjectlist);
         res.json({success:true,subjectlist:subjectlist});
     }
    });
    
});




router.get('/getRepeatRegistration/:uniId',(req,res,next) => {
    const uniId = req.params.uniId;
    // console.log(uniId);
    RepeatRegistration.getRepeatByRegNo( uniId, (err,subjectlist) => {
        console.log(subjectlist);
     if(err) {
         res.json({success:false,msg:'Failed to load that specific details'});
     } else  {
         console.log(subjectlist);
         res.json({success:true,subjectlist:subjectlist});
     }
    });
    
});




module.exports = router;






















