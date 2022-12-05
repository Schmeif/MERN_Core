const JokesController = require('../controllers/jokes.controllers')

module.exports = (app) => {
    app.post('/api/newJoke', JokesController.newJoke)

    app.get('/api/getJokes', JokesController.getJokes)

    app.get('/api/getAJoke/:id', JokesController.getAJoke)

    app.put('/api/updateJoke/:id', JokesController.updateJoke)

    app.delete('/api/deleteJoke/:id', JokesController.deleteJoke)
}