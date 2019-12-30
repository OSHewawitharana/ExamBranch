const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const Subject = require('../models/subject');


router.post('/addSubject',(req,res,next) => {
    let d =new Date();
    let newSubject = new Subject({
        studentType:req.body.studentType,
        year: req.body.year,
        course: req.body.course,
        subjectName: req.body.subjectName,
        subjectCode:req.body.subjectCode,
        semester:req.body.semester,
        date: d.toUTCString(),
                
    });


        Subject.addSubject(newSubject,(err,subject) => {
            if(err){                
                res.json({success:false,msg:'Failed to add Subject', error:err});
            } else {                
                res.json({success:true,msg:'Subject added Succuessfully'});
            }
        });

    });


router.get('/getAllSubjects',(req,res,next) => {

    Subject.getAllSubjects((err,subjectlist) => {
        if(err){
           
            res.json({success:false,msg:'failed to load all subjects'});
        } else {
            res.json({success:true,subjectlist:subjectlist});
        }
    });
})


router.get('/getSubjects/:year',(req,res,next) => {
    const year = req.params.year;  
    Subject.getSubjects(year,(err,subject) => {
     if(err) {
         res.json({success:false,msg:'Failed to load that specific lab'});
     } else  {
         res.json({success:true,subjectlist:subject});
     }
    });
    
});

// router.post('/searchSubjects',(req,res,next) => {
//     const year = req.body.year;
//     const course = req.body.course;
//     Subject.getSubjects(year,course,(err,subject) => {
//      if(err) {
//          res.json({success:false,msg:'Failed to load that specific Subjects'});
//      } else  {
//          res.json({success:true,subject:subject});
//      }
//     });
// });


router.get('/getFisrtYearUndergraduateSubjects',(req,res,next) => {

    Subject.getFisrtYearSubjectsByUserType("Undergraduate",1,(err,subjectlist) => {
       
     if(err) {
         res.json({success:false,msg:'Failed to load that specific Undergraduate Subject'});
     } else  {
         console.log(subjectlist);
         res.json({success:true,subjectlist:subjectlist});
     }
    });
});



router.get('/getSecondYearUndergraduateSubjects',(req,res,next) => {

    Subject.getSecondYearSubjectsByUserType("Undergraduate",2,(err,subjectlist1) => {
       
     if(err) {
         res.json({success:false,msg:'Failed to load that specific Undergraduate Subject'});
     } else  {
         res.json({success:true,subjectlist1:subjectlist1});
     }
    });
});

router.get('/getThirdYearUndergraduateSubjects',(req,res,next) => {

    Subject.getThirdYearSubjectsByUserType("Undergraduate",3,(err,subjectlist) => {
       
     if(err) {
         res.json({success:false,msg:'Failed to load that specific Undergraduate Subject'});
     } else  {
         res.json({success:true,subjectlist:subjectlist});
     }
    });
});

router.get('/getFourthYearUndergraduateSubjects',(req,res,next) => {

    Subject.getFourthYearSubjectsByUserType("Undergraduate",4,(err,subjectlist) => {
       
     if(err) {
         res.json({success:false,msg:'Failed to load that specific Undergraduate Subject'});
     } else  {
         res.json({success:true,subjectlist:subjectlist});
     }
    });
});



router.get('/getSubjectsByYear/:year',(req,res,next) => {
    const year = req.params.year;
    

    
    Subject.getSubjectsByYear(year,(err,subjectlist) => {
       
     if(err) {
         res.json({success:false,msg:'Failed to load that specific Undergraduate Subject'});
     } else  {
         res.json({success:true,subjectlist:subjectlist});
     }
    });
});




router.get('/getSubjectsBySemesterAndYear/:year/:semester/:userType',(req,res,next) => {
    // const year = req.params.year;
    // const semester = req.params.semester;
    // console.log(year);
    // console.log(req.params.year);
    
    Subject.getSubjectsBySemesterAndYear(req.params.year,req.params.semester,req.params.userType,(err,subjectlist) => {
    //    console.log(req.params.userType);
     if(err) {
         res.json({success:false,msg:'Failed to load that specific Subject'});
     } else  {
        //  console.log(subjectlist);
         res.json({success:true,subjectlist:subjectlist});
     }
    });
});

router.get('/getSubjectsByStudentTypeAndYear/:year/:studentType',(req,res,next) => {
    // const year = req.params.year;
    // const studentType = req.params.studentType;   
    // console.log(studentType); 
    
    Subject.getSubjectsByStudentTypeAndYear(req.params.year,req.params.studentType,(err,subjectlist) => {
    
     if(err) {
         res.json({success:false,msg:'Failed to load that specific  Subject'});
     } else  {
        
         res.json({success:true,subjectlist:subjectlist});
     }
    });


  




});




module.exports = router;






















