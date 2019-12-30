const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const AdminSchema = mongoose.Schema ({
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
    uniid:{
        type:String,
    },
    userType:{
        type:String,
    }
    
});

const Admin = module.exports = mongoose.model('Admin',AdminSchema);

module.exports.getAdminById = function(id,callback){
    Admin.findOne(id,callback);
}

module.exports.getAdminByAdminName = function(fullname,callback){
    const query = {fullname:fullname}
    Admin.findOne(query,callback);
}

module.exports.getAdminByEmail = function(email,callback) {
    const query = {email:email}
    Admin.findOne(query,callback);
}

module.exports.addAdmin = function(newAdmin,callback) {
     bcrypt.genSalt(10,(err,salt) => {
         bcrypt.hash(newAdmin.password,salt,(err,hash) =>  {
             if(err) throw err;
             newAdmin.password =hash;
             newAdmin.save(callback);    
         })
     })
}

module.exports.comparePassword = function(candidatePassword,hash,callback) {
    bcrypt.compare(candidatePassword,hash,(err,isMatch) => {
        if(err) throw err;
        callback(null,isMatch); 
    });  
}