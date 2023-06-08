const {Router} = require('express')

// Handler:
const {getAllGenres, postGenre, deleteGenre} = require('../handlers/genresHandler')
// Router:

const genresRouter = Router();

// Enrutado:

genresRouter.get('/',getAllGenres);
genresRouter.post('/',postGenre);
genresRouter.delete('/:id',deleteGenre)

module.exports = genresRouter;