const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const repeatRegistrationSchema = mongoose.Schema({


    fullname: {
        type: String,
        required: true
    },
    indexno: {
        type: String,

    },
    userType: {
        type: Array,
        required: true
    },
    year: {
        type: Number,

    },
    semester: {
        type: String
    },
    course: {
        type: String
    },
    subjects: {
        type: String
    }

});

const RepeatRegistration = module.exports = mongoose.model('repeatRegistration', repeatRegistrationSchema);


module.exports.addRepeatRegistration = function (newEnrollment, callback) {
    newEnrollment.save(callback);
}


module.exports.getRepeatByRegNo = function(uniId,callback){
    const query =  {'uniId': uniId}
    // console.log(query);
    RepeatRegistration.find(query,callback);
}