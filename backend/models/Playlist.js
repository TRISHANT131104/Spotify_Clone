const mongoose = require('mongoose')

const Playlist = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    owner:{
        type: mongoose.Schema.ObjectId,
        ref: "user"
    },
    songs:[
        {
        type: mongoose.Schema.ObjectId,
        ref: "song",
        },
    ],
    collaborators : [
        {
        type: mongoose.Schema.ObjectId,
        ref: "user"
        },
    ],
})

const PlaylistModel = mongoose.model("Playlist",Playlist);

module.exports = PlaylistModel