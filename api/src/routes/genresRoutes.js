const {Router} = require('express')

// Handler:
const getAllGenres = require('../handlers/genresHandler')
// Router:

const genresRouter = Router();

// Enrutado:

genresRouter.get('/',getAllGenres)

module.exports = genresRouter;