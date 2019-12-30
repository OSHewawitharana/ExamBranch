const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error',(err) => { 
    console.log('Database Error '+err);
});


const app = express();

const users = require('./routes/users'); 

const exams = require('./routes/exams'); 
const subjects = require('./routes/subjects'); 
const enrollments = require('./routes/enrollments');
const admins = require('./routes/admins');

const port = 3000;
app.use(cors());

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/exams', exams);

app.use('/subjects', subjects);

app.use('/enrollments', enrollments);

app.use('/admins', admins);

//Index Route
app.get('/',(req,res)=>{
    res.send('invalid endpoint');
});

app.listen(port,()=> {
    console.log('server stated on: '+port);
});



