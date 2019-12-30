const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema ({
    fullname:{
        type:String
    },
    email:{
        type:String,  
        required:true
    },
    password:{
        type:String,
        required:true
    },
    uniId:{
        type:String
    },
    userType:{
        type:String,
    }
});

const User = module.exports = mongoose.model('User',UserSchema);

module.exports.getUserById = function(id,callback){
    User.find(id,callback);
}

module.exports.getUserByUserName = function(fullname,callback){
    const query = {fullname:fullname}
    User.findOne(query,callback);
}

module.exports.getUserByEmail = function(email,callback) {
    const query = {email:email}
    User.findOne(query,callback);
}

module.exports.addUser = function(newUser,callback) {
     bcrypt.genSalt(10,(err,salt) => {
         bcrypt.hash(newUser.password,salt,(err,hash) =>  {
             if(err) throw err;
             newUser.password =hash;
             newUser.save(callback);    
         })
     })
}

module.exports.comparePassword = function(candidatePassword,hash,callback) {
    bcrypt.compare(candidatePassword,hash,(err,isMatch) => {
        if(err) throw err;
        callback(null,isMatch); 
    });  
}