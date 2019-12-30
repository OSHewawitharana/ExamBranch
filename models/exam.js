const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ExamSchema = mongoose.Schema ({
    examination:{
        type:String
    },
    deadline:{
        type:String,  
        required:true
    },
    title:{
        type:String,
        
    },
    studentType:{
        type:String
    },
    year:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:String
    },
    // semester:{
    //     type:String
    // }
});

const Exam = module.exports = mongoose.model('Exam',ExamSchema);

module.exports.getAllExams = function(callback){
    Exam.find({},callback);
}

module.exports.getExamByDeadline = function(deadline,callback) {
    const query = {deadline:deadline}
    Exam.findOne(query,callback);
}

module.exports.getExamByStudentType = function(studentType,callback) {
    const query = {studentType:studentType}
    Exam.find(query,callback);
}


module.exports.addExam = function(newExam,callback) {
             newExam.save(callback);    
}

module.exports.getExam = function(id,callback){
    const query = {_id:id}
    Exam.findOne(query,callback);
}
