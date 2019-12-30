const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const EnrollmentSchema = mongoose.Schema ({
   

    indexno:{
        type:String,  
        required:true
    }, 
    uniId:{
        type:String,  
       
    }, 
    subjects:{
        type: Array,  
        required:true
    },
    noofsubjects:{
        type:Number,  
        
    }, 
    date:{
        type:String
    },
    examname:{
        type:String
    }

});

const Enrollment = module.exports = mongoose.model('Enrollment',EnrollmentSchema);

module.exports.getEnrollmentByRegNo = function(uniId,callback){
    const query =  {'uniId': uniId}
    // console.log(query);
    Enrollment.find(query,callback);
}



module.exports.addEnrollment = function(newEnrollment,callback) {
             newEnrollment.save(callback);    
}


