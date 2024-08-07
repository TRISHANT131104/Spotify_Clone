const express = require('express');
const router = express.Router();
const passport = require('passport');
const Song = require('../models/Song');
const User = require('../models/User')

router.post('/create', passport.authenticate('jwt',{session:false}), async (req,res)=>{
    const {name, thumbnail, track} = req.body
    if(!name || !thumbnail || !track){
        return res.status(301).json({error:'Insufficient details to creaate song.'})
    }
    const artist = req.user._id;
    const songDetails = {name, thumbnail, track, artist};
    const createdSong = await Song.create(songDetails);
    return res.status(200).json(createdSong);
})

router.get('/get/mysongs', passport.authenticate('jwt',{session:false}), async (req,res)=>{
    const songs = await Song.find({artist:req.user._id});
    return res.status(200).json({data:songs});
})

router.get('/get/artist/:artistId',passport.authenticate('jwt',{session:false}), async (req,res)=>{
    const artistId = req.params.artistId
    const artist = await User.findOne({_id:artistId});
    if(!artist){
        return res.status(301).json({error:'Artist does not exist'})
    }
    const songs = await Song.find({artist:artistId});
    return res.status(200).json({data:songs});
})

router.get('/get/name/:songName',passport.authenticate('jwt',{session:false}), async (req,res)=>{
    const songName = req.params.songName;
    const songs = await Song.find({name:songName});
    return res.status(200).json({data:songs});
})

module.exports = router;