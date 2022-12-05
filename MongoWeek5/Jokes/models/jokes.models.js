const mongoose = require('mongoose')

const JokesSchema = new mongoose.Schema({
    phrase:{
        type:String
    }
}, {timestamps: true})

const Joke = mongoose.model('Joke', JokesSchema)

module.exports = Joke