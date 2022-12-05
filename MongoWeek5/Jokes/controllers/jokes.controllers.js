const Joke = require('../models/jokes.models')

module.exports = {
    newJoke:(req, res)=>{
        Joke.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },

    getJokes:(req, res)=>{
        Joke.find()
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },

    getAJoke:(req, res)=>{
        Joke.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },

    updateJoke:(req, res)=>{
        Joke.updateOne({_id:req.params.id}, req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },

    deleteJoke:(req, res)=>{
        Joke.deleteOne({_id:req.params.id}, req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    }
}