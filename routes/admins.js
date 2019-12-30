const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const Admin = require('../models/admin');

router.post('/registerAdmin',(req,res,next) => {
    let newAdmin = new Admin({
        fullname:req.body.fullname,
        // username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        uniid:req.body.uniid,
        userType:req.body.userType,
                
    });


        Admin.addAdmin(newAdmin,(err,admin) => {
            if(err){
                res.json({success:false,msg:'Failed to register admin'});
            } else {
                res.json({success:true,msg:'Admin Registered Succuessfully'});
            }
        });
   });

router.post('/authenticateAdmin',(req,res ,next) => {
    const email = req.body.email;
    //console.log(email);
    const password = req.body.password;
    //console.log(password);
     
    
    Admin.getAdminByEmail(email,(err,admin) => {
        if(err) throw err;
        if(!admin) {
            return res.json({success:false,msg:'Admin not found'});
        }
        
        Admin.comparePassword(password,admin.password,(err,isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data:admin},config.secret, {
                    expiresIn:604800 //1 week
                });
                
                res.json({
                    success:true,
                    token:'bearer '+token,
                    admin: {
                        id:admin._id,
                        fullname:admin.fullname,
                        email:admin.email    
                    }
                });
            
            } else {
                 return res.json({success:false,msg:'Wrong password'});
            }
        });
    });
});

module.exports = router;






















