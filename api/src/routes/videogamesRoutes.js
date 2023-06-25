const {Router} = require('express')

// Handlers:
const {getVideoGames,getVideoGame,postVideoGame,deleteVideoGame,putVideogame } = require('../handlers/videoGamesHandlers')

//Middlewares:

const postValidate = require('../middlewares/postValidate');
const putValidate = require('../middlewares/putValidate')

//Router:

const videogamesRouter = Router();

//Enrutado:

videogamesRouter.get('/',getVideoGames);
videogamesRouter.get('/:id',getVideoGame);
videogamesRouter.post('/',postValidate,postVideoGame);
videogamesRouter.delete('/:id',deleteVideoGame);
videogamesRouter.put('/:id',putValidate,putVideogame);

module.exports = videogamesRouter;  