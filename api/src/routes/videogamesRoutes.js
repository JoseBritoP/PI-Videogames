const {Router} = require('express')

// Handlers:
const {getVideoGames,getVideoGame,postVideoGame, 
 deleteVideoGame
} = require('../handlers/videoGamesHandlers')

//Middlewares:

const postValidate = require('../middlewares/validate');

//Router:

const videogamesRouter = Router();


//Enrutado:

videogamesRouter.get('/',getVideoGames);
videogamesRouter.get('/:id',getVideoGame);
videogamesRouter.post('/',postValidate,postVideoGame);
videogamesRouter.delete('/:id',deleteVideoGame)

module.exports = videogamesRouter;  