const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database')
const User = require('../models/user');

router.post('/register', (req, res, next) => {
    let newUser = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        uniId: req.body.uniId,
        userType: req.body.userType

    });



    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register User' });
        } else {
            res.json({ success: true, msg: 'User Registered Succuessfully' });
        }
    });
});

router.post('/authenticate', (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800 //1 week
                });

                console.log(user)

                res.json({
                    success: true,
                    token: 'jwt ' + token,
                    user: {
                        id: user._id,
                        fullname: user.fullname,
                        email: user.email,
                        userType: user.userType,
                        uniId: user.uniId
                    }
                });


            } else {
                return res.json({ success: false, msg: 'Wrong password' });
            }
        });
    });
});


// 
router.get('/profile',passport.authenticate('jwt', { session: false }),(req, res, next) => {
    console.log("here");
    console.log(req.headers);
    res.json({ user: req.user });
});



module.exports = router;






















