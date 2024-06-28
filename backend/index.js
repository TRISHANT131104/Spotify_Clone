const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('./models/User');  
const authRoutes = require('./routes/auth')
const songRoutes = require('./routes/song')
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then((x)=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log(error);
});

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.get("/", (req,res)=>{
    res.send("Hello World!!");
});

app.use('/auth', authRoutes);
app.use('/song', songRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("App is running on port " + process.env.PORT);
});

