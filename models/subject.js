const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const SubjectSchema = mongoose.Schema ({
    studentType:{
        type:String
    },   
    year:{
        type:String
    },
    course:{
        type:String,  
        required:true
    },
    subjectCode:{
        type:String,  
        required:true
    },
    subjectName:{
        type:String,  
        required:true
    },
    semester:{
        type:String
    }
});

const Subject = module.exports = mongoose.model('Subject',SubjectSchema);

module.exports.getAllSubjects = function(callback){
    Subject.find({},callback);
}

module.exports.getSubjectsByYear = function(year,callback) {
    const query = {year:year}
    Subject.find(query,callback);
}


module.exports.getFisrtYearSubjectsByUserType = function(studentType,year,callback) {
    const query = {studentType:"Undergraduate", year:1}
    Subject.find(query,callback);
}


module.exports.getSecondYearSubjectsByUserType = function(studentType,year,callback) {
    const query = {studentType:"Undergraduate", year:2}
    Subject.find(query,callback);
}

module.exports.getThirdYearSubjectsByUserType = function(studentType,year,callback) {
    const query = {studentType:"Undergraduate", year:3}
    Subject.find(query,callback);
}

module.exports.getFourthYearSubjectsByUserType = function(studentType,year,callback) {
    const query = {studentType:"Undergraduate", year:4}
    Subject.find(query,callback);
}

module.exports.addSubject = function(newSubject,callback) {
             newSubject.save(callback);    
}



module.exports.getSubjectsBySemesterAndYear = function (year,semester,userType, callback) {
    console.log(userType);
    Subject.find({  'year': year, 'semester': semester, 'studentType':userType }, callback);
};

module.exports.getSubjectsByStudentTypeAndYear = function (year,studentType, callback) {
    // const query = {'year':year, 'studentType':studentType}
    // Subject.find(query,callback);
    Subject.find({  'year': year,'studentType': studentType }, callback);
    
};